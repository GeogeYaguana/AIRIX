import { useTranslation } from 'react-i18next'
import { serviceData, projectdata, faqData } from '../data/data'

export function useTranslatedServices() {
  const { t } = useTranslation()
  return serviceData.map((item, i) => ({
    ...item,
    title: t(`services.${i}.title`),
    desc: t(`services.${i}.desc`),
  }))
}

export function useTranslatedProjects() {
  const { t } = useTranslation()
  return projectdata.map((item, i) => ({
    ...item,
    title: t(`projects.${i}.title`),
    subTitle: t(`projects.${i}.subtitle`),
  }))
}

export function useTranslatedFaq() {
  const { t } = useTranslation()
  return faqData.map((item, i) => ({
    ...item,
    title: t(`faq_items.${i}.title`),
    desc: t(`faq_items.${i}.desc`),
  }))
}

export function useTranslatedFooterLinks() {
  const { t } = useTranslation()
  return [
    { link: '/aboutus',  name: t('footer.nav_about')    },
    { link: '/services', name: t('footer.nav_services') },
    { link: '/faqs',     name: t('footer.nav_faqs')     },
  ]
}
