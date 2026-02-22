import { Link } from 'react-router-dom'
import { serviceData } from '../data/data';

interface ServicesData{
    image: string;
    icon: string;
    title: string;
    desc: string;
}

export default function Service() {
  return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {serviceData.map((item:ServicesData,index:number)=>(
                <div className="group flex p-6 bg-white dark:bg-slate-900 hover:shadow-sm shadow-slate-200 dark:shadow-slate-800 duration-500 rounded-2xl" key={index}>
                    <div className="size-16 min-w-16 bg-primary/5 text-primary rounded-full flex align-middle justify-center items-center shadow-xs">
                        <i className={`${item.icon} text-[26px]`}></i>
                    </div>

                    <div className="content ms-6">
                        <Link to="#" className="text-lg hover:text-primary dark:text-white dark:hover:text-primary duration-500 ease-in-out font-semibold">{item.title}</Link>
                        <p className="text-slate-400 mt-3">{item.desc}</p>

                        <div className="mt-3">
                            <Link to="#" className="hover:text-primary dark:hover:text-primary dark:text-white duration-500">Read More <i className="ri-arrow-right-line"></i></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
  )
}
