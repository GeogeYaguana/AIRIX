import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

// ── Pricing constants (match business model exactly) ──────────────────────
const PRICE_BASIC    = 50   // $/ha/month — 1 visit/month
const PRICE_PREMIUM  = 90   // $/ha/month — 2 visits/month
const PRICE_ONBOARD  = 30   // $/ha — one-time setup
const VISITS_BASIC   = 1
const VISITS_PREMIUM = 2

type Plan = 'basic' | 'premium'

function fmt(val: number) {
  return val.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

// ── Plan card (selector) ──────────────────────────────────────────────────
interface PlanCardProps {
  name:       string
  freq:       string
  priceLabel: string
  selected:   boolean
  popular?:   boolean
  badge?:     string
  onSelect:   () => void
}

function PlanCard({ name, freq, priceLabel, selected, popular, badge, onSelect }: PlanCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative w-full text-left rounded-xl border-2 p-4 transition-all duration-200 focus:outline-none
        ${selected
          ? 'border-primary bg-primary/5 dark:bg-primary/10'
          : 'border-slate-200 dark:border-slate-700 hover:border-primary/40'
        }`}
    >
      {popular && badge && (
        <span className="absolute -top-3 right-4 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
          {badge}
        </span>
      )}
      <div className="flex items-center gap-3">
        {/* Radio dot */}
        <div className={`size-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors
          ${selected ? 'border-primary' : 'border-slate-300 dark:border-slate-600'}`}>
          {selected && <div className="size-2 rounded-full bg-primary" />}
        </div>
        <div className="flex-1 min-w-0">
          <p className={`font-semibold text-sm ${selected ? 'text-primary' : 'text-slate-800 dark:text-white'}`}>
            {name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{freq}</p>
        </div>
        <span className={`text-sm font-bold tabular-nums shrink-0 ${selected ? 'text-primary' : 'text-slate-700 dark:text-slate-200'}`}>
          {priceLabel}
        </span>
      </div>
    </button>
  )
}

// ── Result metric ─────────────────────────────────────────────────────────
function Metric({ label, value, sub, highlight }: { label: string; value: string; sub?: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-4 ${highlight ? 'bg-primary text-white' : 'bg-slate-50 dark:bg-slate-800'}`}>
      <p className={`text-xs font-medium mb-1 ${highlight ? 'text-white/70' : 'text-slate-500 dark:text-slate-400'}`}>
        {label}
      </p>
      <p className={`text-2xl font-bold tabular-nums ${highlight ? 'text-white' : 'text-slate-800 dark:text-white'}`}>
        {value}
      </p>
      {sub && (
        <p className={`text-[11px] mt-0.5 ${highlight ? 'text-white/60' : 'text-slate-400'}`}>{sub}</p>
      )}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────
export default function CostCalculator() {
  const { t } = useTranslation()

  const [hectares,  setHectares]  = useState(20)
  const [plan,      setPlan]      = useState<Plan>('basic')
  const [newClient, setNewClient] = useState(true)

  const pricePerHa = plan === 'basic' ? PRICE_BASIC : PRICE_PREMIUM
  const visits     = plan === 'basic' ? VISITS_BASIC : VISITS_PREMIUM

  const results = useMemo(() => {
    const monthly    = hectares * pricePerHa
    const onboarding = newClient ? hectares * PRICE_ONBOARD : 0
    const firstMonth = monthly + onboarding
    const annual     = monthly * 12 + onboarding
    const perVisit   = monthly / visits
    return { monthly, onboarding, firstMonth, annual, perVisit }
  }, [hectares, pricePerHa, newClient, visits])

  const includesBasic  = t('cost_calculator.includes_basic',   { returnObjects: true }) as string[]
  const includesPremium = t('cost_calculator.includes_premium', { returnObjects: true }) as string[]
  const features = plan === 'basic' ? includesBasic : includesPremium

  const waMsg = encodeURIComponent(
    `Hola, me gustaría conocer más sobre el ${plan === 'basic' ? 'Plan Básico' : 'Plan Premium'} de Airix para ${hectares} ha.`
  )

  const pct = ((hectares - 1) / (200 - 1)) * 100

  return (
    <section className="relative lg:py-24 py-16">
      <div className="container relative">

        {/* Heading */}
        <div className="grid grid-cols-1 pb-10 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 block">
            {t('cost_calculator.kicker')}
          </span>
          <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold dark:text-white">
            {t('cost_calculator.title')}
          </h4>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('cost_calculator.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-start">

          {/* ── Left column: inputs ──────────────────────────────────────── */}
          <div className="space-y-6">

            {/* Hectares slider */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm shadow-slate-200 dark:shadow-slate-800 p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {t('cost_calculator.label_hectares')}
                </label>
                <span className="text-sm font-bold text-primary">{hectares} ha</span>
              </div>
              <input
                type="range"
                min={1} max={200} step={1}
                value={hectares}
                onChange={(e) => setHectares(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, var(--color-primary,#22c55e) ${pct}%, #e2e8f0 ${pct}%)` }}
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>1 ha</span>
                <span>200 ha</span>
              </div>
            </div>

            {/* Plan selector */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm shadow-slate-200 dark:shadow-slate-800 p-6 md:p-8 space-y-3">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">
                {t('cost_calculator.label_plan')}
              </p>
              <PlanCard
                name={t('cost_calculator.plan_basic_name')}
                freq={t('cost_calculator.plan_basic_freq')}
                priceLabel={t('cost_calculator.plan_basic_price')}
                selected={plan === 'basic'}
                onSelect={() => setPlan('basic')}
              />
              <PlanCard
                name={t('cost_calculator.plan_premium_name')}
                freq={t('cost_calculator.plan_premium_freq')}
                priceLabel={t('cost_calculator.plan_premium_price')}
                selected={plan === 'premium'}
                popular
                badge={t('cost_calculator.badge_popular')}
                onSelect={() => setPlan('premium')}
              />
            </div>

            {/* New client toggle */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm shadow-slate-200 dark:shadow-slate-800 p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {t('cost_calculator.label_new_client')}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {t('cost_calculator.result_note')}
                  </p>
                </div>
                <div className="flex gap-2 ml-4 shrink-0">
                  {(['yes', 'no'] as const).map((opt) => {
                    const active = opt === 'yes' ? newClient : !newClient
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setNewClient(opt === 'yes')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200
                          ${active
                            ? 'bg-primary border-primary text-white'
                            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary/40'
                          }`}
                      >
                        {t(`cost_calculator.${opt}`)}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* What's included */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm shadow-slate-200 dark:shadow-slate-800 p-6 md:p-8">
              <p className="text-sm font-semibold text-slate-800 dark:text-white mb-4">
                {t('cost_calculator.includes_title')}
              </p>
              <ul className="space-y-2">
                {features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <i className="ri-checkbox-circle-fill text-primary mt-0.5 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right column: results ────────────────────────────────────── */}
          <div className="space-y-4 lg:sticky lg:top-24">

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-3">
              <Metric
                label={t('cost_calculator.result_monthly')}
                value={fmt(results.monthly)}
                sub={`${hectares} ha × ${fmt(pricePerHa)}`}
              />
              <Metric
                label={t('cost_calculator.result_per_visit')}
                value={fmt(results.perVisit)}
                sub={`${visits} visita${visits > 1 ? 's' : ''}/mes`}
              />
              {newClient && (
                <Metric
                  label={t('cost_calculator.result_onboarding')}
                  value={fmt(results.onboarding)}
                  sub={`${hectares} ha × $${PRICE_ONBOARD}`}
                />
              )}
              <Metric
                label={t('cost_calculator.result_annual')}
                value={fmt(results.annual)}
                sub="12 meses + onboarding"
              />
            </div>

            {/* Total highlight */}
            <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 md:p-8 flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">{t('cost_calculator.result_first_month')}</p>
                <p className="text-white text-3xl font-bold tabular-nums mt-1">{fmt(results.firstMonth)}</p>
                <p className="text-white/40 text-xs mt-1">
                  {newClient ? `${fmt(results.monthly)} recurrente + ${fmt(results.onboarding)} onboarding` : `${fmt(results.monthly)} / mes`}
                </p>
              </div>
              <div className="size-16 rounded-full bg-white/10 flex items-center justify-center">
                <i className="ri-calculator-line text-white text-3xl" />
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/593988955167?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary/25"
            >
              <i className="ri-whatsapp-line text-lg" />
              {t('cost_calculator.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
