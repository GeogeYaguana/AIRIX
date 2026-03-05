import logo from '../assets/images/logo-light.png'
import { Link } from 'react-router-dom'
import { footerLinkTwo } from '../data/data'

interface LinkData{
    link: string;
    name: string;
}

export default function Footer() {

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
                                Airix empowers farmers with intelligent crop monitoring,
                                predictive analytics, and AI-driven insights to improve
                                agricultural productivity and sustainability.
                            </p>

                            <form className="mt-4 max-w-sm">
                                <div className="relative">
                                    <i className="ri-mail-line absolute top-2.5 left-3 text-gray-400"></i>

                                    <input
                                        type="email"
                                        className="w-full h-10 pl-10 pr-12 rounded-md bg-transparent border border-slate-700 text-gray-100 placeholder:text-gray-400 focus:outline-none"
                                        placeholder="Your email"
                                        required
                                    />

                                    <button
                                        type="submit"
                                        className="absolute right-1 top-1 size-8 flex items-center justify-center rounded-md bg-primary text-white hover:bg-primary/80"
                                    >
                                        <i className="ri-send-plane-line"></i>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Company */}
                        <div className="lg:col-span-3 md:col-span-3">
                            <h5 className="tracking-wide text-gray-100 font-semibold text-lg">
                                Company
                            </h5>

                            <ul className="mt-6 space-y-2">
                                {footerLinkTwo.map((item:LinkData,index:number)=>(
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
                                Contact
                            </h5>

                            <div className="flex mt-6">
                                <i className="ri-map-pin-line text-xl text-primary mr-2"></i>
                                <p className="text-gray-300">
                                    Agricultural Innovation Hub <br/>
                                    Latin America
                                </p>
                            </div>

                            <div className="flex mt-4">
                                <i className="ri-phone-line text-xl text-primary mr-2"></i>
                                <Link
                                    to="tel:+593 991 677 856"
                                    className="text-gray-300 hover:text-gray-400"
                                >
                                    +593 991 677 856
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="py-6 border-t border-gray-800">
                <div className="container flex md:flex-row flex-col items-center justify-between gap-4">

                    <p className="text-gray-300 text-center md:text-left">
                        © {new Date().getFullYear()} Airix. Built for smart agriculture.
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