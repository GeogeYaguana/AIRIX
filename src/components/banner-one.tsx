// @ts-nocheck 
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import bg1 from '../assets/images/bg/1.jpg'
import bg2 from '../assets/images/bg/2.jpg'
import bg3 from '../assets/images/bg/3.jpg'

export default function BannerOne() {
  return (
        <section className="swiper mySwiper swiper-slider-hero relative block h-screen" id="home">
            <Swiper 
                spaceBetween={0}
                slidesPerView={1} 
                modules={[Autoplay]}
                speed={2000}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="swiper-wrapper">
                <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute start-0 top-0 w-full h-full slide-bg-image flex items-center overflow-hidden">
                        <div className="image-wrap absolute inset-0 -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-top bg-no-repeat bg-cover" style={{backgroundImage:`url(${bg1})`}}></div>
                        <div className="absolute inset-0 bg-slate-900/40"></div>
                        <div className="container relative md:mt-16">
                            <div className="grid grid-cols-1">
                                <div className="text-center">
                                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Energize Society <br/> Using Reliable Energy</h1>
                                    <p className="text-white/70 text-lg max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                                    
                                    <div className="mt-6">
                                        <Link to="#" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white">Contact Us <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </SwiperSlide>

                <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute start-0 top-0 w-full h-full slide-bg-image flex items-center overflow-hidden">
                        <div className="image-wrap absolute inset-0 -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-top bg-no-repeat bg-cover" style={{backgroundImage:`url(${bg2})`}}></div>
                        <div className="absolute inset-0 bg-slate-900/40"></div>
                        <div className="container relative md:mt-16">
                            <div className="grid grid-cols-1">
                                <div className="text-center">
                                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Sustainable Energy <br/> Empowering The Customers</h1>
                                    <p className="text-white/70 text-lg max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                                    
                                    <div className="mt-6">
                                        <Link to="#" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white">Get Started <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute start-0 top-0 w-full h-full slide-bg-image flex items-center overflow-hidden">
                        <div className="image-wrap absolute inset-0 -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-top bg-no-repeat bg-cover" style={{backgroundImage:`url(${bg2})`}}></div>
                        <div className="absolute inset-0 bg-slate-900/40"></div>
                        <div className="container relative md:mt-16">
                            <div className="grid grid-cols-1">
                                <div className="text-center">
                                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Renewable And Solar <br/> Energy Industry.</h1>
                                    <p className="text-white/70 text-lg max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                                    
                                    <div className="mt-6">
                                        <Link to="#" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white">Get Started <i className="ri-arrow-right-line align-middle ms-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </SwiperSlide> 
            </Swiper>

            <div className="swiper-button-next bg-transparent size-[35px] leading-[35px] -mt-[30px] bg-none border border-solid border-white/50 text-white hover:bg-primary hover:border-primary rounded-full text-center"></div>
            <div className="swiper-button-prev bg-transparent size-[35px] leading-[35px] -mt-[30px] bg-none border border-solid border-white/50 text-white hover:bg-primary hover:border-primary rounded-full text-center"></div>        
        </section>
  )
}
