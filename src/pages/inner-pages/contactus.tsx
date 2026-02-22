import { useState } from "react";
import { Link } from 'react-router-dom'

import NavDark from '../../components/navbar/nav-dark'
import Footer from "../../components/footer";

import contact from '../../assets/images/contact.svg'

export default function Contactus() {
    const [isOpen, setOpen] = useState<boolean>(false)
  return (
    <>
        <NavDark/>

        <div className="container-fluid relative mt-20">
            <div className="grid grid-cols-1">
                <div className="w-full leading-[0] border-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} className="w-full h-[500px]" allowFullScreen></iframe>
                </div>
            </div>
        </div>


        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-7 md:col-span-6">
                        <img src={contact} alt=""/>
                    </div>

                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:me-5">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-700 p-6">
                                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Get in touch !</h3>

                                <form>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <label htmlFor="name" className="font-medium">Your Name:</label>
                                            <input name="name" id="name" type="text" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 mt-2" placeholder="Name :"/>
                                        </div>
        
                                        <div className="lg:col-span-6 mb-5">
                                            <label htmlFor="email" className="font-medium">Your Email:</label>
                                            <input name="email" id="email" type="email" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 mt-2" placeholder="Email :"/>
                                        </div>
                                    </div>
    
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <label htmlFor="subject" className="font-medium">Your Question:</label>
                                            <input name="subject" id="subject" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 mt-2" placeholder="Subject :"/>
                                        </div>
    
                                        <div className="mb-5">
                                            <label htmlFor="comments" className="font-medium">Your Comment:</label>
                                            <textarea name="comments" id="comments" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-28 mt-2 textarea" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    <div className="text-center px-6">
                        <div className="size-16 bg-primary/5 text-primary rounded-2xl flex align-middle justify-center items-center shadow-xs mx-auto">
                            <i className="ri-phone-line text-[26px]"></i>
                        </div>

                        <div className="content mt-4">
                            <h5 className="text-lg font-semibold">Phone</h5>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div className="mt-4">
                                <Link to="tel:+152534-468-854" className="text-primary">+152 534-468-854</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="size-16 bg-primary/5 text-primary rounded-2xl flex align-middle justify-center items-center shadow-xs mx-auto">
                            <i className="ri-mail-line text-[26px]"></i>
                        </div>

                        <div className="content mt-4">
                            <h5 className="text-lg font-semibold">Email</h5>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div className="mt-4">
                                <Link to="mailto:contact@example.com" className="text-primary">contact@example.com</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="size-16 bg-primary/5 text-primary rounded-2xl flex align-middle justify-center items-center shadow-xs mx-auto">
                            <i className="ri-map-pin-line text-[26px]"></i>
                        </div>

                        <div className="content mt-4">
                            <h5 className="text-lg font-semibold">Location</h5>
                            <p className="text-slate-400 mt-3">C/54 Northwest Freeway, Suite 558, <br/> Houston, USA 485</p>
                            
                            <div className="mt-4">
                                <Link to="#!" onClick={()=>setOpen(!isOpen)}  className="video-play-icon read-more lightbox text-primary">View on Google map</Link>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <iframe width="100%" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
  )
}
