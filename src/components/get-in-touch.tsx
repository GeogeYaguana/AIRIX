import { Link } from 'react-router-dom'

export default function GetInTouch() {
  return (
        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-6 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Have Question ? Get in touch!</h3>
                <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                <div className="mt-6">
                    <Link to="/contactus" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white"><i className="ri-phone-line align-middle me-1 text-xl"></i> Contact us</Link>
                </div>
            </div>
        </div>
  )
}
