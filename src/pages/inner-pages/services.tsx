import { Link } from 'react-router-dom'

import bg from '../../assets/images/bg/1.jpg'

import NavLight from '../../components/navbar/nav-light'
import Footer from '../../components/footer'

export default function Services() {
  return (
    <>
      <NavLight/>
      <section className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">Services</h3>
            <ul className="tracking-[0.5px] mb-0 inline-block mt-4">
              <li className="inline-block font-medium duration-500 ease-in-out text-white/80 hover:text-white"><Link to="/">Airix</Link></li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
              <li className="inline-block font-medium duration-500 ease-in-out text-white" aria-current="page">In Progress</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative lg:py-24 py-16">
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center bg-white dark:bg-slate-900 shadow-md rounded-xl p-8 md:p-10 border border-slate-100 dark:border-slate-800">
            <div className="inline-flex size-14 items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-5">
              <i className="ri-tools-line text-2xl"></i>
            </div>
            <h4 className="md:text-3xl text-2xl font-semibold mb-4">Estamos construyendo esta seccion</h4>
            <p className="text-slate-500 dark:text-slate-300 mb-6">
              Estamos trabajando para publicar muy pronto todos nuestros servicios de forma detallada.
              Gracias por tu paciencia.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link to="/contactus" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-primary hover:bg-primary/90 border border-primary hover:border-primary/90 text-white rounded-md">
                Contactanos
              </Link>
              <Link to="/" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}
