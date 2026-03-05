import { Link } from 'react-router-dom'
import { teamData } from '../data/data'

interface TeamData{
    image: string;
    name: string;
    position: string;
    social: string[];
    link_lk: string;
}

export default function Team() {
  return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {teamData.slice(0,6).map((item:TeamData,index:number)=>(
                <div className="group text-center rounded-md hover:shadow-lg hover:shadow-slate-200 dark:hover:shadow-slate-800 duration-500" key={index}>
                    <div className="relative mx-auto h-90 rounded-md group-hover:rounded-b-none overflow-hidden duration-500">
                        <img
                            src={item.image}
                            className="w-full h-full object-cover"
                            alt={item.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-0 group-hover:opacity-100 duration-500"></div>
                        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                         <li className="inline mx-0.5" key={index}>
                            <Link
                                to={item.link_lk}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md"
                            >
                                <i className={item.social[0]}></i>
                            </Link>
                            </li>
                        </ul>
                        </div>
                    <div className="p-4">
                        <Link to="#" className="text-lg font-medium hover:text-primary duration-500">{item.name}</Link>
                        <p className="text-slate-400">{item.position}</p>
                    </div>
                </div>
            ))}
        </div>
  )
}
