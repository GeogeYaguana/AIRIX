import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css'

import { clientData } from "../data/data";

interface ClientData{
    image: string;
    rate: string[];
    desc: string;
    name: string;
    position: string;
}

const settings = {
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 16,
};

export default function ClientOne() {
  return (
        <div className="lg:col-span-7 md:col-span-8">
            <div className="relative w-full">
                <div className="tiny-single-item">
                    <TinySlider settings={settings}>
                        {clientData.map((item:ClientData,index:number)=>(
                            <div className="tiny-slide" key={index}>
                                <div className="mx-4 flex items-center">
                                    <div className="relative md:shrink-0">
                                        <img className="object-cover md:w-28 min-w-20 md:h-40 h-32 rounded-lg shadow-md dark:shadow-gyay-700" src={item.image} alt=""/>
                                    </div>

                                    <div className="ms-6">
                                        <ul className="text-amber-500 list-none mb-2">
                                            {item.rate.map((el,index)=>(
                                                <li className="inline mx-0.5" key={index}><i className={el}></i></li>
                                            ))}
                                        </ul>

                                        <p className="text-lg text-slate-400">{item.desc}</p>

                                        <div className="items-center mt-3">
                                            <h6 className="font-semibold">{item.name}</h6>
                                            <span className="text-slate-400 text-sm">{item.position}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TinySlider>
                </div>
            </div>
        </div>
  )
}
