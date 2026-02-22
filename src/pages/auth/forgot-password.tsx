import logoDark from '../../assets/images/logo-dark.png'
import logoLight from '../../assets/images/logo-light.png'
import { Link } from 'react-router-dom'
import bg from '../../assets/images/bg/2.jpg'

export default function ForgotPassword() {
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
                    <h5 className="my-6 text-xl font-semibold">Reset Your Password</h5>
                    <div className="grid grid-cols-1">
                        <p className="text-slate-400 mb-6">Please enter your email address. You will receive a link to create a new password via email.</p>
                        <form className="text-start">
                            <div className="grid grid-cols-1">
                                <div className="mb-4">
                                    <label className="font-medium" htmlFor="LoginEmail">Email Address:</label>
                                    <input id="LoginEmail" type="email" className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 focus:border-primary/30 dark:focus:border-primary/30 bg-transparent focus:outline-none rounded-md h-10 mt-3" placeholder="name@example.com"/>
                                </div>

                                <div className="mb-4">
                                    <Link to="#" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white w-full">Send</Link>
                                </div>

                                <div className="text-center">
                                    <span className="text-slate-400 me-2">Remember your password ? </span><Link to="/login" className="text-slate-900 dark:text-white font-bold">Sign in</Link>
                                </div>
                            </div>
                        </form>
                    </div>
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
