import { Link } from 'react-router-dom'

import bg from '../../assets/images/bg/1.jpg'

import NavLight from '../../components/navbar/nav-light'
import Footer from '../../components/footer'
import { blogData } from '../../data/data'

interface BlogData{
    id: number;
    image: string;
    date: string;
    time: string;
    title: string;
    tag: string[];
}

export default function Blogs() {
  return (
    <>
        <NavLight/>

        <section className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-slate-900/50"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">Blogs & News</h3>

                    <ul className="tracking-[0.5px] mb-0 inline-block mt-4">
                        <li className="inline-block font-medium duration-500 ease-in-out text-white/80 hover:text-white"><Link to="/">Greenoza</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                        <li className="inline-block font-medium duration-500 ease-in-out text-white" aria-current="page">Blogs</li>
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
                    {blogData.map((item:BlogData,index:number)=>(
                        <div className="group relative h-fit overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-700 duration-500" key={index}>
                            <div className="relative overflow-hidden">
                                <img src={item.image} className="group-hover:scale-105 duration-500" alt=""/>

                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-0 group-hover:opacity-100 duration-500"></div>

                                <div className="absolute start-6 bottom-6 opacity-0 group-hover:opacity-100 duration-500">
                                    <span className="text-white text-sm flex items-center"><i className="ri-calendar-2-line me-1"></i> {item.date}</span>
                                </div>
                                <div className="absolute end-6 bottom-6 opacity-0 group-hover:opacity-100 duration-500">
                                    <span className="text-white text-sm flex items-center"><i className="ri-time-line me-1"></i> {item.time}</span>
                                </div>
                            </div>

                            <div className="relative p-6">
                                <div className="mb-3">
                                    {item.tag.map((el, index)=>( 
                                        <span key={index} className="mx-0.5 bg-primary/10 text-primary border border-primary/10 font-medium text-[13px] px-2.5 py-0.5 rounded-md h-3.5">{el}</span>
                                    ))}
                                </div>

                                <Link to={`/blog-detail/${item.id}`} className="text-lg hover:text-primary font-medium">{item.title}</Link>
                                
                                <div className="mt-3">
                                    <Link to={`/blog-detail/${item.id}`} className="hover:text-primary duration-500 ease-in-out">Read More <i className="ri-arrow-right-line"></i></Link>
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
