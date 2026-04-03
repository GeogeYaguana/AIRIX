import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

import logoDark from '../../assets/images/logo-dark.png'
import logoLight from '../../assets/images/logo-light.png'

export default function NavLight() {
    const { t } = useTranslation()
    let [scroll, setScroll] = useState<boolean>(false);
    let [toggle, setToggle] = useState<boolean>(false);
    let [manu, setManu] = useState<string>('');

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
        <nav id="topnav" className={`defaultscroll is-sticky ${scroll ? 'nav-sticky' : ''}`}>
            <div className="container relative">
                <Link className="logo" to="/">
                    <span className="inline-block dark:hidden">
                        <img src={logoDark} className="l-dark" height="24" alt=""/>
                        <img src={logoLight} className="l-light" height="24" alt=""/>
                    </span>
                    <img src={logoLight} height="24" className="hidden dark:inline-block" alt=""/>
                </Link>

                <ul className="buy-button list-none mb-0">
                    <li className="inline-block">
                        <LanguageSwitcher />
                    </li>
                </ul>

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

                {/* <ul className="buy-button list-none mb-0">
                    <li className="inline-block relative me-1">
                        <button className="text-[20px]" type="button" onClick={()=>setModal(!modal)}>
                            <i className="ri-search-line login-btn-primary"></i>
                            <i className="ri-search-line text-white login-btn-light"></i>
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
    
                </ul> */}

                <div id="navigation" style={{display: toggle ? 'block' : 'none'}}>
                    <ul className="navigation-menu !justify-end nav-light">
                        <li className={`${['/','/index-three'].includes(manu) ? 'active' : ''}`}>
                            <Link to="/" className="sub-menu-item">{t('nav.home')}</Link>
                        </li>
                        <li className={`${manu === '/aboutus' ? 'active' : ''}`}>
                            <Link to="/aboutus" className="sub-menu-item">{t('nav.about')}</Link>
                        </li>
                        <li className={`${manu === '/services' ? 'active' : ''}`}>
                            <Link to="/services" className="sub-menu-item">{t('nav.services')}</Link>
                        </li>
                        <li className={`${manu === '/faqs' ? 'active' : ''}`}>
                            <Link to="/faqs" className="sub-menu-item">{t('nav.faqs')}</Link>
                        </li>
                        <li className={`${manu === '/contactus' ? 'active' : ''}`}>
                            <Link to="/contactus" className="sub-menu-item">{t('nav.contact')}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
