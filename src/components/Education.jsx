import { motion } from "framer-motion";

const MDiv = motion.div;

const EXPERIENCES = [
  {
    title: "Apprenti Développeur Full-Stack",
    company: "BNP Paribas",
    date: "Sept. 2024 — 2026",
    type: "Alternance",
    color: "from-[#60A5FA] to-[#818CF8]",
    dot: "bg-[#60A5FA]",
    points: [
      "Développement Java avec Adobe Experience Manager (AEM)",
      "Création de composants personnalisés et migration Design System",
      "Migration vers Angular & Spring Boot",
      "CI/CD avec Jenkins — gestion Git",
      "Code reviews & méthodologie Scrum",
      "Formation des nouveaux développeurs",
    ],
  },
  {
    title: "Étudiant BTS SIO — option SLAM",
    company: "Efrei Paris",
    date: "Sept. 2024 — Mai 2026",
    type: "Formation",
    color: "from-[#818CF8] to-[#A78BFA]",
    dot: "bg-[#818CF8]",
    points: [
      "Développement PHP, Java, JavaScript",
      "Conception et développement d'applications web",
      "Algorithmique et mathématiques appliquées",
      "Gestion de version avec Git",
      "Travail en équipe — méthodes Agile",
    ],
  },
  {
    title: "Stagiaire Développeur Mobile",
    company: "BNP Paribas",
    date: "Mars–Avr. 2023 · Jan.–Fév. 2024",
    type: "Stage",
    color: "from-[#34D399] to-[#10B981]",
    dot: "bg-emerald-400",
    points: [
      "Formation développement iOS (Hacking with Swift)",
      "Reproduction simplifiée d'Instagram en Swift",
      "POC application BNP via Design System",
      "Développement de jeux mobiles",
    ],
  },
  {
    title: "Stagiaire Développeur",
    company: "Deezer",
    date: "Sept. — Oct. 2023",
    type: "Stage",
    color: "from-[#F472B6] to-[#EC4899]",
    dot: "bg-pink-400",
    points: [
      "Jeu Python : Pendu des artistes",
      "Manipulation API Deezer via Postman",
      "Requêtes SQL & gestion base de données",
      "Sensibilisation traitement des paiements & fraudes",
      "Création portfolio HTML5/CSS3",
    ],
  },
];

function Education() {
  return (
    <section className="py-24 text-white" aria-labelledby="education-title">

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
          Mon parcours
        </span>
        <h2
          id="education-title"
          className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
          Expériences professionnelles
        </h2>
      </MDiv>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line — hidden on mobile, visible md+ */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#60A5FA]/40 via-white/10 to-transparent -translate-x-1/2" />

        <div className="space-y-12 md:space-y-16">
          {EXPERIENCES.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative flex flex-col md:flex-row items-stretch md:items-center gap-6">

                {/* Left slot */}
                <div className={`md:w-[46%] ${isLeft ? "md:block" : "md:block order-first md:order-none"}`}>
                  {isLeft ? (
                    <MDiv
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.55 }}
                      viewport={{ once: true }}
                    >
                      <Card exp={exp} />
                    </MDiv>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-8 justify-center items-center flex-shrink-0">
                  <div className={`w-3.5 h-3.5 rounded-full ${exp.dot} ring-4 ring-[#060d1a] shadow-lg z-10`} />
                </div>

                {/* Right slot */}
                <div className="md:w-[46%]">
                  {!isLeft ? (
                    <MDiv
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.55 }}
                      viewport={{ once: true }}
                    >
                      <Card exp={exp} />
                    </MDiv>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                  {/* Mobile: always show card */}
                  <div className="md:hidden">
                    <MDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {isLeft && <div className="md:hidden" />}
                      {!isLeft && <Card exp={exp} />}
                    </MDiv>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Card({ exp }) {
  return (
    <div className="group bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.07] hover:border-[#60A5FA]/25 rounded-2xl p-6 transition-all duration-300 shadow-xl">
      {/* Top line accent */}
      <div className={`h-[2px] w-12 rounded-full bg-gradient-to-r ${exp.color} mb-4`} />

      {/* Type badge + date */}
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
          {exp.type}
        </span>
        <span className="text-xs text-gray-500">{exp.date}</span>
      </div>

      <h3 className="text-base font-bold text-white mb-1 leading-tight">{exp.title}</h3>
      <p className="text-sm text-[#60A5FA] font-medium mb-4">{exp.company}</p>

      <ul className="space-y-2">
        {exp.points.map((pt, i) => (
          <li key={i} className="flex items-start gap-2.5 text-gray-400 text-sm">
            <span className={`mt-[5px] w-1.5 h-1.5 rounded-full ${exp.dot} shrink-0`} />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
