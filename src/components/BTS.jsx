import { motion } from "framer-motion";
import { Code, Server } from "lucide-react";

const MotionDiv = motion.div;

function BTS() {
  const options = [
    {
      id: "sisr",
      icon: Server,
      title: "SISR",
      subtitle: "Solutions d'Infrastructure, Systèmes et Réseaux",
      description: "Spécialisation dans la gestion et la sécurisation des infrastructures IT",
      skills: [
        "Gestion et maintenance des infrastructures réseau",
        "Administration des systèmes d'exploitation et services",
        "Sécurisation et protection des infrastructures",
        "Optimisation des performances et supervision"
      ],
      delay: 0
    },
    {
      id: "slam",
      icon: Code,
      title: "SLAM",
      subtitle: "Solutions Logicielles et Applications Métiers",
      description: "Spécialisation dans le développement d'applications sur mesure",
      skills: [
        "Développement d'applications web et mobiles",
        "Conception et gestion de bases de données",
        "Programmation orientée objet multi-langages",
        "Tests, déploiement et maintenance applicative"
      ],
      delay: 0.15
    }
  ];

  return (
    <section className="mb-28 text-white" aria-labelledby="bts-title">
      {/* Introduction */}
      <div className="mb-16">
        <h1 
          id="bts-title"
          className="text-4xl md:text-5xl mb-6 font-bold text-[#60A5FA]"
        >
          Le BTS SIO, c'est quoi ?
        </h1>
        
        <p className="mb-10 leading-relaxed text-gray-300 text-lg max-w-4xl">
          Le <strong>BTS Services Informatiques aux Organisations (SIO)</strong> est 
          un diplôme national de niveau Bac +2 qui forme des techniciens supérieurs 
          capables de concevoir, développer, déployer et maintenir des solutions 
          informatiques adaptées aux besoins des organisations. Cette formation vise 
          à répondre aux enjeux actuels du numérique : transformation digitale, 
          sécurité des systèmes d'information et développement d'applications métiers.
        </p>

        <h2 className="text-3xl font-bold text-[#60A5FA] mt-12">
          Deux spécialisations au choix
        </h2>
      </div>

      {/* Cartes des options */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {options.map((option) => {
          const Icon = option.icon;
          
          return (
            <MotionDiv
              key={option.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: option.delay }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 40px rgba(96, 165, 250, 0.3)",
              }}
              className="relative bg-gradient-to-br from-[#0B1220] to-[#0A0F1C] rounded-3xl p-8 lg:p-10 border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              {/* Icône flottante */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-full p-4 shadow-lg shadow-blue-500/30">
                <Icon className="text-white" size={28} strokeWidth={2.5} />
              </div>

              {/* Contenu */}
              <div className="mt-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-center mb-2 text-[#60A5FA]">
                  {option.title}
                </h3>
                
                <p className="text-center text-sm text-gray-400 mb-4">
                  {option.subtitle}
                </p>

                <p className="text-center text-gray-300 mb-8 italic">
                  {option.description}
                </p>

                {/* Liste des compétences */}
                <ul className="space-y-4" role="list">
                  {option.skills.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: option.delay + 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start text-gray-300 text-base lg:text-lg"
                    >
                      <span className="text-[#60A5FA] mr-3 mt-1 flex-shrink-0">▸</span>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
            </MotionDiv>
          );
        })}
      </div>
    </section>
  );
}

export default BTS;