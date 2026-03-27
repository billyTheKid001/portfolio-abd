import { motion } from "framer-motion";
import { Code, Server, CheckCircle } from "lucide-react";

const MDiv = motion.div;

const OPTIONS = [
  {
    id: "sisr",
    icon: Server,
    tag: "Option A",
    title: "SISR",
    subtitle: "Solutions d'Infrastructure, Systèmes et Réseaux",
    description: "Gestion et sécurisation des infrastructures IT",
    skills: [
      "Gestion et maintenance des infrastructures réseau",
      "Administration des systèmes et services",
      "Sécurisation et protection des SI",
      "Supervision et optimisation des performances",
    ],
    accent: "from-[#06B6D4] to-[#0EA5E9]",
    glow: "hover:shadow-cyan-500/15",
    active: false,
  },
  {
    id: "slam",
    icon: Code,
    tag: "Mon option",
    title: "SLAM",
    subtitle: "Solutions Logicielles et Applications Métiers",
    description: "Développement d'applications sur mesure",
    skills: [
      "Développement d'applications web et mobiles",
      "Conception et gestion de bases de données",
      "Programmation orientée objet multi-langages",
      "Tests, déploiement et maintenance applicative",
    ],
    accent: "from-[#60A5FA] to-[#818CF8]",
    glow: "hover:shadow-blue-500/20",
    active: true,
  },
];

function BTS() {
  return (
    <section className="py-24 text-white" aria-labelledby="bts-title">

      {/* Header */}
      <MDiv
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#60A5FA] uppercase mb-4">
          <span className="block w-5 h-[2px] bg-[#60A5FA]" />
          Formation
        </span>
        <h2
          id="bts-title"
          className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
          Le BTS SIO, c'est quoi ?
        </h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-3xl">
          Le{" "}
          <span className="text-white font-semibold">
            BTS Services Informatiques aux Organisations
          </span>{" "}
          est un diplôme Bac +2 qui forme des techniciens supérieurs capables de
          concevoir, développer et maintenir des solutions informatiques adaptées
          aux besoins des organisations.
        </p>
      </MDiv>

      {/* Two-column label */}
      <p className="text-sm text-gray-500 font-medium mb-8">
        Deux spécialisations au choix
      </p>

      {/* Options */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {OPTIONS.map((opt, idx) => {
          const Icon = opt.icon;
          return (
            <MDiv
              key={opt.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl bg-white/[0.03] border transition-all duration-300 shadow-xl ${opt.glow} ${
                opt.active
                  ? "border-[#60A5FA]/30 hover:border-[#60A5FA]/50"
                  : "border-white/[0.07] hover:border-white/[0.12]"
              }`}
            >
              {/* Active badge */}
              {opt.active && (
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase bg-[#60A5FA]/15 text-[#60A5FA] border border-[#60A5FA]/25 px-2.5 py-1 rounded-full">
                  Mon option
                </span>
              )}

              {/* Top gradient accent */}
              <div className={`h-[2px] rounded-t-2xl bg-gradient-to-r ${opt.accent}`} />

              <div className="p-8">
                {/* Icon + title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${opt.accent} flex items-center justify-center shadow-lg`}>
                    <Icon size={22} className="text-white" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${opt.accent}`}>
                      {opt.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">{opt.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm italic mb-6 leading-relaxed">
                  {opt.description}
                </p>

                {/* Skills */}
                <ul className="space-y-3">
                  {opt.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle size={15} className="text-[#60A5FA] shrink-0 mt-0.5" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </MDiv>
          );
        })}
      </div>
    </section>
  );
}

export default BTS;
