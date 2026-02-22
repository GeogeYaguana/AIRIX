import { Link } from 'react-router-dom'

import bg from '../../assets/images/bg/1.jpg'

import NavLight from '../../components/navbar/nav-light'
import GetInTouch from '../../components/get-in-touch'
import PricingOne from '../../components/pricing-one'
import Footer from '../../components/footer'
import FaqTwo from '../../components/faq-two'

export default function Pricing() {
  return (
    <>
        <NavLight/>

        <section className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-slate-900/50"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">Pricing Plans</h3>
                    <ul className="tracking-[0.5px] mb-0 inline-block mt-4">
                        <li className="inline-block font-medium duration-500 ease-in-out text-white/80 hover:text-white"><Link to="/">Greenoza</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                        <li className="inline-block font-medium duration-500 ease-in-out text-white" aria-current="page">Pricing</li>
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
                <PricingOne/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <FaqTwo/>
            </div>

            <GetInTouch/>
        </section>
        <Footer/>
    </>
  )
}
