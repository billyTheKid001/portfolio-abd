import { motion } from "framer-motion";
import { User, Target, Code2 } from "lucide-react";

const MDiv = motion.div;

const HIGHLIGHTS = [
  { icon: User, title: "Profil", text: "Étudiant BTS SIO SLAM — Efrei" },
  { icon: Target, title: "Objectif", text: "Développeur mobile full-stack" },
  { icon: Code2, title: "Spécialité", text: "Applications performantes" },
];

function About() {
  return (
    <section className="py-24 text-white" aria-labelledby="about-title">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        {/* ── Texte ── */}
        <MDiv
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#60A5FA] uppercase mb-4">
            <span className="block w-5 h-[2px] bg-[#60A5FA]" />
            Qui suis-je
          </span>
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            À propos de moi
          </h2>

          <p className="text-gray-400 text-base leading-relaxed mb-5">
            Étudiant en{" "}
            <span className="text-white font-semibold">
              BTS SIO option SLAM
            </span>{" "}
            à l'Efrei, je suis passionné par le développement et les nouvelles
            technologies. Curieux, persévérant et motivé, j'aime apprendre,
            expérimenter et concevoir des projets concrets.
          </p>

          <p className="text-gray-400 text-base leading-relaxed mb-10">
            Mon objectif : devenir un{" "}
            <span className="text-[#60A5FA] font-semibold">
              développeur complet
            </span>
            , spécialisé dans le mobile, capable de créer des applications
            performantes, intuitives et utiles.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
              <MDiv
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/[0.03] border border-white/[0.07] hover:border-[#60A5FA]/30 hover:bg-[#60A5FA]/5 rounded-xl p-4 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[#60A5FA]/10 flex items-center justify-center mb-3">
                  <Icon size={16} className="text-[#60A5FA]" />
                </div>
                <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">
                  {title}
                </p>
                <p className="text-sm text-white font-medium">{text}</p>
              </MDiv>
            ))}
          </div>
        </MDiv>

        {/* ── Code block ── */}
        <MDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a1020] shadow-2xl shadow-blue-900/20">
            {/* Top accent */}
            <div className="h-[2px] bg-gradient-to-r from-[#60A5FA] via-[#818CF8] to-transparent" />

            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <span className="text-gray-500 text-xs font-mono">
                developer.js
              </span>
              <span className="w-16" />
            </div>

            {/* Code */}
            <div className="px-6 py-6 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-7 text-white">
                {`  `}
                <span className="text-pink-400">const</span>
                {` `}
                <span className="text-white">developer</span>
                {` `}
                <span className="text-pink-400">=</span>
                {` `}
                <span className="text-gray-500">{"{"}</span>
                {`
  `}
                <span className="text-cyan-400"> name</span>
                <span className="text-gray-500">:</span>
                {`    `}
                <span className="text-amber-300">'Abdoulaye'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-cyan-400"> ecole</span>
                <span className="text-gray-500">:</span>
                {`   `}
                <span className="text-amber-300">'Efrei — BTS SIO SLAM'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-cyan-400"> skills</span>
                <span className="text-gray-500">:</span>
                {`  `}
                <span className="text-gray-500">[</span>
                {`
  `}
                <span className="text-amber-300"> 'React'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'TypeScript'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-amber-300"> 'Java'</span>
                <span className="text-gray-500">,</span>
                {`  `}
                <span className="text-amber-300">'Angular'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-amber-300"> 'Swift'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'MySQL'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'Git'</span>
                {`
  `}
                <span className="text-gray-500"> ],</span>
                {`
  `}
                <span className="text-cyan-400"> qualities</span>
                <span className="text-gray-500">:</span>
                {` `}
                <span className="text-gray-500">[</span>
                <span className="text-amber-300">'Curieux'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'Motivé'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'Persévérant'</span>
                <span className="text-gray-500">],</span>
                {`
  `}
                <span className="text-cyan-400"> hireable</span>
                <span className="text-gray-500">:</span>
                {` `}
                <span className="text-purple-400">true</span>
                <span className="text-gray-500">,</span>
                {`
`}
                <span className="text-gray-500">{"};"}</span>
              </pre>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
                className="inline-block w-[7px] h-[14px] bg-[#60A5FA] rounded-sm ml-0.5 -mb-0.5"
              />
            </div>

            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/3 to-[#818CF8]/3 pointer-events-none rounded-2xl" />
          </div>
        </MDiv>
      </div>
    </section>
  );
}

export default About;
