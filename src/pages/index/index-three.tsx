import { Link } from 'react-router-dom'
import { useState } from "react";

import bg from '../../assets/images/bg/video.jpg'
import map from '../../assets/images/map.png'

import NavLight from '../../components/navbar/nav-light'
import BrandLogo from '../../components/brand-logo'
import BlogOne from '../../components/blog-one'
import Team from '../../components/team'
import ClientOne from '../../components/client-one'
import Faq from '../../components/faq'
import Project from '../../components/project'
import AboutOne from '../../components/about-one'
import CounterTwo from '../../components/counter-two'
import ServiceThree from '../../components/service-three'
import Footer from '../../components/footer'

import CountUp from 'react-countup';

export default function IndexThree() {
    const [isOpen, setOpen] = useState<boolean>(false)
  return (
    <>
      <NavLight/>

          <section className="relative md:py-60 py-36 items-center bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <iframe src="https://www.youtube.com/embed/iCvUFavByJE?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2  -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>
            </div>
            <div className="absolute inset-0 bg-slate-900/70"></div>

            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <div className="relative">
                        <Link to="#!" onClick={()=>setOpen(!isOpen)} className="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white/20 hover:bg-white text-white hover:text-primary duration-500">
                            <i className="ri-play-fill inline-flex items-center justify-center text-xl"></i>
                        </Link>
                    </div>
                    
                    <h3 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl my-6">Manageable, Reliable <br/> and Affordable Renewable Energy!</h3>

                    <p className="text-white/70 text-lg max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                
                    <div className="mt-8">
                        <Link to="" className="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white">Learn More <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
            <div className="container relative">
                <BrandLogo/>
            </div>
        </section>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="sticky top-20">
                            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Reliable Solar Services</h4>

                            <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                        </div>
                    </div>

                    <ServiceThree/>
                </div>
            </div>

            <div className="container relative lg:mt-24 mt-16 py-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${map})`}}></div>
                <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Trusted by more than <CountUp className="counter-value" end={24}/>K+ users</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                </div>

                <CounterTwo/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <AboutOne/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Solar & Renewable Projects</h4>
                    <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                </div>
                <Project/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <Faq/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6 items-center">
                    <div className="lg:col-span-5 md:col-span-4">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Happy Solar Customers</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                    </div>

                    <ClientOne/>
                </div>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Meet the Masters of Solar Energy</h4>
                    <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                </div>

                <Team/>
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

        {isOpen && 
            <div className="flex bg-[#00000099] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-1 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <button type="button" onClick={()=>setOpen(!isOpen)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-1 md:p-1 space-y-4">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        }

    </>
  )
}
