import { useState } from "react";
import { useParams } from "react-router-dom";

import { projectdata } from "../../data/data";

import bg from '../../assets/images/blogs/1.jpg'
import bg2 from '../../assets/images/bg/2.jpg'

import NavDark from "../../components/navbar/nav-dark";
import AboutOne from "../../components/about-one";
import Team from "../../components/team";
import Faq from "../../components/faq";
import Footer from "../../components/footer";

interface ProjectData{
    id: number;
    image: string;
    title: string;
    subTitle: string;
}

export default function ProjectDetail() {
    let [activeTab, setActiveTab] = useState<number>(1)

    let params = useParams()
    let id:any = params.id
    let data = projectdata.find((item:ProjectData)=>item.id === parseInt(id))

  return (
    <>
    <NavDark/>

    <section className="relative table w-full py-32 lg:py-80 mt-16 md:mt-18 bg-no-repeat bg-cover bg-fixed" style={{backgroundImage:`url(${data?.image ? data.image : bg})`}}></section>   

    <section className="relative md:py-24 py-16">
        <div className="container">
            <div className="grid grid-cols-1">
                <h5 className="font-semibold md:text-4xl text-3xl">{data?.title ? data.title : 'Solar Revolution'}</h5>
                <p className="text-slate-400 mt-4">Solar energy is a renewable form of energy that harnesses the power of the sun to generate electricity or heat. It is considered one of the cleanest and most abundant sources of energy available to us. Solar energy technologies have advanced significantly over the years and are increasingly being adopted as a viable alternative to traditional fossil fuel-based energy sources.</p>
            </div>
        </div>

        <div className="container-fluid md:mt-24 mt-16 py-20 lg:py-56 bg-no-repeat bg-cover bg-fixed" style={{backgroundImage:`url(${bg2})`}}></div>
        
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1">
                <ul className="inline-block md:w-fit w-full flex-wrap p-2 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                    <li role="presentation" onClick={()=>setActiveTab(1)} className="md:inline-block block mx-0.5">
                        <button className={`px-5 py-2 font-semibold rounded-md text-start w-full duration-500 ${activeTab === 1 ? 'text-white bg-primary' : 'hover:text-primary'}`}>Solar Panel Installation</button>
                    </li>
                    <li role="presentation" onClick={()=>setActiveTab(2)} className="md:inline-block block mx-0.5">
                        <button className={`px-5 py-2 font-semibold rounded-md text-start w-full duration-500 ${activeTab === 2 ? 'text-white bg-primary' : 'hover:text-primary'}`}>Maintenance and Repairs</button>
                    </li>
                    <li role="presentation" onClick={()=>setActiveTab(3)} className="md:inline-block block mx-0.5">
                        <button className={`px-5 py-2 font-semibold rounded-md text-start w-full duration-500 ${activeTab === 3 ? 'text-white bg-primary' : 'hover:text-primary'}`}>Energy Consulting</button>
                    </li>
                </ul>

                <div id="StarterContent" className="mt-6">
                    <div className={activeTab === 1 ? '' : 'hidden'}>
                        <p className="text-slate-400">Professional installation of solar panels on residential or commercial properties. This includes site assessment, system design, and installation to ensure optimal energy production and efficiency.</p>
                        <p className="text-slate-400 mt-4">Solar energy companies may provide upgrade services for existing solar systems, such as adding more panels, integrating advanced monitoring systems, or improving energy storage capabilities. This allows customers to optimize their existing systems or expand their solar capacity.</p>
                    </div>
                    
                    <div className={activeTab === 2 ? '' : 'hidden'}>
                        <p className="text-slate-400">Ongoing maintenance and repair services to ensure solar panels and systems remain in optimal working condition. This includes regular inspections, cleaning, and repairs of any issues that arise.</p>
                        <p className="text-slate-400 mt-4">Companies specializing in off-grid solar systems can design and install standalone solar power systems for remote locations or areas without access to the main power grid. These systems often include a combination of solar panels, batteries, and backup generators.</p>
                    </div>
                    
                    <div className={activeTab === 3 ? '' : 'hidden'}>
                        <p className="text-slate-400">Expert advice on how to optimize energy usage and integrate solar solutions. Consultants assess energy needs, recommend system sizes, and provide information on potential savings and benefits.</p>
                        <p className="text-slate-400 mt-4">Solar energy companies can offer system design and engineering services, customizing solar solutions to meet the specific energy needs and requirements of their clients. This includes determining the optimal placement of solar panels, calculating system size, and designing the electrical components.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <AboutOne/>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Engineer's Team</h4>
                <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
            </div>
            <Team/>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <Faq/>
        </div>
    </section>
    <Footer/>
    </>
  )
}
