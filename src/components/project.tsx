import { Link } from 'react-router-dom'
import { projectdata } from '../data/data'

interface ProjectData{
    id: number;
    image: string;
    title: string;
    subTitle: string;
}

export default function Project() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        {projectdata.slice(0,3).map((item:ProjectData,index:number)=>(
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
  )
}
