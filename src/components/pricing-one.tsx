import { Link } from 'react-router-dom'
import { pricingData } from '../data/data'

interface PricingData{
    style: string;
    title: string;
    value: string;
    feature: string[];
    btn: string;
}
export default function PricingOne() {
  return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {pricingData.map((item:PricingData,index:number)=>(
                <div className={item.style} key={index}>
                    <div className="p-6 py-8">
                        <h6 className="text-lg font-bold uppercase mb-5 text-primary">{item.title}</h6>
                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">{item.value}</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400 border-t border-gray-100 dark:border-gray-700 pt-5">
                            {item.feature.map((el,index)=>(
                                <li className="my-3 flex items-center" key={index}><i className="ri-checkbox-circle-line text-primary text-lg me-1.5"></i> {el}</li>
                            ))}
                        </ul>
                        <Link to="#" className="h-10 px-5 tracking-wide items-center justify-center font-medium rounded-md bg-primary text-white hidden md:inline-flex mt-5">{item.btn}</Link>
                    </div>
                </div>
            ))}
        </div>
  )
}
