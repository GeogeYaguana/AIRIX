import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

import NavLight from "../../components/navbar/nav-light";
import Footer from "../../components/footer";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  CONTACT_EMAIL,
} from "../../config/emailjs";

// ── Simple math CAPTCHA ───────────────────────────────────────────────────────
function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function genChallenge() {
  const a = randomInt(1, 9);
  const b = randomInt(1, 9);
  return { a, b, answer: a + b, question: `${a} + ${b} =` };
}

// ── Contact info ─────────────────────────────────────────────────────────────
const PHONE    = "+593 98 895 5167";
const EMAIL    = "marketing_ec_01@airixtech.com";
const WA_BASE  = "https://wa.me/593988955167";

export default function Contactus() {
  const { t } = useTranslation();

  // form state
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [challenge, setChallenge] = useState(genChallenge);
  const [error,    setError]   = useState("");
  const [success,  setSuccess] = useState(false);
  const [sending,  setSending] = useState(false);

  const refreshCaptcha = useCallback(() => {
    setChallenge(genChallenge());
    setCaptcha("");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError(t("contact_page.error_fields"));
      return;
    }
    if (parseInt(captcha, 10) !== challenge.answer) {
      setError(t("contact_page.error_captcha"));
      refreshCaptcha();
      return;
    }

    setSending(true);

    const credentialsMissing =
      EMAILJS_SERVICE_ID  === "YOUR_SERVICE_ID"  ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY  === "YOUR_PUBLIC_KEY";

    const openWhatsApp = () => {
      const text = [
        `*${subject.trim()}*`,
        "",
        message.trim(),
        "",
        `— ${name.trim()} (${email.trim()})`,
      ].join("\n");
      window.open(`https://wa.me/593988955167?text=${encodeURIComponent(text)}`, "_blank");
      setSuccess(true);
    };

    if (credentialsMissing) {
      setSending(false);
      openWhatsApp();
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  name.trim(),
          from_email: email.trim(),
          subject:    subject.trim(),
          message:    message.trim(),
          to_email:   CONTACT_EMAIL,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSuccess(true);
    } catch {
      // EmailJS failed → fallback to WhatsApp
      openWhatsApp();
    } finally {
      setSending(false);
    }
  };

  const infoCards = [
    {
      icon: "ri-whatsapp-line",
      title: t("contact_page.phone_title"),
      desc:  t("contact_page.phone_desc"),
      link:  `${WA_BASE}?text=${encodeURIComponent(t("about.wa_msg_question"))}`,
      label: PHONE,
      external: true,
    },
    {
      icon: "ri-mail-line",
      title: t("contact_page.email_title"),
      desc:  t("contact_page.email_desc"),
      link:  `mailto:${EMAIL}`,
      label: EMAIL,
      external: false,
    },
    {
      icon: "ri-map-pin-line",
      title: t("contact_page.location_title"),
      desc:  t("contact_page.location_desc"),
      link:  "",
      label: "",
      external: false,
      hideLink: true,
    },
  ];

  return (
    <>
      <NavLight />

      {/* Map banner — disabled */}

      {/* ── Form + illustration ────────────────────────────────────────────── */}
      <section className="relative lg:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-start gap-10">

            {/* Info cards (left) */}
            <div className="lg:col-span-5 md:col-span-5 space-y-6">
              <div>
                <h4 className="md:text-3xl text-2xl font-semibold mb-2">
                  {t("contact_page.hero_title")}
                </h4>
                <p className="text-slate-400">
                  {t("contact_page.phone_desc")}
                </p>
              </div>

              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className="flex gap-4 items-start p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="size-12 shrink-0 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <i className={`${card.icon} text-2xl`}></i>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">{card.title}</h5>
                    <p className="text-slate-400 text-sm mb-2">{card.desc}</p>
                    {!card.hideLink && card.external ? (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm font-medium hover:underline break-all"
                      >
                        {card.label}
                      </a>
                    ) : !card.hideLink ? (
                      <Link
                        to={card.link}
                        className="text-primary text-sm font-medium hover:underline break-all"
                      >
                        {card.label}
                      </Link>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form (right) */}
            <div className="lg:col-span-7 md:col-span-7">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm dark:shadow-gray-700 p-8">
                <h3 className="mb-6 md:text-2xl text-xl font-semibold">
                  {t("contact_page.form_title")}
                </h3>

                {success ? (
                  <div className="flex items-center gap-3 text-primary font-medium py-10 justify-center">
                    <i className="ri-checkbox-circle-line text-3xl"></i>
                    <span>{t("contact_page.success")}</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid lg:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                          {t("contact_page.label_name")} <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text"
                          value={name} onChange={(e) => setName(e.target.value)}
                          className="w-full py-2 px-3 border border-slate-200 dark:border-slate-700 focus:border-primary/50 bg-transparent focus:outline-none rounded-lg h-10 text-sm transition-colors"
                          placeholder={t("contact_page.ph_name")}
                        />
                      </div>
                      {/* Email */}
                      <div>
                        <label htmlFor="cemail" className="text-sm font-medium mb-1.5 block">
                          {t("contact_page.label_email")} <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="cemail" name="email" type="email"
                          value={email} onChange={(e) => setEmail(e.target.value)}
                          className="w-full py-2 px-3 border border-slate-200 dark:border-slate-700 focus:border-primary/50 bg-transparent focus:outline-none rounded-lg h-10 text-sm transition-colors"
                          placeholder={t("contact_page.ph_email")}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="text-sm font-medium mb-1.5 block">
                        {t("contact_page.label_subject")} <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="subject" name="subject" type="text"
                        value={subject} onChange={(e) => setSubject(e.target.value)}
                        className="w-full py-2 px-3 border border-slate-200 dark:border-slate-700 focus:border-primary/50 bg-transparent focus:outline-none rounded-lg h-10 text-sm transition-colors"
                        placeholder={t("contact_page.ph_subject")}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                        {t("contact_page.label_message")} <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message" name="message"
                        value={message} onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        className="w-full py-2 px-3 border border-slate-200 dark:border-slate-700 focus:border-primary/50 bg-transparent focus:outline-none rounded-lg text-sm resize-none mt-0 transition-colors"
                        placeholder={t("contact_page.ph_message")}
                      />
                    </div>

                    {/* CAPTCHA */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm text-slate-500">
                        {t("contact_page.captcha_label")}{" "}
                        <strong className="text-slate-700 dark:text-slate-200">
                          {challenge.question}
                        </strong>
                      </span>
                      <input
                        type="number"
                        value={captcha}
                        onChange={(e) => setCaptcha(e.target.value)}
                        className="w-20 py-1.5 px-2 border border-slate-200 dark:border-slate-700 focus:border-primary/50 bg-transparent focus:outline-none rounded-lg text-sm text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="?"
                      />
                      <button
                        type="button"
                        onClick={refreshCaptcha}
                        aria-label="Nueva pregunta"
                        className="text-slate-400 hover:text-primary transition-colors"
                      >
                        <i className="ri-refresh-line text-base"></i>
                      </button>
                    </div>

                    {/* Error */}
                    {error && (
                      <p className="text-red-400 text-sm flex items-center gap-1.5">
                        <i className="ri-error-warning-line"></i>
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="h-11 px-8 inline-flex items-center justify-center gap-2 font-medium rounded-lg bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white transition-all duration-300"
                    >
                      {sending
                        ? <><i className="ri-loader-4-line animate-spin"></i>{t("contact_page.btn_sending")}</>
                        : <><i className="ri-send-plane-line"></i>{t("contact_page.btn_send")}</>
                      }
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
