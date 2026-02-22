import { Link } from "react-router-dom";
import bg from '../../assets/images/bg/1.jpg'
import bg2 from '../../assets/images/bg/4.jpg'

import NavLight from "../../components/navbar/nav-light";
import AboutOne from "../../components/about-one";
import Service from "../../components/service";
import CtaOne from "../../components/cta-one";
import Faq from "../../components/faq";
import Team from "../../components/team";
import GetInTouch from "../../components/get-in-touch";
import Footer from "../../components/footer";

export default function AboutUs() {
  return (
    <>
        <NavLight/>   

        <section className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-slate-900/50"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">About Us</h3>
                    <ul className="tracking-[0.5px] mb-0 inline-block mt-4">
                        <li className="inline-block font-medium duration-500 ease-in-out text-white/80 hover:text-white"><Link to="/">Greenoza</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                        <li className="inline-block font-medium duration-500 ease-in-out text-white" aria-current="page">About Us</li>
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
                <AboutOne/>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center mb-6">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Reliable Solar Services</h4>
                    <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                </div>
                <Service/>
            </div>
        </section>

        <CtaOne bg={bg2}/>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Meet the Masters of Solar Energy</h4>
                    <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                </div>
                <Team/>
            </div>
            <div className="container relative md:mt-24 mt-16">
                <Faq/>
            </div>
           <GetInTouch/>
        </section>

        <Footer/>
    </>
  )
}
