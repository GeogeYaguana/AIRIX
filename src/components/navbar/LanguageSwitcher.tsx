import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language === 'es' ? 'es' : 'en'
  const next    = current === 'es' ? 'en' : 'es'

  return (
    <button
      onClick={() => i18n.changeLanguage(next)}
      aria-label={`Switch to ${next.toUpperCase()}`}
      title={`Cambiar a ${next.toUpperCase()}`}
      className="size-9 rounded-full bg-white shadow-sm hover:shadow-md border border-slate-200 hover:border-primary flex items-center justify-center transition-all duration-200 select-none"
    >
      <span className="text-lg leading-none">
        {current === 'es' ? '🇪🇸' : '🇬🇧'}
      </span>
    </button>
  )
}
