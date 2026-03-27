import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, User, Mail, MessageSquare, Tag, CheckCircle, XCircle } from "lucide-react";

const MotionDiv = motion.div;

// ─── Remplace ces valeurs par tes propres clés EmailJS ───
const EMAILJS_SERVICE_ID  = "service_cmwxblu";
const EMAILJS_TEMPLATE_ID = "template_u93vkbq";
const EMAILJS_PUBLIC_KEY  = "DY-lnC51TChl_LBsm";
// ─────────────────────────────────────────────────────────

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const fields = [
    {
      name: "user_name",
      label: "Nom",
      type: "text",
      placeholder: "Jean Dupont",
      icon: <User size={16} className="text-[#60A5FA]" />,
      tag: "input",
    },
    {
      name: "user_email",
      label: "Email",
      type: "email",
      placeholder: "jean.dupont@email.com",
      icon: <Mail size={16} className="text-[#60A5FA]" />,
      tag: "input",
    },
    {
      name: "subject",
      label: "Sujet",
      type: "text",
      placeholder: "Objet de votre message",
      icon: <Tag size={16} className="text-[#60A5FA]" />,
      tag: "input",
    },
    {
      name: "message",
      label: "Message",
      type: null,
      placeholder: "Décrivez votre projet ou votre demande...",
      icon: <MessageSquare size={16} className="text-[#60A5FA]" />,
      tag: "textarea",
    },
  ];

  return (
    <section className="relative py-28 text-white flex flex-col items-center px-4">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-[#60A5FA] mb-16">
        Me Contacter
      </h2>

      {/* Form card */}
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-2xl"
      >
        <div className="bg-[#111827]/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/10 transition-all duration-300">

          {/* Card header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#1E293B] border-4 border-gray-900 rounded-full p-3 shadow-lg shadow-blue-500/30">
              <Send size={18} className="text-[#60A5FA]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#60A5FA]">
                Envoyez-moi un message
              </h3>
              <p className="text-sm text-gray-400">
                Je vous répondrai dans les plus brefs délais.
              </p>
            </div>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            {fields.map((field, i) => (
              <MotionDiv
                key={field.name}
                custom={i}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-1.5 flex items-center gap-2">
                  {field.icon}
                  {field.label}
                </label>

                {field.tag === "input" ? (
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    placeholder={field.placeholder}
                    className="w-full bg-[#0F172A]/70 border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/40 transition-all duration-200"
                  />
                ) : (
                  <textarea
                    name={field.name}
                    required
                    rows={5}
                    placeholder={field.placeholder}
                    className="w-full bg-[#0F172A]/70 border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/40 transition-all duration-200 resize-none"
                  />
                )}
              </MotionDiv>
            ))}

            {/* Submit button */}
            <MotionDiv
              custom={fields.length}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#2563EB] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-blue-700/20 hover:shadow-blue-500/30 text-sm"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Envoyer le message
                  </>
                )}
              </button>
            </MotionDiv>
          </form>

          {/* Feedback messages */}
          {status === "success" && (
            <MotionDiv
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-5 flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 text-green-400 text-sm"
            >
              <CheckCircle size={18} className="shrink-0" />
              Message envoyé avec succès ! Je vous répondrai rapidement.
            </MotionDiv>
          )}

          {status === "error" && (
            <MotionDiv
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-5 flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm"
            >
              <XCircle size={18} className="shrink-0" />
              Une erreur s'est produite. Veuillez réessayer ou me contacter directement par email.
            </MotionDiv>
          )}
        </div>
      </MotionDiv>
    </section>
  );
}

export default Contact;