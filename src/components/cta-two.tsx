import { Link } from 'react-router-dom'
import bg from '../assets/images/bg/1.jpg'

export default function CtaTwo() {
  return (
    <section className="relative md:py-24 py-16 bg-no-repeat bg-fixed bg-top bg-cover" style={{backgroundImage:`url(${bg})`}} id="table">
            <div className="absolute inset-0 bg-slate-900/60"></div>
            <div className="container relative">
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center gap-6">
                    <div>
                        <h4 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">Best Solution for <br/> Your Home Service</h4>

                        <p className="text-white/70">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>

                        <div className="grid md:grid-cols-2 mt-4">
                            <ul className="list-none">
                                <li className="mt-2"><i className="ri-circle-fill text-[6px] align-middle me-1 text-white"></i> <span className="text-white/50">Solar Panel Installation</span></li>
                                <li className="mt-2"><i className="ri-circle-fill text-[6px] align-middle me-1 text-white"></i> <span className="text-white/50">Solar System Design</span></li>
                                <li className="mt-2"><i className="ri-circle-fill text-[6px] align-middle me-1 text-white"></i> <span className="text-white/50">Solar Energy Consultation</span></li>
                            </ul>

                            <ul className="list-none">
                                <li className="mt-2"><i className="ri-circle-fill text-[6px] align-middle me-1 text-white"></i> <span className="text-white/50">Solar System Maintenance</span></li>
                                <li className="mt-2"><i className="ri-circle-fill text-[6px] align-middle me-1 text-white"></i> <span className="text-white/50">Solar Energy Storage</span></li>
                                <li className="mt-2"><i className="ri-circle-fill text-[6px] align-middle me-1 text-white"></i> <span className="text-white/50">Solar Financing</span></li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <Link to="#" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white">Learn More <i className="ri-arrow-right-line ms-1"></i></Link>
                        </div>

                        <div className="flex items-center mt-8">
                            <i className="ri-smartphone-line me-1 text-primary text-5xl"></i>
                            <div className="content">
                                <h6 className="text-base font-medium text-white">Received and acurate quote within in 3-5 days</h6>
                                <Link to="tel:+152534-468-854" className="text-primary">+152 534-468-854</Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md lg:p-12 p-6 lg:ms-12">
                        <div className="section-title mb-4">
                            <h4 className="text-2xl font-bold uppercase mb-4">Request A Quote</h4>
                            <p className="text-slate-400 mx-auto para-desc">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                        </div>

                        <form>
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-4 mt-6">
                                <div className="md:col-span-6">
                                    <label className="font-medium text-sm">Your Name:</label>
                                    <input name="name" id="name" type="text" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 mt-1 focus:ring-0" placeholder="First Name:"/>
                                </div>

                                <div className="md:col-span-6">
                                    <label className="font-medium text-sm">Your Email:</label>
                                    <input name="email" id="email" type="email" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 mt-1 focus:ring-0" placeholder="Your email:"/>
                                </div> 

                                <div className="md:col-span-6">
                                    <label className="font-medium text-sm">Phone no.:</label>
                                    <input name="number" type="number" id="phone-number" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 mt-1 focus:ring-0" placeholder="Phone no.:"/>
                                </div> 

                                <div className="md:col-span-6">
                                    <label className="font-medium text-sm">Electricity usage in kWh?</label>
                                    <input name="name" id="kWh" type="text" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 mt-1 focus:ring-0" placeholder="kWh"/>
                                </div>

                                <div className="md:col-span-12">
                                    <label className="font-medium text-sm">System Type:</label>
                                    <select className="form-select w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 mt-1 focus:ring-0">
                                        <option value="USA">Solar for water</option>
                                        <option value="CAD">Solar Panels</option>
                                    </select>
                                </div>

                                <div className="md:col-span-12">
                                    <h6 className="font-medium text-sm">Select Contact Method:</h6>

                                    <ul className="list-none mt-1">
                                        <li className="inline-block me-2">
                                            <div className="flex items-center mb-0">
                                                <input className="form-checkbox size-4 appearance-none rounded border border-slate-200 dark:border-slate-800 accent-primary checked:appearance-auto dark:accent-primary focus:border-primary-300 focus:ring-0 focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="ViaCall"/>
                                                <label className="form-checkbox-label text-slate-400" htmlFor="ViaCall">Phone</label>
                                            </div>
                                        </li>
                                        <li className="inline-block">
                                            <div className="flex items-center mb-0">
                                                <input className="form-checkbox size-4 appearance-none rounded border border-slate-200 dark:border-slate-800 accent-primary checked:appearance-auto dark:accent-primary focus:border-primary-300 focus:ring-0 focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="ViaEmail"/>
                                                <label className="form-checkbox-label text-slate-400" htmlFor="ViaEmail">Email</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 mt-4">
                                <input type="submit" id="submit" name="send" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white" value="Submit Request"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}
