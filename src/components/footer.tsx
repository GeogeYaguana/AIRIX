import logo from '../assets/images/logo-light.png'
import { Link } from 'react-router-dom'
import { footerLinkOne, footerLinkTwo, footerSocial } from '../data/data'

interface LinkData{
    link: string;
    name: string;
}

interface Social{
    link: string;
    icon: string;
}

export default function Footer() {

    const BackToTop = () =>{
        window.scrollTo(0, 0)
    }

  return (
        <footer className="relative bg-slate-900 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="relative py-16">
                        <div className="relative w-full">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                                <div className="lg:col-span-4 md:col-span-12">
                                    <Link to="#" className="text-[22px] focus:outline-none">
                                        <img src={logo} alt=""/>
                                    </Link>
                                    <p className="mt-6 text-gray-300">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>

                                    <form className="mt-4 max-w-72">
                                        <div className="relative">
                                            <div className="form-icon relative">
                                                <i className="ri-mail-line absolute top-1.5 start-4 text-gray-300"></i>
                                                <input type="email" className="form-input px-10 py-2 h-10 rounded-md w-full bg-transparent border border-slate-800 dark:border-slate-700 text-gray-100 focus:shadow-none focus:ring-0 focus:outline-0 placeholder:text-gray-400" placeholder="Email" name="email" required/>
                                            </div>
                                            <button type="submit" id="submitsubscribe" name="send" className="size-9 inline-flex items-center justify-center rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-white duration-500 absolute top-0.5 end-0.5"><i className="ri-mail-line"></i></button>
                                        </div>
                                    </form>
                                </div>
                        
                                <div className="lg:col-span-3 md:col-span-3">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold text-lg">Services</h5>
                            
                                    <ul className="list-none footer-list mt-6">
                                        {footerLinkOne.map((item:LinkData,index:number)=>(
                                            <li className="mt-[10px] mx-0.5" key={index}><i className="ri-arrow-right-s-line text-gray-400 me-1"></i><Link to={item.link} className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">{item.name}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                        
                                <div className="lg:col-span-2 md:col-span-3">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold text-lg">Company</h5>

                                    <ul className="list-none footer-list mt-6">
                                        {footerLinkTwo.map((item:LinkData,index:number)=>(
                                            <li className="mt-[10px]" key={index}><i className="ri-arrow-right-s-line text-gray-400 me-1"></i><Link to={item.link} className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">{item.name}</Link></li>
                                        ))}
                                    </ul>
                                </div>
    
                                <div className="lg:col-span-3 md:col-span-6">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold text-lg">Get In Touch</h5>
                            
                                    <div className="flex mt-6">
                                        <i className="ri-map-pin-line text-2xl text-primary me-2"></i>
                                        <div className="">
                                            <h6 className="text-gray-300">C/54 Northwest Freeway, <br/> Houston, USA 485</h6>
                                        </div>
                                    </div>
                            
                                    <div className="flex mt-4">
                                        <i className="ri-phone-line text-2xl text-primary me-2"></i>
                                        <div className="">
                                            <Link to="tel:+152534-468-854" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">+152 534-468-854</Link>
                                        </div>
                                    </div>

                                    <ul className="list-none mt-6">
                                        {footerSocial.map((item:Social,index:number)=>(
                                            <li className="inline mx-0.5" key={index}><Link to={item.link} target="_blank" className="size-7 inline-flex justify-center items-center text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary"><i className={item.icon}></i></Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-2 items-center gap-6">
                        <div className="md:text-start text-center">
                            <p className="mb-0 text-gray-300">© {new Date().getFullYear()} Greenoza. Design & Develop with <i className="ri-heart-fill text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>

                        <Link to="#" onClick={()=>BackToTop()} id="back-to-top" className="back-to-top rounded-md z-10 size-8 bg-primary text-white flex justify-center items-center md:ms-auto md:mx-0 mx-auto"><i className="ri-arrow-up-line"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
  )
}
