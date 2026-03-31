import { useState } from "react";


import NavLight from "../../components/navbar/nav-light";

import Faq from "../../components/faq";
import Project from "../../components/project";
import AboutOne from "../../components/about-one";
import ServiceThree from "../../components/service-three";
import Footer from "../../components/footer";
export default function IndexThree() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <NavLight />

      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/fondo-poster.jpg"
          >
            <source src="/videos/fondo.webm" type="video/webm" />
            <source src="/videos/fondo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient vignette — preserves video clarity while anchoring the text */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/10 to-black/50 pointer-events-none" />

        {/* Content */}
        <div className="container relative z-20">
            <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3
              className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl my-6"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.75), 0 1px 4px rgba(0,0,0,0.9)" }}
            >
                Scan Your Farm.
                <br />
                Predict Yield. Detect Risks Early.
            </h3>

            <p
              className="text-white text-lg max-w-xl mx-auto"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
            >
                Airix helps growers turn field scans into actionable insights: plant counting,
                production estimation, and early disease detection so you can plan, act faster,
                and protect your harvest.
            </p>

            {/* <div className="mt-8">
                <Link
                to=""
                className="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary text-white"
                >
                See How It Works{" "}
                <i className="ri-arrow-right-line align-middle ms-1"></i>
                </Link>
            </div> */}
            </div>
        </div>
    </section>

     {/* <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
        <div className="container relative">
          <BrandLogo />
        </div>
      </section> */}

      <section className="relative lg:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="sticky top-20">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                  Farm Intelligence, Built for Growers
                </h4>

                <p className="text-slate-400 max-w-xl mx-auto">
                  From a simple mobile scan to drone or multispectral flights,
                  Airix transforms imagery into maps, counts, and alerts you can
                  use immediately without needing a technical team.
                </p>
              </div>
            </div>

            <ServiceThree />
          </div>
        </div>

       {/* <div className="container relative lg:mt-24 mt-16 py-16">
          <div
            className="absolute inset-0 opacity-25 dark:opacity-50 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${map})` }}
          ></div>
          <div className="relative grid grid-cols-1 pb-8 text-center z-1">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Trusted by{" "}
              <CountUp className="counter-value" end={24} />
              K+ growers and field teams
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Standardize scouting, monitor variability by plot, and improve
              planning with repeatable scans and consistent metrics across
              seasons.
            </p>
          </div>

          <CounterTwo />
        </div>*/}

        <div className="container relative md:mt-24 mt-16">
          <AboutOne />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Real-World Field Outcomes
            </h4>
            <p className="text-slate-400 max-w-xl mx-auto">
              Explore deployments focused on yield estimation, plant counting,
              and early detection optimized for practical decisions in the field.
            </p>
          </div>
          <Project />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <Faq />
        </div>

       {/* <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6 items-center">
            <div className="lg:col-span-5 md:col-span-4">
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                Growers Who Operate with Confidence
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto">
                Airix supports faster decisions—when to intervene, how to
                prioritize plots, and what to expect at harvest—based on
                objective scan data.
              </p>
            </div>

            <ClientOne />
          </div>
        </div> */}


       {/* <div className="container relative lg:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Updates, Research & Field Notes
            </h4>
            <p className="text-slate-400 max-w-xl mx-auto">
              Product updates, case studies, and practical insights on crop
              monitoring, yield forecasting, and disease detection.
            </p>
          </div>
          <BlogOne />
        </div>*/}
      </section> 

      <Footer />

      {isOpen && (
        <div className="flex bg-[#00000099] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-1 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpen(!isOpen)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-1 md:p-1 space-y-4">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}