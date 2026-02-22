import { brandImg } from "../data/data";


export default function BrandLogo() {
  return (
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            {brandImg.map((item,index)=>(
                <div className="mx-auto py-4" key={index}>
                    <img src={item} className="h-6" alt=""/>
                </div>
            ))}
        </div>
  )
}
