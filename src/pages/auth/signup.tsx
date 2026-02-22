import { Link } from 'react-router-dom'
import logoDark from '../../assets/images/logo-dark.png'
import logoLight from '../../assets/images/logo-light.png'
import bg from '../../assets/images/bg/2.jpg'

export default function Signup() {
  return (
    <>
        <section className="md:h-screen py-36 flex items-center relative bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 z-2" id="particles-snow"></div>
            <div className="container relative z-3">
                <div className="flex">
                    <div className="max-w-[400px] w-full p-6 bg-white dark:bg-slate-900 rounded-md">
                        <Link to="/">
                            <img src={logoDark} className="block dark:hidden mx-auto" alt=""/>
                            <img src={logoLight} className="dark:block hidden mx-auto" alt=""/>
                        </Link>
                        <h5 className="my-6 text-xl font-semibold">Signup</h5>
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="RegisterName">Your Name:</label>
                                    <input id="RegisterName" type="text" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 mt-3" placeholder="Harry"/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                    <input id="LoginEmail" type="email" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 mt-3" placeholder="name@example.com"/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                    <input id="LoginPassword" type="password" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 mt-3" placeholder="Password:"/>
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center mb-0">
                                        <input className="form-checkbox size-4 appearance-none rounded border border-slate-200 dark:border-slate-800 accent-primary checked:appearance-auto dark:accent-primary focus:border-primary-300 focus:ring-0 focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&C"/>
                                        <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <Link to="#" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white w-full">Register</Link>
                                </div>

                                <div className="text-center">
                                    <span className="text-slate-400 me-2">Already have an account ? </span> <Link to="/login" className="text-slate-900 dark:text-white font-bold">Sign in</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <div className="fixed bottom-3 end-3 z-10">
            <Link to="/" className="size-8 flex bg-primary text-white justify-center items-center rounded-md back-button"><i className="ri-arrow-left-line"></i></Link>
        </div>   
    </>
  )
}
