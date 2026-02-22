import { Link } from 'react-router-dom'

import bg from '../../assets/images/bg/1.jpg'

import NavLight from '../../components/navbar/nav-light'
import GetInTouch from '../../components/get-in-touch'
import FaqTwo from '../../components/faq-two'
import Footer from '../../components/footer'

import { teamData } from '../../data/data'

interface TeamData{
    image: string;
    name: string;
    position: string;
    social: string[];
}

export default function Team() {
  return (
    <>
        <NavLight/>   

        <section className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-slate-900/50"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">Engineer's Team</h3>
                    <ul className="tracking-[0.5px] mb-0 inline-block mt-4">
                        <li className="inline-block font-medium duration-500 ease-in-out text-white/80 hover:text-white"><Link to="/">Greenoza</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                        <li className="inline-block font-medium duration-500 ease-in-out text-white" aria-current="page">Team</li>
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
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-center text-center">
                    {teamData.map((item:TeamData,index:number)=>(
                        <div className="group text-center rounded-md hover:shadow-lg hover:shadow-slate-200 dark:hover:shadow-slate-800 duration-500" key={index}>
                            <div className="relative mx-auto rounded-md group-hover:rounded-b-none overflow-hidden duration-500">
                                <img src={item.image} className="w-full" alt=""/>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-0 group-hover:opacity-100 duration-500"></div>
                                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                    {item.social.map((el,index)=>( 
                                        <li className="inline mx-0.5" key={index}><Link to="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md"><i className={el}></i></Link></li>
                                    ))}
                                </ul>
                            </div>
        
                            <div className="p-4">
                                <Link to="#" className="text-lg font-medium hover:text-primary duration-500">{item.name}</Link>
                                <p className="text-slate-400">{item.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <FaqTwo/>
            </div>

            <GetInTouch/>
        </section>
        <Footer/>
    </>
  )
}
