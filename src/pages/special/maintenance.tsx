import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

import bg from '../../assets/images/bg/2.jpg'
import logo from '../../assets/images/logo-icon-64.png'

export default function Maintenance() {
    const [minutes, setMinutes] = useState<number>(0);
    const [remainingSeconds, setRemainingSeconds] = useState<number>(0);

    useEffect(() => {

        let intervalId = setInterval(() => {
            calculateTimeRemaining()
        }, 1000);

        var seconds = 3599;
        function calculateTimeRemaining() {

            const minutes = Math.round((seconds - 30) / 60);
            const remainingSeconds = seconds % 60;

            setMinutes(minutes);
            setRemainingSeconds(remainingSeconds);

            if (seconds === 0) {
                clearInterval(intervalId);
            } else {
                seconds = seconds - 1;
            }
        }

        return () => {
            clearInterval(intervalId);
        };
    }, []);

  return (
    <>
         <section className="md:h-screen py-36 flex items-center relative bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 z-2" id="particles-snow"></div>
            <div className="container relative z-3 text-center">
                <div className="grid grid-cols-1">
                    <img src={logo} className="mx-auto" alt=""/>
                    <h1 className="text-white mb-6 mt-8 md:text-5xl text-3xl font-bold">We Are Back Soon...</h1>
                    <p className="text-white/70 text-lg max-w-xl mx-auto">Join Greenoza to lead the future of renewable energy with innovative solar solutions. Contribute to sustainability and professional growth.</p>
                </div>

                <div className="grid grid-cols-1 mt-10">
                    <div className="text-center">
                        <span id="maintenance" className="timer text-white text-[56px] tracking-[1px]">{ minutes }:{ remainingSeconds }</span>
                        <span className="block text-base font-semibold uppercase text-white">Minutes</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-6">
                    <div className="text-center">
                        <form className="relative mx-auto max-w-xl">
                            <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-md bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800" placeholder="Enter your email id.."/>
                            <button type="submit" className="h-12 px-6 tracking-wide items-center justify-center font-medium bg-primary text-white rounded-md absolute top-[1px] end-[1px]">Subcribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <div className="fixed bottom-3 end-3 z-10">
            <Link to="#" className="size-8 flex bg-primary text-white justify-center items-center rounded-md back-button"><i className="ri-arrow-left-line"></i></Link>
        </div>
    </>
  )
}
