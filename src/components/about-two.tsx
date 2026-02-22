import { Link } from 'react-router-dom'

import image1 from '../assets/images/2.jpg'
import image2 from '../assets/images/4.jpg'

export default function AboutTwo() {
  return (
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="xl:col-span-7 lg:col-span-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="group relative overflow-hidden rounded-md shadow-sm shadow-slate-200 dark:shadow-slate-800 h-fit">
                        <div className="relative md:shrink-0">
                            <img className="object-cover md:w-96 w-84 h-[450px] group-hover:scale-105 duration-500" src={image1} alt=""/>
                        </div>

                        <div className="p-6 absolute bottom-0 -start-72 group-hover:start-0 duration-500">
                            <div className="bg-white dark:bg-slate-900 py-2 px-4 w-fit">
                                <Link to="/project-detail" className="hover:text-primary font-semibold">Solar Revolution</Link>
                            </div>

                            <div className="bg-white dark:bg-slate-900 py-2 px-4 mt-2 w-fit">
                                <p className="text-slate-400 text-sm">Solar Transformation</p>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-md shadow-sm shadow-slate-200 dark:shadow-slate-800 h-fit mt-20">
                        <div className="relative md:shrink-0">
                            <img className="object-cover md:w-96 w-84 h-[450px] group-hover:scale-105 duration-500" src={image2} alt=""/>
                        </div>

                        <div className="p-6 absolute bottom-0 -start-72 group-hover:start-0 duration-500">
                            <div className="bg-white dark:bg-slate-900 py-2 px-4 w-fit">
                                <Link to="/project-detail" className="hover:text-primary font-semibold">Sunwave Energy</Link>
                            </div>

                            <div className="bg-white dark:bg-slate-900 py-2 px-4 mt-2 w-fit">
                                <p className="text-slate-400 text-sm">Solar Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-5 lg:col-span-5">
                <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Solar Energy Squad: <br/> Illuminating a Sustainable Future</h4>
                <p className="text-slate-400 ">At Greenoza Solar Energy, we are dedicated to providing sustainable and renewable energy solutions to empower individuals, businesses, and communities. With a passion for harnessing the power of the sun, we strive to make a positive impact on the environment while helping our clients reduce their carbon footprint and energy costs.</p>

                <div className="grid lg:grid-cols-2 mt-4">
                    <ul className="list-none">
                        <li className="mt-2"><i className="ri-circle-fill text-[8px] align-middle"></i> <span className="text-slate-400">Solar Panel Installation</span></li>
                        <li className="mt-2"><i className="ri-circle-fill text-[8px] align-middle"></i> <span className="text-slate-400">Solar System Design</span></li>
                        <li className="mt-2"><i className="ri-circle-fill text-[8px] align-middle"></i> <span className="text-slate-400">Solar Energy Consultation</span></li>
                    </ul>

                    <ul className="list-none">
                        <li className="mt-2"><i className="ri-circle-fill text-[8px] align-middle"></i> <span className="text-slate-400">Solar System Maintenance</span></li>
                        <li className="mt-2"><i className="ri-circle-fill text-[8px] align-middle"></i> <span className="text-slate-400">Solar Energy Storage</span></li>
                        <li className="mt-2"><i className="ri-circle-fill text-[8px] align-middle"></i> <span className="text-slate-400">Solar Financing</span></li>
                    </ul>
                </div>

                <div className="mt-6">
                    <Link to="#" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary/10 hover:bg-primary text-primary hover:text-white">Learn More <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                </div>
            </div>
        </div>
  )
}
