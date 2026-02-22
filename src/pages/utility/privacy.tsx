import { Link } from 'react-router-dom'

import NavLight from '../../components/navbar/nav-light'
import Footer from '../../components/footer'

import bg from '../../assets/images/bg/1.jpg'

export default function Privacy() {
  return (
    <>
        <NavLight/>   

        <section className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-slate-900/50"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">Privacy Policy</h3>
                    <ul className="tracking-[0.5px] mb-0 inline-block mt-4">
                        <li className="inline-block font-medium duration-500 ease-in-out text-white/80 hover:text-white"><Link to="/">Greenoza</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                        <li className="inline-block font-medium duration-500 ease-in-out text-white" aria-current="page">Privacy Policy</li>
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
                <div className="md:flex justify-center">
                    <div className="md:w-3/4">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md">
                            <h5 className="text-xl font-medium mb-4">Overview :</h5>
                            <p className="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                            <p className="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
                            <p className="text-slate-400">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                        
                            <h5 className="text-xl font-medium mb-4 mt-6">We use your information to :</h5>
                            <ul className="list-unstyled text-slate-400 mt-4">
                                <li className="flex mt-2"><i className="ri-arrow-right-line text-primary align-middle me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                <li className="flex mt-2"><i className="ri-arrow-right-line text-primary align-middle me-2"></i>Our Talented & Experienced Marketing Agency</li>
                                <li className="flex mt-2"><i className="ri-arrow-right-line text-primary align-middle me-2"></i>Create your own skin to match your brand</li>
                                <li className="flex mt-2"><i className="ri-arrow-right-line text-primary align-middle me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                <li className="flex mt-2"><i className="ri-arrow-right-line text-primary align-middle me-2"></i>Our Talented & Experienced Marketing Agency</li>
                                <li className="flex mt-2"><i className="ri-arrow-right-line text-primary align-middle me-2"></i>Create your own skin to match your brand</li>
                            </ul>

                            <h5 className="text-xl font-medium mb-4 mt-6">Information Provided Voluntarily :</h5>
                            <p className="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>

                            <div className="mt-6">
                                <Link to="#" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white">Print</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}
