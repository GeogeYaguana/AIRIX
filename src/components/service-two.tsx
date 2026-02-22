import { Link } from 'react-router-dom'
import { serviceData } from '../data/data';

interface ServicesData{
    image: string;
    icon: string;
    title: string;
    desc: string;
}

export default function ServiceTwo() {
  return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {serviceData.map((item:ServicesData,index:number)=>(
                <div className="group flex p-6 bg-white dark:bg-slate-900 hover:shadow-sm shadow-slate-200 dark:shadow-slate-800 duration-500 rounded-2xl relative overflow-hidden h-fit" key={index}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-top bg-no-repeat bg-cover" style={{backgroundImage:`url(${item.image})`}}></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-slate-900/60"></div>
                    <div className="size-16 min-w-16 bg-primary/5 group-hover:bg-white/20 text-primary group-hover:text-white rounded-full flex align-middle justify-center items-center shadow-sm duration-500 relative z-1">
                        <i className={item.icon} style={{fontSize:'26px'}}></i>
                    </div>

                    <div className="content ms-6 relative z-1">
                        <Link to="#" className="text-lg dark:text-white duration-500 ease-in-out font-semibold group-hover:text-white">{item.title}</Link>
                        <p className="text-slate-400 group-hover:text-white/60 mt-3 duration-500">{item.desc}</p>
                        
                        <div className="mt-3">
                            <Link to="" className="group-hover:text-white duration-500">Read More <i className="ri-arrow-right-line"></i></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
  )
}
