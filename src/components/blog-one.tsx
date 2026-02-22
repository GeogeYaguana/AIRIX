import { Link } from 'react-router-dom'
import { blogData } from '../data/data'

interface BlogData{
    id: number;
    image: string;
    date: string;
    time: string;
    title: string;
    tag: string[];
}

export default function BlogOne() {
  return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {blogData.slice(0,3).map((item:BlogData,index:number)=>( 
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
                            {item.tag.map((el,index)=>(
                                <span className="bg-primary/10 text-primary border border-primary/10 font-medium text-[13px] px-2.5 py-0.5 rounded-md h-3.5 mx-0.5" key={index}>{el}</span>
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
  )
}
