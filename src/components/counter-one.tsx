import CountUp from 'react-countup'
import { counterData } from '../data/data'

interface CounterData{
    title: string;
    value: number;
    symblo: string;
}

export default function CounterOne() {
  return (
    <div className="md:flex justify-center">
        <div className="lg:w-3/4 md:w-full relative -mt-16">
            <div className="p-6 relative z-3 bg-white dark:bg-slate-900 rounded-md shadow-sm shadow-slate-200 dark:shadow-slate-800">
                <div className="md:flex justify-center">
                    {counterData.map((item:CounterData,index:number)=>(
                        <div className="md:w-1/3 mt-8 md:mt-0 first:mt-0" key={index}>
                            <div className="text-center">
                                <h6 className="text-slate-400 mb-0">{item.title}</h6>
                                <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" end={item.value}/>{item.symblo}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
