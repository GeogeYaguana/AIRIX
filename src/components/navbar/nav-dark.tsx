import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logoDark from '../../assets/images/logo-dark.png'
import logoLight from '../../assets/images/logo-light.png'

export default function NavDark() {
    let [scroll, setScroll] = useState<boolean>(false);
    let [toggle, setToggle] = useState<boolean>(false);
    let [modal, setModal] = useState<boolean>(false);
    let [manu, setManu] = useState<string>('');
    let [subManu, setSubManu] = useState<string>('');

    const loction = useLocation()

    useEffect(()=>{
       window.scrollTo(0,0)
        setManu(loction.pathname)
        
        let scrollEffect = () =>{
            setScroll(window.scrollY > 50)
        }

        window.addEventListener('scroll', scrollEffect);
        
        return()=>{
            window.removeEventListener('scroll', scrollEffect);
        }     
    },[])
  return (
    <>
        <nav id="topnav" className={`defaultscroll is-sticky ${scroll ? 'nav-sticky' : ''}`}>
            <div className="container relative">
                <Link className="logo" to="/">
                    <img src={logoDark} className="inline-block dark:hidden" alt=""/>
                    <img src={logoLight} className="hidden dark:inline-block" alt=""/>
                </Link>

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to='#' className={`navbar-toggle ${toggle ? 'open' : ''}`} id="isToggle" onClick={()=>setToggle(!toggle)}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <ul className="buy-button list-none mb-0">
                    <li className="inline-block relative me-1">
                        <button className="text-[20px]" type="button" onClick={()=>setModal(!modal)}>
                            <i className="ri-search-line"></i>
                        </button>  
                        {modal && 
                            <div id="navbarSearch" className="modal absolute z-[99999] rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white top-15 right-0 lg:w-200 md:w-100 xs:w-100 w-70">
                                <div className="relative w-full h-auto">
                                    <form method="dialog" className="modal-backdrop">
                                        <button className="size-5 rounded-md flex justify-center items-center absolute top-0 end-0 btn-ghost" onClick={()=>setModal(!modal)}><i className="ri-close-line"></i></button>
                                    </form>
                                    <div className="p-6 text-center">
                                        <form className="relative">
                                            <i className="ri-search-line text-lg absolute top-2 end-0"></i>
                                            <input type="text" className="w-full py-2 px-3 bg-transparent focus:outline-none rounded-md pe-6 h-10" name="s" id="searchItem" placeholder="Search..."/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        }              
                    </li>
    
                    <li className="inline-block relative">
                        <Link to="/contactus" className="h-10 px-4 tracking-wide items-center justify-center font-medium rounded-md bg-primary text-white hidden md:inline-flex">Get in touch !</Link>
                        <Link to="/contactus" className="size-8 items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md bg-primary text-white md:hidden inline-flex"><i className="ri-phone-line"></i></Link>
                    </li>
                </ul>

                <div id="navigation" style={{display: toggle ? 'block' : 'none'}}>
                    <ul className="navigation-menu !justify-end">
                        <li className={`has-submenu parent-parent-menu-item ${['/','/index-two','/index-three','/index-four'].includes(manu) ? 'active' : ''}`}>
                            <Link to="#" onClick={()=>setSubManu(subManu === 'home-page' ? '' : 'home-page')}>Home</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['home-page'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`${manu === '/' ? 'active' : ''}`}><Link to="/" className="sub-menu-item">Hero One</Link></li>
                                <li className={`${manu === '/index-two' ? 'active' : ''}`}><Link to="/index-two" className="sub-menu-item">Hero Two</Link></li>
                                <li className={`${manu === '/index-three' ? 'active' : ''}`}><Link to="/index-three" className="sub-menu-item">Hero Three</Link></li>
                                <li className={`${manu === '/index-four' ? 'active' : ''}`}><Link to="/index-four" className="sub-menu-item">Hero Four</Link></li>
                            </ul>
                        </li>

                        <li className={`${manu === '/aboutus' ? 'active' : ''}`}><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>

                        <li className={`${manu === '/services' ? 'active' : ''}`}><Link to="/services" className="sub-menu-item">Services</Link></li>

                        <li className={`has-submenu parent-parent-menu-item ${['/projects','/project-detail'].includes(manu)? 'active' : ''}`}>
                            <Link to="#" onClick={()=>setSubManu(subManu === 'project' ? '' : 'project')}>Projects</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['project'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`${manu === '/projects' ? 'active' : ''}`}><Link to="/projects" className="sub-menu-item">Projects</Link></li>
                                <li className={`${manu === '/project-detail' ? 'active' : ''}`}><Link to="/project-detail" className="sub-menu-item">Project Detail</Link></li>
                            </ul>
                        </li>

                        <li className={`has-submenu parent-parent-menu-item ${['/pricing','/team','/faqs','/blogs','/blog-detail','/terms','/privacy','/contactus'].includes(manu) ? 'active' : ''}`}>
                            <Link to="#" onClick={()=>setSubManu(subManu === 'inner-page' ? '' : 'inner-page')}>Pages</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['inner-page','blog','auth','special','utility'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`${manu === '/pricing' ? 'active' : ''}`}><Link to="/pricing" className="sub-menu-item">Pricing</Link></li>
                                <li className={`${manu === '/team' ? 'active' : ''}`}><Link to="/team" className="sub-menu-item">Team</Link></li>
                                <li className={`${manu === '/faqs' ? 'active' : ''}`}><Link to="/faqs" className="sub-menu-item">Faqs</Link></li>
                                <li className={`has-submenu parent-menu-item ${['/blogs','/blog-detail'].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>setSubManu(subManu === 'blog' ? '' : 'blog')}> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['blog'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={`${manu === '/blogs' ? 'active' : ''}`}><Link to="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                        <li className={`${manu === '/blog-detail' ? 'active' : ''}`}><Link to="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="" onClick={()=>setSubManu(subManu === 'auth' ? '' : 'auth')}> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['auth'].includes(subManu) ? 'open' : ''}`}>
                                        <li><Link to="/login" className="sub-menu-item">Login</Link></li>
                                        <li><Link to="/signup" className="sub-menu-item">Signup</Link></li>
                                        <li><Link to="/forgot-password" className="sub-menu-item">Reset Password</Link></li>
                                    </ul>  
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#" onClick={()=>setSubManu(subManu === 'special' ? '' : 'special')}> Special </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['special'].includes(subManu) ? 'open' : ''}`}>
                                        <li><Link to="/comingsoon" className="sub-menu-item">Comingsoon</Link></li>
                                        <li><Link to="/maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li><Link to="/404" className="sub-menu-item">404! Error</Link></li>
                                    </ul>  
                                </li>
                                <li className={`has-submenu parent-menu-item ${['/terms','/privacy'].includes(manu) ? 'active' : ''}`}><Link onClick={()=>setSubManu(subManu === 'utility' ? '' : 'utility')} to="#"> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['utility'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={`${manu === '/terms' ? 'active' : ''}`}><Link to="/terms" className="sub-menu-item">Terms & Services</Link></li>
                                        <li className={`${manu === '/privacy' ? 'active' : ''}`}><Link to="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>  
                                </li>
                                <li className={`${manu === '/contactus' ? 'active' : ''}`}><Link to="/contactus" className="sub-menu-item">Contact Us</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
           
    </>
  )
}
