import { Link } from 'react-router-dom'

import bg from '../../assets/images/bg/1.jpg'
import about1 from '../../assets/images/1.jpg'
import about2 from '../../assets/images/2.jpg'

import NavLight from '../../components/navbar/nav-light'
import Service from '../../components/service'
import Accordion from '../../components/accordion'
import Team from '../../components/team'
import ClientOne from '../../components/client-one'
import GetInTouch from '../../components/get-in-touch'
import Footer from '../../components/footer'

export default function Services() {
  return (
    <>
        <NavLight/>
        <section className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-slate-900/50"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">Our Services</h3>

                    <ul className="tracking-[0.5px] mb-0 inline-block mt-4">
                        <li className="inline-block font-medium duration-500 ease-in-out text-white/80 hover:text-white"><Link to="/">Greenoza</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                        <li className="inline-block font-medium duration-500 ease-in-out text-white" aria-current="page">Services</li>
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
                <Service/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="xl:col-span-6 lg:col-span-7">
                        <div className="relative">
                            <div className="relative md:shrink-0 lg:me-0 me-10">
                                <img className="object-cover xl:w-96  w-[85%] lg:h-[500px] h-[450px] rounded-lg shadow-md dark:shadow-gyay-700" src={about1} alt=""/>
                            </div>

                            <div className="absolute bottom-10 lg:end-6 end-0">
                                {/* <div className="absolute z-1 top-10 xl:text-start lg:text-end text-end">
                                    <Link to="#!" className="lightbox size-1 rounded-lg shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-primary text-white">
                                        <i className="ri-play-fill inline-flex items-center justify-center text-xl"></i>
                                    </Link>
                                </div> */}
    
                                <div className="relative md:shrink-0">
                                    <img className="object-cover size-48 rounded-lg shadow-md dark:shadow-gyay-700" src={about2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-6 lg:col-span-5">
                        <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Questions & Answers</h4>
                        <p className="text-slate-400">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                        <Accordion/>
                    </div>
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
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6 items-center">
                    <div className="lg:col-span-5 md:col-span-4">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Happy Solar Customers</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                    </div>
                    <ClientOne/>
                </div>
            </div>
            <GetInTouch/>
        </section>

        <Footer/>
    </>
  )
}
