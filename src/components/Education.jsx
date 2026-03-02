import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const MotionDiv = motion.div;

function Education() {
  const experiences = [

    {
      title: "Apprenti",
      date: "Septembre 2024 - 2026",
      description:
        "Actuellement en alternance chez Bnp Paribas en tant que developpeur informatique.",
    },
    {
      title: "Stage Assistant de Bureau",
      date: "Décembre 2017",
      description:
        "Suivi et contrôle des feuilles de match, gestion des équipements du club, tâches administratives sur Excel et vérification des placements des équipes.",
    },
    {
      title: "Stage 1re année",
      date: "Juillet 2024 - Août 2024",
      description:
        "Actuellement en recherche de stage de 2 mois en tant que développeur afin d'acquérir une première expérience professionnelle et une vision à long terme du métier.",
    },
  ];

  return (
    <section className="relative py-24 text-white">
      <h2 className="text-4xl font-bold text-center text-[#60A5FA] mb-20">
        Expériences Professionnelles
      </h2>

      {/* Ligne verticale centrale */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-700 -translate-x-1/2"></div>

      <div className="space-y-24 relative">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative flex items-center justify-between w-full"
            >
              {/* Contenu */}
              <MotionDiv
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`w-[45%] ${
                  isLeft ? "text-right" : "text-left ml-auto"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{exp.date}</p>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </MotionDiv>

              {/* Point central */}
              <div className="absolute left-1/2 -translate-x-1/2 bg-[#1E3A5F] border-4 border-gray-900 rounded-full p-3 shadow-lg shadow-blue-500/30">
                <Briefcase size={18} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;