import { motion } from "framer-motion";
import { User, Target, Code2, Sparkles } from "lucide-react";

const MotionDiv = motion.div;

function Entreprise() {
  const highlights = [
    {
      icon: User,
      title: "Profil",
      text: "Étudiant en BTS SIO SLAM",
    },
    {
      icon: Target,
      title: "Objectif",
      text: "Développeur complet",
    },
    {
      icon: Code2,
      title: "Spécialité",
      text: "Applications performantes",
    },
  ];

  return (
    <section className="mb-28 text-white" aria-labelledby="about-title">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
        {/* Texte à gauche */}
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-3 mb-6">
            
            <h2
              id="about-title"
              className="text-4xl md:text-5xl font-bold text-[#60A5FA]"
            >
              BNP PARIBAS
            </h2>
          </div>

          <p className="mb-8 leading-relaxed text-gray-300 text-lg">
            <span className="text-[#60A5FA]">BNP Paribas</span> est un groupe bancaire international d’origine
            française, reconnu comme l’un des leaders mondiaux des services
            financiers. Il accompagne particuliers, entreprises et institutions
            avec des solutions complètes, innovantes et sécurisées, alliant
            expertise bancaire, engagement responsable et solidité financière
            pour gérer, protéger et développer leur patrimoine sur le long
            terme.
          </p>


          {/* Points clés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0B1220]/50 border border-blue-500/20 rounded-xl p-4 hover:border-blue-500/40 transition-colors"
                >
                  <Icon className="text-[#60A5FA] mb-2" size={24} />
                  <h3 className="text-sm font-semibold text-gray-400 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm">{item.text}</p>
                </MotionDiv>
              );
            })}
          </div>
        </MotionDiv>

        {/* Bloc code à droite */}
        <MotionDiv
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        > 
          <div className="relative rounded-xl border border-[#1b2c68a0] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] shadow-2xl overflow-hidden">
            {/* Ligne dégradée supérieure */}
            <div className="flex flex-row">
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>

            {/* Barre de fenêtre macOS */}
            <div className="px-4 lg:px-8 py-5 bg-[#0B1220]/40">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400 hover:bg-orange-500 transition-colors cursor-pointer"></div>
                <div className="h-3 w-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"></div>
                <span className="ml-4 text-gray-500 text-xs font-mono">
                  bnpparibas.js
                </span>
              </div>
            </div>

            {/* Zone de code */}
            <div className="border-t-[2px] border-indigo-900/50 px-4 lg:px-8 py-6 lg:py-8 overflow-x-auto">
              <pre className="font-mono text-xs md:text-sm text-white leading-relaxed">
                <code>Chiffres clé bnp paribas:  <br /><br />
                      48 millions de client a travers le monde. <br />
                      plus de 190 000 collaborateurs. <br />
                      65 millions de chiffres d'affaires <br/>
                </code>
              </pre>

              {/* Curseur clignotant */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-[#60A5FA] ml-1"
              />
            </div>

            {/* Effet de lueur */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

export default Entreprise;
