import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, Github, Linkedin } from "lucide-react";

const MDiv = motion.div;

const EMAILJS_SERVICE_ID  = "service_cmwxblu";
const EMAILJS_TEMPLATE_ID = "template_u93vkbq";
const EMAILJS_PUBLIC_KEY  = "DY-lnC51TChl_LBsm";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "abdoulaye@example.com",
    href: "mailto:abdoulaye@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/abdoulaye",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abdoulaye",
    href: "#",
  },
];

function InputField({ label, id, type = "text", placeholder, required, rows }) {
  const baseClass =
    "w-full bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.14] focus:border-[#60A5FA]/50 focus:bg-[#60A5FA]/5 rounded-xl px-4 text-white text-sm placeholder-gray-600 transition-all duration-200 outline-none focus:ring-2 focus:ring-[#60A5FA]/20";

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-gray-400">
        {label}
        {required && <span className="text-[#60A5FA] ml-0.5">*</span>}
      </label>
      {rows ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`${baseClass} py-3 resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`${baseClass} py-3`}
        />
      )}
    </div>
  );
}

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className="py-24 text-white bg-[#060d1a]" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <MDiv
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#60A5FA] uppercase mb-4">
            <span className="block w-5 h-[2px] bg-[#60A5FA]" />
            Contact
            <span className="block w-5 h-[2px] bg-[#60A5FA]" />
          </span>
          <h2
            id="contact-title"
            className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            Travaillons ensemble
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Une question, une opportunité ou juste envie d'échanger ? N'hésite
            pas à me contacter.
          </p>
        </MDiv>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── Infos ── */}
          <MDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
              <h3 className="text-base font-bold text-white mb-5">
                Mes coordonnées
              </h3>
              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center shrink-0 group-hover:bg-[#60A5FA]/20 transition-colors">
                        <Icon size={15} className="text-[#60A5FA]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{item.label}</p>
                        <p className="text-sm text-white font-medium group-hover:text-[#60A5FA] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability badge */}
            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5 flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse mt-1 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">
                  Disponible en alternance
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  Ouvert aux opportunités à partir de 2026
                </p>
              </div>
            </div>
          </MDiv>

          {/* ── Form ── */}
          <MDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
              {/* Top accent */}
              <div className="h-[2px] bg-gradient-to-r from-[#60A5FA] via-[#818CF8] to-transparent" />

              <form ref={formRef} onSubmit={handleSubmit} className="p-7 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Nom"
                    id="user_name"
                    placeholder="Jean Dupont"
                    required
                  />
                  <InputField
                    label="Email"
                    id="user_email"
                    type="email"
                    placeholder="jean@exemple.fr"
                    required
                  />
                </div>
                <InputField
                  label="Sujet"
                  id="subject"
                  placeholder="Opportunité d'alternance, question..."
                  required
                />
                <InputField
                  label="Message"
                  id="message"
                  placeholder="Bonjour Abdoulaye, je vous contacte au sujet de..."
                  required
                  rows={5}
                />

                {/* Status feedback */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl px-4 py-3"
                  >
                    <CheckCircle size={15} />
                    Message envoyé avec succès ! Je reviendrai vers vous rapidement.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
                  >
                    <AlertCircle size={15} />
                    Une erreur est survenue. Veuillez réessayer.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group mt-1 w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#2563EB] hover:to-[#3B82F6] disabled:opacity-60 disabled:cursor-not-allowed rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-700/25 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </MDiv>
        </div>
      </div>
    </section>
  );
}

export default Contact;
