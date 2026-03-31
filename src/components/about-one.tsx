import { useTranslation } from "react-i18next";
import about2 from "../assets/images/2.jpg";

export default function AboutOne() {
  const { t } = useTranslation();
  return (
    <section className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
          <div className="lg:col-span-6 md:col-span-7">
            <div className="relative">
              {/* Contenedor de imagen ajustado para mostrarla completa */}
              <div className="relative md:shrink-0">
                <img
                  className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-700"
                  src={about2}
                  alt={t('about.img_alt')}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 md:col-span-5">
            <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              {t('about.title')}
            </h4>

            <p className="text-slate-400">
              {t('about.body')}
            </p>

            <div className="grid lg:grid-cols-2 mt-4 gap-2">
              <ul className="list-none">
                {(['feature_1','feature_2','feature_3'] as const).map((k) => (
                  <li key={k} className="mt-2">
                    <i className="ri-circle-fill text-[8px] align-middle me-2 text-primary"></i>
                    <span className="text-slate-400">{t(`about.${k}`)}</span>
                  </li>
                ))}
              </ul>

              <ul className="list-none">
                {(['feature_4','feature_5','feature_6'] as const).map((k) => (
                  <li key={k} className="mt-2">
                    <i className="ri-circle-fill text-[8px] align-middle me-2 text-primary"></i>
                    <span className="text-slate-400">{t(`about.${k}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/593988955167?text=${encodeURIComponent(t('about.wa_msg_question'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 tracking-wide inline-flex items-center justify-center gap-2 font-medium rounded-md bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                {t('about.btn_whatsapp')}
              </a>

              <a
                href={`https://wa.me/593988955167?text=${encodeURIComponent(t('about.wa_msg_schedule'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 tracking-wide inline-flex items-center justify-center gap-2 font-medium rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <i className="ri-calendar-schedule-line text-lg"></i>
                {t('about.btn_schedule')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}