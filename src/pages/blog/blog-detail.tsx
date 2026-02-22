import { Link, useParams } from 'react-router-dom'

import NavLight from '../../components/navbar/nav-light'
import BlogOne from '../../components/blog-one'
import Footer from '../../components/footer'

import bg from '../../assets/images/bg/1.jpg'
import image1 from '../../assets/images/blogs/1.jpg'

import { blogData, blogSocial, recentPost } from '../../data/data'

interface BlogData{
    id: number;
    image: string;
    date: string;
    time: string;
    title: string;
    tag: string[];
}

interface RecentPost{
    image: string;
    title: string;
    date: string;
}

export default function BlogDetail() {

    let params = useParams()

    let id:any = params.id

    let data = blogData.find((item:BlogData)=>item.id === parseInt(id))

  return (
    <>
        <NavLight/>

        <section className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-slate-900/50"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-snug tracking-wide leading-snug font-medium text-white mb-3">{data?.title ? data.title : 'Circularity drives sustainability and profitability for businesses'}</h3>

                    <ul className="list-none mt-4">
                        <li className="inline-block text-white/50 me-5"> <span className="text-white block">Author :</span> <span className="block">Calvin Carlo</span></li>
                        <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Date :</span> <span className="block">{data?.date ? data.date : '3rd Nov 2024'}</span></li>
                        <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Time :</span> <span className="block">8 Min Read</span></li>
                    </ul>

                    <ul className="tracking-[0.5px] mb-0 inline-block mt-4">
                        <li className="inline-block font-medium duration-500 ease-in-out text-white/80 hover:text-white"><Link to="/">Greenoza</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                        <li className="inline-block font-medium duration-500 ease-in-out text-white/80 hover:text-white"><Link to="/blogs">Blogs</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                        <li className="inline-block font-medium duration-500 ease-in-out text-white" aria-current="page">{data?.title ? data.title : 'Circularity drives sustainability and profitability for businesses'}</li>
                    </ul>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="lg:col-span-8 md:order-1 order-2">
                        <div className="relative overflow-hidden rounded-xl shadow-sm dark:shadow-gray-800">

                            <img src={data?.image ? data.image : image1} alt=""/>

                            <div className="p-6">
                                <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                                <p className="text-slate-400 italic border-x-4 border-primary rounded-ss-xl rounded-ee-xl mt-3 p-3">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                <p className="text-slate-400 mt-3">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-md shadow-sm dark:shadow-gray-800 mt-6">
                            <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                            <form className="mt-6">
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <div className="form-icon relative mt-2">
                                                <i className="ri-user-line absolute top-1.5 start-4"></i>
                                                <input name="name" id="name" type="text" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 ps-11" placeholder="Name :"/>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <div className="form-icon relative mt-2">
                                                <i className="ri-mail-line absolute top-1.5 start-4"></i>
                                                <input name="email" id="email" type="email" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 ps-11" placeholder="Email :"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <div className="form-icon relative mt-2">
                                                <i className="ri-chat-1-line absolute top-2 start-4"></i>
                                                <textarea name="comments" id="comments" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md ps-11 h-28" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white w-full">Send Message</button>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:order-2 order-1">
                        <div className="sticky top-20 p-6 bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-700">
                            <form>
                                <div>
                                    <label htmlFor="searchname" className="font-semibold">Search Blog</label>
                                    <div className="relative mt-2">
                                        <i className="ri-search-line absolute top-1.5 start-3 size-5"></i>
                                        <input name="search" id="searchname" type="text" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 ps-10" placeholder="Search"/>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-6">
                                <h5 className="font-semibold">Recent Post</h5>
                                {recentPost.map((item:RecentPost,index:number)=>{
                                    return(
                                        <div className="flex items-center mt-4" key={index}>
                                            <img src={item.image} className="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt=""/>

                                            <div className="ms-3">
                                                <Link to="#" className="font-medium hover:text-primary">{item.title}</Link>
                                                <p className="text-sm text-slate-400">{item.date}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="mt-6">
                                <h5 className="font-semibold">Social</h5>
                                <ul className="list-none mt-4">
                                    {blogSocial.map((item,index)=>( 
                                        <li className="inline mx-0.5" key={index}><Link to="#" className="size-7 inline-flex justify-center items-center text-slate-400 hover:text-white border border-slate-200 dark:border-slate-800 rounded-md hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary"><i className={item}></i></Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Related Posts</h4>
                    <p className="text-slate-400 max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                </div>

                <BlogOne/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1">
                    <div className="relative bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-lg shadow-sm shadow-slate-200 dark:shadow-slate-800 overflow-hidden">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                            <div className="md:text-start text-center z-1">
                                <h3 className="mb-2 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Subscribe to Newsletter!</h3>
                                <p className="text-slate-400 max-w-xl mx-auto">Subscribe to get latest updates and information.</p>
                            </div>
            
                            <div className="z-1">
                                <form className="relative mx-auto max-w-xl">
                                    <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-md bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800" placeholder="Enter your email id.."/>
                                    <button type="submit" className="h-12 px-6 tracking-wide items-center justify-center font-medium bg-primary text-white rounded-md absolute top-[1px] end-[1px]">Subcribe Now</button>
                                </form>
                            </div>
                        </div>
            
                        <div className="absolute -top-5 -start-5">
                            <div className="ri-mail-line lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
                        </div>
            
                        <div className="absolute -bottom-5 -end-5">
                            <div className="ri-pencil-ruler-line lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5 rtl:-rotate-90"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}
