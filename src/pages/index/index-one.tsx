import bg from '../../assets/images/bg/1.jpg'
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import cta from '../../assets/images/bg/4.jpg'

import TinySlider from "tiny-slider-react";
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

import NavLight from '../../components/navbar/nav-light'
import CounterOne from '../../components/counter-one';
import AboutOne from '../../components/about-one';
import Service from '../../components/service';
import CtaOne from '../../components/cta-one';
import Faq from '../../components/faq'
import PricingOne from '../../components/pricing-one'
import ClientOne from '../../components/client-one'
import Project from '../../components/project'
import Footer from '../../components/footer'

const settings = {
    items: 1,
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
};

export default function IndexOne() {
  return (
    <>
        <NavLight/>

        <section className="relative py-36 lg:h-screen lg:py-0 flex items-center overflow-hidden bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-slate-900/40 z-2"></div>
            <div className="container relative z-3">
                <div className="grid grid-cols-1 mt-10">
                    <div className="">
                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Sustainable Energy <br/> Empowering The Customers</h1>
                        <p className="text-white/70 text-lg max-w-xl">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                    </div>
                </div>

                <div className="relative bottom-0 mt-36">
                    <div className="flex items-center p-2 rounded-lg shadow-md dark:shadow-gray-800 bg-white/90 dark:bg-slate-900/90 max-w-96">
                        <div className="min-w-32 w-32 relative">
                            <div className="grid grid-cols-1">
                                <div className="tiny-one-item">
                                    <TinySlider settings={settings}>
                                        <div className="tiny-slide">
                                            <div className="m-2">
                                                <img src={img1} className="rounded-md" alt=""/>
                                            </div>
                                        </div>

                                        <div className="tiny-slide">
                                            <div className="m-2">
                                                <img src={img2} className="rounded-md" alt=""/>
                                            </div>
                                        </div>
                                    </TinySlider>
                                </div>
                            </div>
                        </div>

                        <div className="ms-3">
                            <h5 className="text-lg font-semibold">View Our Success Stories With Renewable Energy</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16">
            <div className="container relative">
                <CounterOne/>
            </div>

            <div className="container relative md:mt-24 mt-16">
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

        <CtaOne bg={cta}/>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Solar & Renewable Projects</h4>
                    <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                </div>
                <Project/>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6 items-center">
                    <div className="lg:col-span-5 md:col-span-4">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Happy Solar Customers</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                    </div>
                    <ClientOne/>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Pricing Planes</h4>
                    <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                </div>

                <PricingOne/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <Faq/>
            </div>
        </section>

        <Footer/>
    </>
  )
}