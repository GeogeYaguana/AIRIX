import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import NavLight from "../../components/navbar/nav-light";

import Faq from "../../components/faq";
import Project from "../../components/project";
import AboutOne from "../../components/about-one";
import ServiceThree from "../../components/service-three";
import SavingsCalculator from "../../components/SavingsCalculator";
import Footer from "../../components/footer";

import slide2Vid from "../../assets/videos/Slide2Deteccion.mp4";
import slide3Vid from "../../assets/videos/Slide3Mapa.mp4";
import slide4Vid from "../../assets/videos/Slide4RobotRealObstacleAvoidance.mp4";

interface Slide {
  src: string;
  titleKey: string;
  title2Key?: string;
  subtitleKey: string;
}

const SLIDES: Slide[] = [
  {
    src: "/videos/fondo.mp4",
    titleKey: "carousel.slide1_title",
    title2Key: "carousel.slide1_title2",
    subtitleKey: "carousel.slide1_subtitle",
  },
  {
    src: slide2Vid,
    titleKey: "carousel.slide2_title",
    subtitleKey: "carousel.slide2_subtitle",
  },
  {
    src: slide3Vid,
    titleKey: "carousel.slide3_title",
    subtitleKey: "carousel.slide3_subtitle",
  },
  {
    src: slide4Vid,
    titleKey: "carousel.slide4_title",
    subtitleKey: "carousel.slide4_subtitle",
  },
];

const INTERVAL_MS = 7000;

export default function IndexThree() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    setCurrent(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [current]);

  return (
    <>
      <NavLight />

      {/* ── Hero Carousel ── */}
      <section className="relative min-h-screen w-full overflow-hidden">

        {/* Video layers */}
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <video
              ref={(el) => { videoRefs.current[i] = el; }}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay={i === 0}
              preload={i === 0 ? "auto" : "none"}
            >
              <source src={slide.src} type="video/mp4" />
            </video>
            {/* Per-slide gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/55" />
          </div>
        ))}

        {/* Text overlays */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container text-center px-4">
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
                }`}
              >
                <h3
                  className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl my-6"
                  style={{ textShadow: "0 2px 16px rgba(0,0,0,0.75), 0 1px 4px rgba(0,0,0,0.9)" }}
                >
                  {t(slide.titleKey)}
                  {slide.title2Key && (
                    <>
                      <br />
                      {t(slide.title2Key)}
                    </>
                  )}
                </h3>
                <p
                  className="text-white text-lg max-w-2xl mx-auto"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
                >
                  {t(slide.subtitleKey)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dot navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 focus:outline-none ${
                i === current
                  ? "w-8 h-3 bg-white"
                  : "w-3 h-3 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
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
                  {t('intelligence.title')}
                </h4>

                <p className="text-slate-400 max-w-xl mx-auto">
                  {t('intelligence.subtitle')}
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
              {t('projects_section.title')}
            </h4>
            <p className="text-slate-400 max-w-xl mx-auto">
              {t('projects_section.subtitle')}
            </p>
          </div>
          <Project />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <Faq />
        </div>
      </section>

      <SavingsCalculator />

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