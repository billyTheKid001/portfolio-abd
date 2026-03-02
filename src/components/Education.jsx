import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const MotionDiv = motion.div;

function Education() {
  const experiences = [
    {
      title: "Apprenti Développeur Full-Stack",
      date: "Septembre 2024 - 2026",
      points: [
        "Développement d’applications Java (AEM)",
        "Création de composants personnalisés AEM",
        "Migration vers Angular & Spring Boot",
        "CI/CD avec Jenkins & gestion Git",
        "Code reviews & méthodologie Scrum",
        "Formation des nouveaux développeurs",
      ],
    },
    {
      title: "Stagiaire Développeur Mobile",
      date: "Mars 2023 - Avril 2023 | Janvier 2024 - Février 2024",
      points: [
        "Formation intensive iOS (Hacking with Swift)",
        "Reproduction simplifiée d’Instagram en Swift",
        "POC application BNP via Design System",
        "Développement de jeux mobiles",
      ],
    },
    {
      title: "Stage Deezer",
      date: "Septembre 2023 - Octobre 2023",
      points: [
        "Jeu Python : Pendu des artistes",
        "Manipulation API Deezer via Postman",
        "Requêtes SQL & gestion base de données",
        "Traitement des paiements & fraudes",
        "Création portfolio HTML5/CSS3",
      ],
    },
  ];

  return (
    <section className="relative py-28 text-white">
      <h2 className="text-4xl font-bold text-center text-[#60A5FA] mb-24">
        Expériences Professionnelles
      </h2>

      {/* Ligne centrale */}
      <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent -translate-x-1/2"></div>

      <div className="space-y-28 relative">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="relative flex items-center w-full">
              
              {/* Card */}
              <MotionDiv
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`w-[45%] ${
                  isLeft ? "" : "ml-auto"
                }`}
              >
                <div className="bg-[#111827]/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-1">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4">
                    {exp.date}
                  </p>

                  <ul className="space-y-2 text-gray-300 text-sm">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#60A5FA]"></span>
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>
              </MotionDiv>

              {/* Icône centrale */}
              <div className="absolute left-1/2 -translate-x-1/2 bg-[#1E293B] border-4 border-gray-900 rounded-full p-3 shadow-lg shadow-blue-500/30">
                <Briefcase size={18} className="text-[#60A5FA]" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;