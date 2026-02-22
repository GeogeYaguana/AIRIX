import { useState } from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/images/3.jpg'
import image2 from '../assets/images/4.jpg'
import Accordion from './accordion'

export default function Faq() {
    let [isOpen, setOpen] = useState<boolean>(false)
    
  return (
    <>
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="xl:col-span-6 lg:col-span-7 col-span-12 lg:order-2 order-1">
                <div className="relative">
                    <div className="relative md:shrink-0 lg:ms-0 ms-10">
                        <img className="object-cover lg:w-96 sm:w-[80%] w-[80%] sm:h-[500px] h-[450px] rounded-lg shadow-md dark:shadow-gyay-700 ms-auto" src={image1} alt=""/>
                    </div>

                    <div className="absolute bottom-10 lg:start-6 start-0">
                        <div className="absolute z-1 -top-[26px] right-0 xl:text-end lg:text-start text-start">
                            <Link to="#!" onClick={()=>setOpen(!isOpen)} className="lightbox size-16 rounded-lg shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-primary text-white">
                                <i className="ri-play-fill inline-flex items-center justify-center text-xl"></i>
                            </Link>
                        </div>

                        <div className="relative md:shrink-0">
                            <img className="object-cover size-48 rounded-lg shadow-md dark:shadow-gyay-700" src={image2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-6 lg:col-span-5 col-span-12 lg:order-1 order-2">
                <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Questions & Answers</h4>
                <p className="text-slate-400">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>

                <Accordion/>
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
