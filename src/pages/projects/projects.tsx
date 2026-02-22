import { Link } from 'react-router-dom'

import NavLight from '../../components/navbar/nav-light'
import Footer from '../../components/footer'

import bg from '../../assets/images/bg/1.jpg'

import { projectdata } from '../../data/data'

interface ProjectData{
    id: number;
    image: string;
    title: string;
    subTitle: string;
}

export default function Projects() {
  return (
    <>
        <NavLight/>

        <section className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-slate-900/50"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">Solar & Renewable Projects</h3>
                    <ul className="tracking-[0.5px] mb-0 inline-block mt-4">
                        <li className="inline-block font-medium duration-500 ease-in-out text-white/80 hover:text-white"><Link to="/">Greenoza</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                        <li className="inline-block font-medium duration-500 ease-in-out text-white" aria-current="page">Projects</li>
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

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {projectdata.map((item:ProjectData,index:number)=>( 
                        <div className="group relative overflow-hidden rounded-md shadow-sm shadow-slate-200 dark:shadow-slate-800" key={index}>
                            <div className="relative md:shrink-0">
                                <img className="object-cover md:w-96 w-full h-85 group-hover:scale-105 duration-500" src={item.image} alt=""/>
                            </div>

                            <div className="p-6 absolute bottom-0 -start-72 group-hover:start-0 duration-500">
                                <div className="bg-white dark:bg-slate-900 py-2 px-4 w-fit">
                                    <Link to={`/project-detail/${item.id}`} className="hover:text-primary font-semibold">{item.title}</Link>
                                </div>

                                <div className="bg-white dark:bg-slate-900 py-2 px-4 mt-2 w-fit">
                                    <p className="text-slate-400 text-sm">{item.subTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <nav>
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link to="#" className="size-8 inline-flex justify-center items-center mx-1 rounded-md text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm shadow-slate-200 dark:shadow-slate-800 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">
                                        <i className="ri-arrow-left-s-line text-[20px]"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-8 inline-flex justify-center items-center mx-1 rounded-md text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm shadow-slate-200 dark:shadow-slate-800 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-8 inline-flex justify-center items-center mx-1 rounded-md text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm shadow-slate-200 dark:shadow-slate-800 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">2</Link>
                                </li>
                                <li>
                                    <Link to="#" aria-current="page" className="z-10 size-8 inline-flex justify-center items-center mx-1 rounded-md text-white bg-primary shadow-sm shadow-slate-200 dark:shadow-slate-800">3</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-8 inline-flex justify-center items-center mx-1 rounded-md text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm shadow-slate-200 dark:shadow-slate-800 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">4</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-8 inline-flex justify-center items-center mx-1 rounded-md text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm shadow-slate-200 dark:shadow-slate-800 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">
                                        <i className="ri-arrow-right-s-line text-[20px]"></i>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1">
                    <div className="relative bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-lg shadow-sm shadow-slate-200 dark:shadow-slate-800 overflow-hidden">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                            <div className="md:text-start text-center z-1">
                                <h3 className="mb-2 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Subscribe to Newsletter!</h3>
                                <p className="text-slate-400 max-w-xl mx-auto">Subscribe to get latest updates and information.</p>
                            </div>
            
                            <div className="z-1">
                                <form className="relative mx-auto max-w-xl">
                                    <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-md bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800" placeholder="Enter your email id.."/>
                                    <button type="submit" className="h-12 px-6 tracking-wide items-center justify-center font-medium bg-primary text-white rounded-md absolute top-[1px] end-[1px]">Subcribe Now</button>
                                </form>
                            </div>
                        </div>
            
                        <div className="absolute -top-5 -start-5">
                            <div className="ri-mail-line lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
                        </div>
            
                        <div className="absolute -bottom-5 -end-5">
                            <div className="ri-pencil-ruler-line lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5 rtl:-rotate-90"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}
