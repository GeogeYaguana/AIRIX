import bg from '../../assets/images/bg/2.jpg'
import map from '../../assets/images/map.png'

import AboutTwo from '../../components/about-two'
import BannerOne from '../../components/banner-one'
import CounterTwo from '../../components/counter-two'
import NavLight from '../../components/navbar/nav-light'
import ServiceTwo from '../../components/service-two'
import CtaOne from '../../components/cta-one'
import ClientOne from '../../components/client-one'
import Team from '../../components/team'
import BlogOne from '../../components/blog-one'
import CtaTwo from '../../components/cta-two'
import Footer from '../../components/footer'

import CountUp from 'react-countup'

export default function IndexTwo() {
  return (
    <>
      <NavLight/>
      <BannerOne/>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
            <AboutTwo/>
        </div>

        <div className="container relative lg:mt-24 mt-16 py-16">
            <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${map})`}}></div>
            <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Trusted by more than <CountUp className="counter-value" end={24}/>K+ users</h3>
                <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
            </div>
            <CounterTwo/>
        </div>

        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Reliable Solar Services</h4>
                <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
            </div>
            <ServiceTwo/>
        </div>
      </section>
      <CtaOne bg={bg}/>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-6 items-center">
                <div className="lg:col-span-5 md:col-span-4">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Happy Solar Customers</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                </div>
                <ClientOne/>
            </div>
        </div>

        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Meet the Masters of Solar Energy</h4>
                <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
            </div>
            <Team/>
        </div>

        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Latest Blogs or News</h4>
                <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
            </div>
            <BlogOne/>
        </div>
      </section>
      <CtaTwo/>
      <Footer/>
    </>
  )
}
