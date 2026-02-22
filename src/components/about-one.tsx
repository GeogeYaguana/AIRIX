import { useState } from "react";
import { Link } from 'react-router-dom'

import about1 from '../assets/images/1.jpg'
import about2 from '../assets/images/2.jpg'

export default function AboutOne() {
     const [isOpen, setOpen] = useState<boolean>(false)
     
  return (
    <>
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-6 md:col-span-7">
                <div className="relative">
                    <div className="relative md:shrink-0 lg:me-0 me-10">
                        <img className="object-cover md:w-96 w-[full] sm:w-[80%] md:h-[500px] h-[450px]  rounded-lg shadow-md dark:shadow-gyay-700" src={about1} alt=""/>
                    </div>

                    <div className="absolute bottom-10 lg:end-6 end-0">
                        <div className="absolute z-1 -top-6 xl:text-start lg:text-end text-end">
                            <Link to="#!" onClick={()=>setOpen(!isOpen)} className="lightbox size-16 rounded-lg shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-primary text-white">
                                <i className="ri-play-fill inline-flex items-center justify-center text-xl"></i>
                            </Link>
                        </div>

                        <div className="md:shrink-0">
                            <img className="object-cover size-48 rounded-lg shadow-md dark:shadow-gyay-700" src={about2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-6 md:col-span-5">
                <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Solar Energy Squad: <br/> Illuminating a Sustainable Future</h4>
                <p className="text-slate-400">At Greenoza Solar Energy, we are dedicated to providing sustainable and renewable energy solutions to empower individuals, businesses, and communities. With a passion for harnessing the power of the sun, we strive to make a positive impact on the environment while helping our clients reduce their carbon footprint and energy costs.</p>

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
