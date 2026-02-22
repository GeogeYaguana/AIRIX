import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Switcher() {
 const [isDark, setIsDark] = useState(false);
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);

  const toggleMode = () => setIsDark((prev) => !prev);
  const toggleDirection = () =>
    setDirection((prev) => (prev === "ltr" ? "rtl" : "ltr"));

  return (
    <div>
         <div className="fixed top-1/4 -right-2 z-3">
            <span className="relative inline-block rotate-90">
                <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onClick={toggleMode}/>
                <label className="label bg-slate-900 dark:bg-white shadow-sm dark:shadow-gray-700 cursor-pointer rounded-full flex justify-between items-center p-1 w-[60px] h-8" htmlFor="chk">
                    <i className="ri-moon-line text-yellow-500 ps-1 relative z-1"></i>
                    <i className="ri-sun-line text-yellow-500 pe-1 relative z-1"></i>
                    <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                </label>
            </span>
        </div>
         <div className="fixed top-[40%] -right-3 z-50">
            <Link to="#" id="switchRtl" onClick={toggleDirection}>
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow-sm dark:shadow-gray-800 font-semibold rtl:block ltr:hidden">LTR</span>
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow-sm dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">RTL</span>
            </Link>
        </div>
    </div>
  )
}
