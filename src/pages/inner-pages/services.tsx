import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import bg from '../../assets/images/bg/1.jpg'

import NavLight from '../../components/navbar/nav-light'
import CostCalculator from '../../components/CostCalculator'
import Footer from '../../components/footer'

interface ServiceItem {
  icon: string
  title: string
  desc: string
}

export default function Services() {
  const { t } = useTranslation()
  const items = t('services_page.items', { returnObjects: true }) as ServiceItem[]

  return (
    <>
      <NavLight />

      {/* Hero */}
      <section
        className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container relative">
          <div className="grid grid-cols-1 mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">
              {t('services_page.hero_title')}
            </h3>
            <ul className="tracking-[0.5px] mb-0 inline-block mt-4">
              <li className="inline-block font-medium duration-500 ease-in-out text-white/80 hover:text-white">
                <Link to="/">Airix</Link>
              </li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="ri-arrow-right-s-line" />
              </li>
              <li className="inline-block font-medium duration-500 ease-in-out text-white" aria-current="page">
                {t('services_page.breadcrumb')}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative lg:py-24 py-16">
        <div className="container relative">

          {/* Section heading */}
          <div className="grid grid-cols-1 pb-8 text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 block">
              {t('services_page.section_kicker')}
            </span>
            <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              {t('services_page.section_title')}
            </h4>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {t('services_page.section_subtitle')}
            </p>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col p-6 bg-white dark:bg-slate-900 shadow-sm shadow-slate-200 dark:shadow-slate-800 hover:shadow-md hover:-translate-y-1 duration-300 rounded-2xl border border-slate-100 dark:border-slate-800"
              >
                {/* Icon */}
                <div className="size-14 shrink-0 bg-primary/5 group-hover:bg-primary text-primary group-hover:text-white rounded-xl flex items-center justify-center shadow-sm duration-300">
                  <i className={`text-[24px] ${item.icon}`} />
                </div>

                {/* Content */}
                <div className="mt-5 flex flex-col flex-1">
                  <h5 className="text-base font-semibold leading-snug dark:text-white group-hover:text-primary duration-300 mb-3">
                    {item.title}
                  </h5>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost calculator */}
      <CostCalculator />

      {/* CTA banner */}
      <section className="relative py-16 bg-primary/5 dark:bg-slate-800">
        <div className="container relative text-center">
          <h4 className="md:text-3xl text-2xl font-semibold mb-3 dark:text-white">
            {t('services_page.cta_title')}
          </h4>
          <p className="text-slate-500 dark:text-slate-300 mb-8 max-w-xl mx-auto">
            {t('services_page.cta_subtitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/593988955167?text=${encodeURIComponent(t('about.wa_msg_question'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-6 font-semibold tracking-wide text-base text-center bg-primary hover:bg-primary/90 text-white rounded-md duration-300"
            >
              <i className="ri-whatsapp-line text-lg" />
              {t('services_page.cta_btn_whatsapp')}
            </a>
            <a
              href={`https://wa.me/593988955167?text=${encodeURIComponent(t('about.wa_msg_schedule'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-6 font-semibold tracking-wide text-base text-center border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white rounded-md hover:border-primary hover:text-primary dark:hover:text-primary duration-300"
            >
              <i className="ri-calendar-schedule-line text-lg" />
              {t('services_page.cta_btn_schedule')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
