import { Link } from "react-router-dom";
import about2 from "../assets/images/2.jpg";

export default function AboutOne() {
  return (
    <section className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
          <div className="lg:col-span-6 md:col-span-7">
            <div className="relative">
              {/* Contenedor de imagen ajustado para mostrarla completa */}
              <div className="relative md:shrink-0">
                <img
                  className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-700"
                  src={about2}
                  alt="Airix Scans"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 md:col-span-5">
            <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Scans That Turn Into Decisions
            </h4>

            <p className="text-slate-400">
              Airix is a SaaS platform that helps growers digitize their fields and
              reduce uncertainty. Using mobile, drone, or multispectral scans, we
              convert imagery into practical outputs—counts, yield estimates, and
              early risk signals so you can prioritize actions, plan harvest, and
              protect production.
            </p>

            <div className="grid lg:grid-cols-2 mt-4 gap-2">
              <ul className="list-none">
                <li className="mt-2">
                  <i className="ri-circle-fill text-[8px] align-middle me-2 text-primary"></i>
                  <span className="text-slate-400">Plant & fruit counting</span>
                </li>
                <li className="mt-2">
                  <i className="ri-circle-fill text-[8px] align-middle me-2 text-primary"></i>
                  <span className="text-slate-400">Yield estimation</span>
                </li>
                <li className="mt-2">
                  <i className="ri-circle-fill text-[8px] align-middle me-2 text-primary"></i>
                  <span className="text-slate-400">Field variability maps</span>
                </li>
              </ul>

              <ul className="list-none">
                <li className="mt-2">
                  <i className="ri-circle-fill text-[8px] align-middle me-2 text-primary"></i>
                  <span className="text-slate-400">Early disease detection</span>
                </li>
                <li className="mt-2">
                  <i className="ri-circle-fill text-[8px] align-middle me-2 text-primary"></i>
                  <span className="text-slate-400">Season monitoring</span>
                </li>
                <li className="mt-2">
                  <i className="ri-circle-fill text-[8px] align-middle me-2 text-primary"></i>
                  <span className="text-slate-400">Actionable alerts</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <Link
                to="#"
                className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all duration-300"
              >
                Learn More <i className="ri-arrow-right-line align-middle ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}