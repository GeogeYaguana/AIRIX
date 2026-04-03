import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NavLight from "../../components/navbar/nav-light";
import Footer from "../../components/footer";

import { teamData } from "../../data/data";

import heroBg   from "../../assets/images/bg/about_us.jpg";
import fieldImg from "../../assets/images/2.jpg";
import logoDark from "../../assets/images/logo-dark.png";
import nestleLogo from "../../assets/images/client/nestle.webp";
import nvidiaLogo from "../../assets/images/client/nvidia.webp";
import magapLogo from "../../assets/images/client/magap.webp";
import unescoLogo from "../../assets/images/client/unesco.webp";

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
      className="group rounded-2xl shadow-md overflow-hidden cursor-pointer select-none bg-white dark:bg-slate-900"
      onClick={() => setTapped((p) => !p)}
    >
      {/* ── Photo area — overlay only covers this ── */}
      <div className="relative overflow-hidden h-72">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover / tap overlay — only over the photo */}
        <div
          className={`absolute inset-0 bg-slate-900/75 flex flex-col items-center justify-center gap-4 transition-opacity duration-300
            ${tapped ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          <a
            href={member.link_lk}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${member.name} LinkedIn`}
            className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            <i className="ri-linkedin-box-fill text-xl"></i>
            {t("about_page.team_linkedin")}
          </a>
        </div>
      </div>

      {/* ── Caption — always visible below the photo ── */}
      <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-700">
        <p className="font-semibold text-slate-800 dark:text-white text-sm">{member.name}</p>
        <p className="text-primary text-xs mt-0.5">{position}</p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const { t } = useTranslation();

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

  const allies = [
    {
      name: "Nestle",
      image: nestleLogo,
    },
    {
      name: "NVIDIA",
      image: nvidiaLogo,
    },
    {
      name: "MAGAP",
      image: magapLogo,
    },
    {
      name: "UNESCO",
      image: unescoLogo,
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

      {/* ── Quiénes somos ────────────────────────────────────────────────── */}
      <section className="relative lg:py-24 py-16 overflow-hidden">

        {/* Decorative background circle */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-14 items-center">

            {/* ── Left: photo stack ── */}
            <div className="relative">
              <img
                src={fieldImg}
                alt="Airix field operations"
                className="w-full rounded-3xl shadow-xl object-cover h-[420px]"
              />

              {/* Founded badge */}
              <div className="absolute -bottom-5 -right-5 bg-primary text-white rounded-2xl px-6 py-4 shadow-lg hidden md:flex flex-col items-center">
                <p className="text-3xl font-extrabold leading-none">2024</p>
                <p className="text-xs mt-1 opacity-80 uppercase tracking-widest">{t("about_page.general_founded_label")}</p>
              </div>

              {/* Subtle decorative border frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary/30 rounded-2xl pointer-events-none hidden md:block" />
            </div>

            {/* ── Right: logo + data ── */}
            <div>
              {/* Logo */}
              <div className="mb-6">
                <img src={logoDark} alt="Airix" className="h-10 w-auto" />
              </div>

              {/* Accent line + title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-1 rounded-full bg-primary inline-block shrink-0"></span>
                <h4 className="md:text-3xl text-2xl font-semibold">
                  {t("about_page.general_title")}
                </h4>
              </div>

              {/* Data items with icons */}
              <div className="space-y-4">
                {[
                  { icon: "ri-building-line",     label: t("about_page.general_name_label"),     value: t("about_page.general_name")     },
                  { icon: "ri-map-pin-line",       label: t("about_page.general_location_label"), value: t("about_page.general_location") },
                  { icon: "ri-government-line",    label: t("about_page.general_legal_label"),    value: t("about_page.general_legal")    },
                  { icon: "ri-calendar-check-line",label: t("about_page.general_founded_label"),  value: t("about_page.general_founded")  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/5 transition-colors duration-200"
                  >
                    <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <i className={`${item.icon} text-base`}></i>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                      <p className="font-semibold text-slate-800 dark:text-slate-100">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
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
      <section className="relative py-20 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="container relative text-center">
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-primary mb-3">
            Trusted ecosystem
          </p>
          <h4 className="md:text-3xl text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            {t("about_page.allies_title")}
          </h4>
          <p className="text-slate-500 dark:text-slate-300 max-w-2xl mx-auto mb-10">
            {t("about_page.allies_subtitle")}
          </p>

          <div className="allies-marquee max-w-6xl mx-auto">
            <div className="allies-marquee__track">
              {[...allies, ...allies].map((ally, index) => (
                <div key={`${ally.name}-${index}`} className="allies-marquee__item">
                  <img
                    src={ally.image}
                    alt={ally.name}
                    className="max-h-11 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
