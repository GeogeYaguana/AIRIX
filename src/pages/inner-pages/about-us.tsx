import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NavLight from "../../components/navbar/nav-light";
import Footer from "../../components/footer";

import { teamData } from "../../data/data";

import heroBg   from "../../assets/images/bg/about_us.jpg";
import heroBg2  from "../../assets/images/bg/about_us_2.jpg";
import fieldImg from "../../assets/images/2.jpg";

interface TeamMember {
  image: string;
  name: string;
  position_en: string;
  position_es: string;
  link_lk: string;
}

function TeamCard({ member }: { member: TeamMember }) {
  const { t, i18n } = useTranslation();
  const [tapped, setTapped] = useState(false);
  const position = i18n.language === "es" ? member.position_es : member.position_en;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer select-none"
      onClick={() => setTapped((p) => !p)}
    >
      {/* Photo */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-72 object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover / tap overlay */}
      <div
        className={`absolute inset-0 bg-slate-900/80 flex flex-col items-center justify-center gap-4 transition-opacity duration-300
          ${tapped ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
      >
        <p className="text-white font-bold text-lg text-center px-4">{member.name}</p>
        <p className="text-primary text-sm font-medium text-center px-4">{position}</p>
        <a
          href={member.link_lk}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`${member.name} LinkedIn`}
          className="mt-1 flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-200"
        >
          <i className="ri-linkedin-box-fill text-xl"></i>
          {t("about_page.team_linkedin")}
        </a>
      </div>

      {/* Name bar — visible at rest, slides out on hover */}
      <div className="absolute bottom-0 inset-x-0 bg-white/95 dark:bg-slate-900/95 px-4 py-3 transition-transform duration-300 group-hover:translate-y-full">
        <p className="font-semibold text-slate-800 dark:text-white text-sm">{member.name}</p>
        <p className="text-primary text-xs mt-0.5">{position}</p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const { t } = useTranslation();

  const generalData = [
    { label: t("about_page.general_name_label"),     value: t("about_page.general_name")     },
    { label: t("about_page.general_location_label"), value: t("about_page.general_location") },
    { label: t("about_page.general_legal_label"),    value: t("about_page.general_legal")    },
    { label: t("about_page.general_founded_label"),  value: t("about_page.general_founded")  },
  ];

  const pmvItems = [
    {
      icon: "ri-focus-3-line",
      label: t("about_page.purpose_label"),
      text: t("about_page.purpose_text"),
      accent: "bg-primary/10 text-primary",
    },
    {
      icon: "ri-rocket-2-line",
      label: t("about_page.mission_label"),
      text: t("about_page.mission_text"),
      accent: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: "ri-eye-line",
      label: t("about_page.vision_label"),
      text: t("about_page.vision_text"),
      accent: "bg-sky-50 text-sky-600",
    },
  ];

  return (
    <>
      <NavLight />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: "top center" }}
      >
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="container relative">
          <div className="grid grid-cols-1 mt-10">
            <h3 className="md:text-4xl text-3xl font-semibold text-white leading-normal">
              {t("about_page.hero_title")}
            </h3>
            <ul className="tracking-[0.5px] mt-4 inline-block">
              <li className="inline-block font-medium text-white/80 hover:text-white duration-500">
                <Link to="/">Airix</Link>
              </li>
              <li className="inline-block text-white/50 mx-0.5">
                <i className="ri-arrow-right-s-line"></i>
              </li>
              <li className="inline-block font-medium text-white" aria-current="page">
                {t("about_page.breadcrumb")}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* ── Datos generales ──────────────────────────────────────────────── */}
      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">

            {/* Photo */}
            <div className="relative">
              <img
                src={fieldImg}
                alt="Airix field operations"
                className="w-full rounded-2xl shadow-lg object-cover h-96"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-xl px-5 py-3 shadow-md hidden md:block">
                <p className="text-2xl font-bold leading-none">2024</p>
                <p className="text-xs mt-0.5 opacity-80">{t("about_page.general_founded_label")}</p>
              </div>
            </div>

            {/* General data */}
            <div>
              <h4 className="md:text-3xl text-2xl font-semibold mb-6">
                {t("about_page.general_title")}
              </h4>
              <dl className="space-y-4">
                {generalData.map((item) => (
                  <div key={item.label} className="flex gap-4 items-start border-b border-slate-100 pb-4 last:border-0">
                    <dt className="text-slate-400 text-sm w-32 shrink-0 pt-0.5">{item.label}</dt>
                    <dd className="font-medium text-slate-700 dark:text-slate-200">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Propósito / Misión / Visión ──────────────────────────────────── */}
      <section className="relative py-16 bg-slate-50 dark:bg-slate-800/40">
        <div className="container">
          <div className="text-center mb-12">
            <h4 className="md:text-3xl text-2xl font-semibold">
              {t("about_page.purpose_title")}
            </h4>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8">
            {pmvItems.map((item) => (
              <div
                key={item.label}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`size-14 rounded-xl flex items-center justify-center mb-5 ${item.accent}`}>
                  <i className={`${item.icon} text-2xl`}></i>
                </div>
                <h5 className="text-lg font-bold mb-3">{item.label}</h5>
                <p className="text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipo ───────────────────────────────────────────────────────── */}
      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h4 className="md:text-3xl text-2xl font-semibold mb-3">
              {t("about_page.team_title")}
            </h4>
            <p className="text-slate-400 max-w-xl mx-auto">
              {t("about_page.team_subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {teamData.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm mt-8 md:hidden">
            <i className="ri-tap-line mr-1"></i>
            Toca una tarjeta para ver el rol y LinkedIn
          </p>
        </div>
      </section>

      {/* ── Aliados / Colaboradores ──────────────────────────────────────── */}
      <section
        className="relative py-20 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container relative text-center">
          <h4 className="md:text-3xl text-2xl font-semibold text-white mb-3">
            {t("about_page.allies_title")}
          </h4>
          <p className="text-white/70 max-w-lg mx-auto mb-10">
            {t("about_page.allies_subtitle")}
          </p>

          {/* Placeholder grid — replace with real logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="bg-white/10 border border-white/20 rounded-xl h-20 flex items-center justify-center text-white/40 text-sm"
              >
                {t("about_page.allies_placeholder").split(".")[0]} {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
