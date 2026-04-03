import { useTranslatedServices } from '../hooks/useTranslatedData'

interface ServicesData {
    image: string;
    icon: string;
    title: string;
    desc: string;
}

export default function ServiceThree() {
  const services = useTranslatedServices()

  return (
    <div className="lg:col-span-7 md:col-span-6">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 md:mt-0 mt-6 items-stretch">
        {services.slice(0, 3).map((item: ServicesData, index: number) => (
          <div
            key={index}
            className={`group flex flex-col p-6 bg-white dark:bg-slate-900 shadow-sm shadow-slate-200 dark:shadow-slate-800 hover:shadow-md duration-500 rounded-2xl relative overflow-hidden
              ${index === 2 ? 'lg:col-span-2 lg:max-w-sm lg:mx-auto w-full' : ''}`}
          >
            {/* Background image on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-top bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-slate-900/65" />

            {/* Icon */}
            <div className="size-14 shrink-0 bg-primary/5 group-hover:bg-white/20 text-primary group-hover:text-white rounded-xl flex items-center justify-center shadow-sm duration-500 relative z-10">
              <i className={`text-[24px] ${item.icon}`}></i>
            </div>

            {/* Content — flex-1 so all cards fill equal height */}
            <div className="flex flex-col flex-1 mt-5 relative z-10">
              <h5 className="text-base font-semibold leading-snug dark:text-white group-hover:text-white duration-500 line-clamp-2">
                {item.title}
              </h5>
              <p className="text-slate-400 group-hover:text-white/70 mt-3 text-sm leading-relaxed duration-500 flex-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
