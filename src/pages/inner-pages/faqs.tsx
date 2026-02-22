import { Link } from 'react-router-dom'
import {Link as Link1} from 'react-scroll'

import bg from '../../assets/images/bg/1.jpg'

import NavLight from '../../components/navbar/nav-light'
import Accordion from '../../components/accordion'
import GetInTouch from '../../components/get-in-touch'
import Footer from '../../components/footer'

export default function Faqs() {
  return (
    <>
        <NavLight/>

        <section className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-slate-900/50"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">Frequently Asked Questions</h3>
                    <ul className="tracking-[0.5px] mb-0 inline-block mt-4">
                        <li className="inline-block font-medium duration-500 ease-in-out text-white/80 hover:text-white"><Link to="/">Greenoza</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                        <li className="inline-block font-medium duration-500 ease-in-out text-white" aria-current="page">FAQs</li>
                    </ul>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="rounded-md shadow-sm dark:shadow-gray-700 p-6 sticky top-20">
                            <ul className="list-unstyled sidebar-nav mb-0 !py-0" id="navmenu-nav">
                                <li className="navbar-item !p-0"><Link1 to="tech" activeClass="active" spy={true} smooth={true} duration={500}  className="text-base font-medium navbar-link">Buying Questions</Link1></li>
                                <li className="navbar-item mt-3 !p-0"><Link1 to="general" activeClass="active" spy={true} smooth={true} duration={500} className="text-base font-medium navbar-link">General Questions</Link1></li>
                                <li className="navbar-item mt-3 !p-0"><Link1 to="payment" activeClass="active" spy={true} smooth={true} duration={500} className="text-base font-medium navbar-link">Payments Questions</Link1></li>
                                <li className="navbar-item mt-3 !p-0"><Link1 to="support" activeClass="active" spy={true} smooth={true} duration={500} className="text-base font-medium navbar-link">Support Questions</Link1></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="tech">
                            <h5 className="text-xl font-semibold">Buying Product</h5>
                            <Accordion/>
                        </div>

                        <div id="general" className="mt-6">
                            <h5 className="text-xl font-semibold">General Questions</h5>
                            <Accordion/>
                        </div>

                        <div id="payment" className="mt-6">
                            <h5 className="text-xl font-semibold">Payments Questions</h5>
                            <Accordion/>
                        </div>

                        <div id="support" className="mt-6">
                            <h5 className="text-xl font-semibold">Support Questions</h5>
                            <Accordion/>
                        </div>
                    </div>
                </div>
            </div>
           <GetInTouch/>
        </section>
        <Footer/>
    </>
  )
}
