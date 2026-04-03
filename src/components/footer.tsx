import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../assets/images/logo-light.png'
import { Link } from 'react-router-dom'
import { useTranslatedFooterLinks } from '../hooks/useTranslatedData'

interface LinkData{
    link: string;
    name: string;
}

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateChallenge() {
    const a = randomInt(1, 9)
    const b = randomInt(1, 9)
    return { a, b, answer: a + b, question: `${a} + ${b} =` }
}

function NewsletterForm() {
    const { t } = useTranslation()
    const [challenge, setChallenge] = useState(generateChallenge)
    const [email, setEmail]         = useState('')
    const [captcha, setCaptcha]     = useState('')
    const [error, setError]         = useState('')
    const [success, setSuccess]     = useState(false)

    const refresh = useCallback(() => {
        setChallenge(generateChallenge())
        setCaptcha('')
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError(t('newsletter.error_email'))
            return
        }
        if (parseInt(captcha, 10) !== challenge.answer) {
            setError(t('newsletter.error_captcha'))
            refresh()
            return
        }
        setSuccess(true)
    }

    if (success) {
        return (
            <p className="mt-4 flex items-center gap-2 text-primary font-medium text-sm">
                <i className="ri-checkbox-circle-line text-lg"></i>
                {t('newsletter.success')}
            </p>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4 max-w-sm space-y-2" noValidate>
            {/* Email input */}
            <div className="relative">
                <i className="ri-mail-line absolute top-2.5 left-3 text-gray-400"></i>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 pl-10 pr-12 rounded-md bg-transparent border border-slate-700 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-primary/60 transition-colors"
                    placeholder={t('newsletter.placeholder')}
                    required
                />
                <button
                    type="submit"
                    className="absolute right-1 top-1 size-8 flex items-center justify-center rounded-md bg-primary text-white hover:bg-primary/80 transition-colors"
                >
                    <i className="ri-send-plane-line"></i>
                </button>
            </div>

            {/* CAPTCHA row */}
            <div className="flex items-center gap-2">
                <label className="text-gray-400 text-xs shrink-0 whitespace-nowrap">
                    {t('newsletter.captcha_label')} <span className="text-gray-200 font-semibold">{challenge.question}</span>
                </label>
                <input
                    type="number"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    className="w-16 h-8 px-2 rounded-md bg-transparent border border-slate-700 text-gray-100 text-center text-sm focus:outline-none focus:border-primary/60 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder={t('newsletter.captcha_placeholder')}
                    required
                />
                <button
                    type="button"
                    onClick={refresh}
                    aria-label="Refresh captcha"
                    className="text-gray-500 hover:text-gray-300 transition-colors"
                >
                    <i className="ri-refresh-line text-base"></i>
                </button>
            </div>

            {/* Error */}
            {error && (
                <p className="text-red-400 text-xs flex items-center gap-1">
                    <i className="ri-error-warning-line"></i>
                    {error}
                </p>
            )}
        </form>
    )
}

export default function Footer() {
    const { t } = useTranslation()
    const footerLinks = useTranslatedFooterLinks()

    const BackToTop = () =>{
        window.scrollTo(0, 0)
    }

  return (
        <footer className="relative bg-slate-900 dark:bg-slate-800">
            <div className="container relative">
                <div className="py-16">
                    <div className="grid lg:grid-cols-12 md:grid-cols-6 grid-cols-1 gap-8">

                        {/* Brand */}
                        <div className="lg:col-span-6 md:col-span-6">
                            <Link to="/" className="text-[22px] focus:outline-none">
                                <img src={logo} alt="Airix"/>
                            </Link>

                            <p className="mt-6 text-gray-300 max-w-md">
                                {t('footer.tagline')}
                            </p>
                        </div>

                        {/* Company */}
                        <div className="lg:col-span-3 md:col-span-3">
                            <h5 className="tracking-wide text-gray-100 font-semibold text-lg">
                                {t('footer.col_company')}
                            </h5>

                            <ul className="mt-6 space-y-2">
                                {footerLinks.map((item:LinkData,index:number)=>(
                                    <li key={index}>
                                        <Link
                                            to={item.link}
                                            className="text-gray-300 hover:text-gray-400"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="lg:col-span-3 md:col-span-3">
                            <h5 className="tracking-wide text-gray-100 font-semibold text-lg">
                                {t('footer.col_contact')}
                            </h5>

                            <div className="flex mt-6">
                                <i className="ri-map-pin-line text-xl text-primary mr-2 mt-0.5 shrink-0"></i>
                                <p className="text-gray-300">
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
                                    className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md border border-slate-500 hover:border-primary text-gray-300 hover:text-primary font-medium text-sm transition-all duration-300"
                                >
                                    <i className="ri-calendar-schedule-line text-base"></i>
                                    {t('footer.btn_schedule')}
                                </a>

                                <a
                                    href="mailto:marketing_ec_01@airixtech.com?subject=Consulta%20Airix"
                                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200"
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
            <div className="py-6 border-t border-gray-800">
                <div className="container flex md:flex-row flex-col items-center justify-between gap-4">

                    <p className="text-gray-300 text-center md:text-left">
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