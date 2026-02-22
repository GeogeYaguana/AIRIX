import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import bg1 from '../../assets/images/bg/1.jpg'
import bg2 from '../../assets/images/bg/2.jpg'
import bg3 from '../../assets/images/bg/3.jpg'

import NavLight from '../../components/navbar/nav-light'
import AboutTwo from '../../components/about-two'
import Service from '../../components/service'
import CtaTwo from '../../components/cta-two'
import Project from '../../components/project'
import ClientOne from '../../components/client-one'
import PricingOne from '../../components/pricing-one'
import Faq from '../../components/faq'
import BlogOne from '../../components/blog-one'
import Footer from '../../components/footer'

export default function IndexFour() {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); 

    const images = [bg1, bg2, bg3]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % images.length 
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

  return (
    <>
        <NavLight/>

        <section className="relative py-36 lg:py-56 w-full table" id="home" style={{backgroundImage:`url(${images[currentImageIndex]})`}}>
            <div className="container relative z-1">
                <div className="grid grid-cols-1 mt-12">
                    <h3 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl my-6">Seamless Solar Installation <br/> Service Since 2010</h3>

                    <p className="text-white/70 text-lg max-w-xl">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                
                    <div className="mt-8">
                        <Link to="#" className="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white">Learn More <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                    </div>
                </div>
            </div>
            <div className="absolute lg:w-[55%] md:w-4/6 w-full h-full bg-gradient-to-t to-slate-900/95 from-slate-700/95 md:opacity-100 opacity-80 top-0"></div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <AboutTwo/>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center mb-6">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Reliable Solar Services</h4>
                    <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                </div>
                <Service/>
            </div>
        </section>

        <CtaTwo/>

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

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Latest Blogs or News</h4>
                    <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                </div>
                <BlogOne/>
            </div>
        </section>
        <Footer/>
    </>
  )
}
