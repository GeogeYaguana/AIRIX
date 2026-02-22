import CountUp from 'react-countup'
import { counterData } from '../data/data'

interface CounterData{
    title: string;
    value: number;
    symblo: string;
}

export default function CounterTwo() {
  return (
        <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
            {counterData.map((item:CounterData,index:number)=>(
                <div className="text-center" key={index}>
                    <h6 className="text-slate-400 mb-0">{item.title}</h6>
                    <h2 className="mb-0 text-4xl mt-3 font-bold"><CountUp className="counter-value" end={item.value}/>{item.symblo}</h2>
                </div>
            ))}
        </div>
  )
}
