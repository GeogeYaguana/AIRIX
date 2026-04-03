import { useTranslation } from 'react-i18next'
import logoDark from '../assets/images/logo-dark.png'
import { Link } from 'react-router-dom'
import { useTranslatedFooterLinks } from '../hooks/useTranslatedData'

interface LinkData{
    link: string;
    name: string;
}


export default function Footer() {
    const { t } = useTranslation()
    const footerLinks = useTranslatedFooterLinks()

    const BackToTop = () =>{
        window.scrollTo(0, 0)
    }

  return (
        <footer className="relative bg-gradient-to-b from-gray-50 to-gray-300 dark:from-gray-100 dark:to-gray-200">
            <div className="container relative">
                <div className="py-16">
                    <div className="grid lg:grid-cols-12 md:grid-cols-6 grid-cols-1 gap-8">

                        {/* Brand */}
                        <div className="lg:col-span-6 md:col-span-6">
                            <Link to="/" className="text-[22px] focus:outline-none">
                                <img src={logoDark} alt="Airix"/>
                            </Link>

                            <p className="mt-6 text-slate-600 max-w-md">
                                {t('footer.tagline')}
                            </p>
                        </div>

                        {/* Company */}
                        <div className="lg:col-span-3 md:col-span-3">
                            <h5 className="tracking-wide text-slate-800 font-semibold text-lg">
                                {t('footer.col_company')}
                            </h5>

                            <ul className="mt-6 space-y-2">
                                {footerLinks.map((item:LinkData,index:number)=>(
                                    <li key={index}>
                                        <Link
                                            to={item.link}
                                            className="text-slate-600 hover:text-primary"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="lg:col-span-3 md:col-span-3">
                            <h5 className="tracking-wide text-slate-800 font-semibold text-lg">
                                {t('footer.col_contact')}
                            </h5>

                            <div className="flex mt-6">
                                <i className="ri-map-pin-line text-xl text-primary mr-2 mt-0.5 shrink-0"></i>
                                <p className="text-slate-600">
                                    {t('footer.address_line1')} <br/>
                                    {t('footer.address_line2')}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 mt-6">
                                <a
                                    href={`https://wa.me/593988955167?text=${encodeURIComponent(t('footer.wa_msg_question'))}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md bg-primary hover:bg-primary/90 text-white font-medium text-sm transition-all duration-300"
                                >
                                    <i className="ri-whatsapp-line text-base"></i>
                                    {t('footer.btn_whatsapp')}
                                </a>

                                <a
                                    href={`https://wa.me/593988955167?text=${encodeURIComponent(t('footer.wa_msg_schedule'))}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md border border-slate-400 hover:border-primary text-slate-700 hover:text-primary font-medium text-sm transition-all duration-300"
                                >
                                    <i className="ri-calendar-schedule-line text-base"></i>
                                    {t('footer.btn_schedule')}
                                </a>

                                <a
                                    href="mailto:marketing_ec_01@airixtech.com?subject=Consulta%20Airix"
                                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors duration-200"
                                >
                                    <i className="ri-mail-line"></i>
                                    marketing_ec_01@airixtech.com
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="py-6 border-t border-gray-200 dark:border-gray-300">
                <div className="container flex md:flex-row flex-col items-center justify-between gap-4">

                    <p className="text-slate-600 text-center md:text-left">
                        © {new Date().getFullYear()} {t('footer.copyright')}
                    </p>

                    <button
                        onClick={()=>BackToTop()}
                        className="size-8 bg-primary text-white rounded-md flex items-center justify-center"
                    >
                        <i className="ri-arrow-up-line"></i>
                    </button>

                </div>
            </div>
        </footer>
  )
}