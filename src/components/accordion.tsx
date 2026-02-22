import { useState } from 'react'
import { faqData } from '../data/data'

interface FaqData{
    id: number;
    title: string;
    desc: string;
}

export default function Accordion() {
    let [activeIndex, setActiveIndex] = useState<number>(1)
  return (
    <div className="mt-6">
        {faqData.map((item:FaqData,index:number)=>(
            <div className="relative shadow-sm dark:shadow-gray-700 rounded-md overflow-hidden mt-3" key={index}>
                <h2 className="font-medium">
                    <button onClick={()=>setActiveIndex(activeIndex === item.id ? 0 : item.id)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === item.id ? 'bg-gray-50 dark:bg-slate-800 text-primary' : ''}`}>
                        <span>{item.title}</span>
                        <svg data-accordion-icon className={`size-5 shrink-0 ${activeIndex === item.id ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </h2>
                <div className={`${activeIndex === item.id ? '' : 'hidden'}`}>
                    <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
