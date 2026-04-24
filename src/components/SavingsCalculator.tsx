import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

// ── Constants (sector averages for Ecuador cacao) ──────────────────────────
const DISEASE_REDUCTION   = 0.35  // Airix reduces disease loss by 35 %
const YIELD_IMPROVEMENT   = 0.08  // Better planning improves yield by 8 %
const LABOR_HOURS_HA_WEEK = 2     // Manual scouting hours per ha per week
const LABOR_SAVINGS_PCT   = 0.65  // Rover replaces 65 % of manual scouting
const HOURLY_RATE         = 4.5   // USD per hour (Ecuador agri labour avg)
const INPUT_SAVINGS_PCT   = 0.15  // Precise decisions cut input spend by 15 %

interface Inputs {
  hectares:    number
  yield:       number   // kg / ha / year
  price:       number   // USD / kg
  diseaseLoss: number   // % of production lost to disease
  inputCost:   number   // USD / ha / year
}

interface Result {
  disease:    number
  yieldGain:  number
  labor:      number
  inputs:     number
  total:      number
}

function calcSavings(inp: Inputs): Result {
  const { hectares, yield: yld, price, diseaseLoss, inputCost } = inp
  const totalKg        = yld * hectares
  const lostKg         = totalKg * (diseaseLoss / 100)
  const disease        = lostKg * price * DISEASE_REDUCTION
  const yieldGain      = totalKg * price * YIELD_IMPROVEMENT
  const laborHrsYear   = LABOR_HOURS_HA_WEEK * 52 * hectares
  const labor          = laborHrsYear * LABOR_SAVINGS_PCT * HOURLY_RATE
  const inputs         = inputCost * hectares * INPUT_SAVINGS_PCT
  return { disease, yieldGain, labor, inputs, total: disease + yieldGain + labor + inputs }
}

function fmt(val: number) {
  return val.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

// ── Slider input ────────────────────────────────────────────────────────────
interface SliderProps {
  label:    string
  value:    number
  min:      number
  max:      number
  step:     number
  display:  string
  onChange: (v: number) => void
  tooltip?: string
}

function Slider({ label, value, min, max, step, display, onChange, tooltip }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200 flex items-center gap-1">
          {label}
          {tooltip && (
            <span title={tooltip} className="text-slate-400 cursor-help text-xs">
              <i className="ri-information-line" />
            </span>
          )}
        </span>
        <span className="text-sm font-bold text-primary">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, var(--color-primary, #22c55e) ${pct}%, #e2e8f0 ${pct}%)`,
        }}
      />
      <div className="flex justify-between text-[10px] text-slate-400">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}

// ── Result row ───────────────────────────────────────────────────────────────
function ResultRow({ icon, label, value, tooltip }: { icon: string; label: string; value: number; tooltip: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-700 last:border-0">
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <i className={`${icon} text-sm`} />
        </div>
        <span className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-1">
          {label}
          <span title={tooltip} className="text-slate-400 cursor-help text-xs">
            <i className="ri-information-line" />
          </span>
        </span>
      </div>
      <span className="text-sm font-semibold text-slate-800 dark:text-white tabular-nums">{fmt(value)}</span>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
export default function SavingsCalculator() {
  const { t } = useTranslation()

  const [inp, setInp] = useState<Inputs>({
    hectares:    10,
    yield:       500,
    price:       2.50,
    diseaseLoss: 25,
    inputCost:   150,
  })

  const result: Result = useMemo(() => calcSavings(inp), [inp])

  const set = (key: keyof Inputs) => (v: number) => setInp((prev) => ({ ...prev, [key]: v }))

  const waMsg = encodeURIComponent(
    `Hola, usé la calculadora de Airix y me gustaría saber más. Mi finca es de ${inp.hectares} ha.`
  )

  return (
    <section className="relative lg:py-24 py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container relative">

        {/* Heading */}
        <div className="grid grid-cols-1 pb-10 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 block">
            {t('calculator.kicker')}
          </span>
          <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold dark:text-white">
            {t('calculator.title')}
          </h4>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('calculator.subtitle')}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-start">

          {/* ── Left: Inputs ─────────────────────────────────────────────── */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm shadow-slate-200 dark:shadow-slate-800 p-6 md:p-8 space-y-7">

            <Slider
              label={t('calculator.label_hectares')}
              value={inp.hectares}
              min={1} max={200} step={1}
              display={`${inp.hectares} ha`}
              onChange={set('hectares')}
            />

            <Slider
              label={t('calculator.label_yield')}
              value={inp.yield}
              min={200} max={1200} step={50}
              display={`${inp.yield} kg/ha`}
              onChange={set('yield')}
            />

            <Slider
              label={t('calculator.label_price')}
              value={inp.price}
              min={1.5} max={5.0} step={0.1}
              display={`$${inp.price.toFixed(2)}/kg`}
              onChange={set('price')}
            />

            <Slider
              label={t('calculator.label_disease_loss')}
              value={inp.diseaseLoss}
              min={5} max={60} step={1}
              display={`${inp.diseaseLoss}%`}
              tooltip={t('calculator.disclaimer_disease')}
              onChange={set('diseaseLoss')}
            />

            <Slider
              label={t('calculator.label_input_cost')}
              value={inp.inputCost}
              min={50} max={500} step={10}
              display={`$${inp.inputCost}/ha`}
              tooltip={t('calculator.disclaimer_inputs')}
              onChange={set('inputCost')}
            />
          </div>

          {/* ── Right: Results ───────────────────────────────────────────── */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm shadow-slate-200 dark:shadow-slate-800 p-6 md:p-8">
              <h5 className="font-semibold text-slate-800 dark:text-white mb-1">
                {t('calculator.result_title')}
              </h5>
              <p className="text-xs text-slate-400 mb-5">{t('calculator.result_note')}</p>

              <ResultRow
                icon="ri-virus-line"
                label={t('calculator.result_disease')}
                value={result.disease}
                tooltip={t('calculator.disclaimer_disease')}
              />
              <ResultRow
                icon="ri-seedling-line"
                label={t('calculator.result_yield')}
                value={result.yieldGain}
                tooltip={t('calculator.disclaimer_yield')}
              />
              <ResultRow
                icon="ri-user-settings-line"
                label={t('calculator.result_labor')}
                value={result.labor}
                tooltip={t('calculator.disclaimer_labor')}
              />
              <ResultRow
                icon="ri-leaf-line"
                label={t('calculator.result_inputs')}
                value={result.inputs}
                tooltip={t('calculator.disclaimer_inputs')}
              />
            </div>

            {/* Total card */}
            <div className="bg-primary rounded-2xl p-6 md:p-8 flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">{t('calculator.result_total')}</p>
                <p className="text-white text-3xl font-bold tabular-nums mt-1">{fmt(result.total)}</p>
                <p className="text-white/60 text-xs mt-1">/ año · {inp.hectares} ha</p>
              </div>
              <div className="size-16 rounded-full bg-white/20 flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-white text-3xl" />
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/593988955167?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-800 dark:bg-white hover:bg-slate-700 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm transition-all duration-300"
            >
              <i className="ri-whatsapp-line text-lg" />
              {t('calculator.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
