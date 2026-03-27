import { motion } from "framer-motion";
import { Eye, Gamepad2, Cpu, Rss, Youtube, Github } from "lucide-react";

const MDiv = motion.div;
const MSpan = motion.span;

const HIGHLIGHTS = [
  { icon: Eye, label: "Sujet", value: "Réalité Virtuelle (VR)" },
  {
    icon: Gamepad2,
    label: "Applications",
    value: "Jeux, formation, simulation",
  },
  { icon: Cpu, label: "Technologies", value: "Unity · WebXR · Casques VR" },
];

const SOURCES = [
  { icon: Rss, label: "Feedly", desc: "Agrégateur d'articles tech" },
  { icon: Youtube, label: "YouTube", desc: "Conférences & démos VR" },
  { icon: Github, label: "GitHub", desc: "Projets open-source WebXR" },
];

function Veille() {
  return (
    <section className="py-24 text-white" aria-labelledby="veille-title">
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
            BTS SIO
          </span>
          <h2
            id="veille-title"
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            Veille technologique
          </h2>

          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Dans le cadre de ma formation, je réalise une veille technologique
            sur la{" "}
            <span className="text-[#60A5FA] font-semibold">
              réalité virtuelle (VR)
            </span>
            , une technologie immersive en pleine expansion. Elle permet de
            plonger l'utilisateur dans un environnement simulé et interactif,
            utilisée dans le jeu vidéo, la formation professionnelle et la
            médecine.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {HIGHLIGHTS.map((item, i) => {
              const Icon = item.icon;
              return (
                <MDiv
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/[0.03] border border-white/[0.07] hover:border-[#60A5FA]/30 hover:bg-[#60A5FA]/5 rounded-xl p-4 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#60A5FA]/10 flex items-center justify-center mb-3">
                    <Icon size={16} className="text-[#60A5FA]" />
                  </div>
                  <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-sm text-white font-medium">{item.value}</p>
                </MDiv>
              );
            })}
          </div>

          {/* Sources */}
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-3">
              Sources de veille
            </p>
            <div className="flex flex-col gap-2">
              {SOURCES.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/[0.05] flex items-center justify-center">
                      <Icon size={13} className="text-gray-400" />
                    </div>
                    <span className="text-white font-medium">{s.label}</span>
                    <span className="text-gray-500">—</span>
                    <span className="text-gray-400">{s.desc}</span>
                  </div>
                );
              })}
            </div>
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
                vr_watch.js
              </span>
              <span className="w-16" />
            </div>

            {/* Code */}
            <div className="px-6 py-6 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-7 text-white">
                {`  `}
                <span className="text-pink-400">const</span>
                {` `}
                <span className="text-white">veilleVR</span>
                {` `}
                <span className="text-pink-400">=</span>
                {` `}
                <span className="text-gray-500">{"{"}</span>
                {`
  `}
                <span className="text-cyan-400"> sujet</span>
                <span className="text-gray-500">:</span>
                {`     `}
                <span className="text-amber-300">'Réalité Virtuelle'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-cyan-400"> tendances</span>
                <span className="text-gray-500">:</span>
                {` `}
                <span className="text-gray-500">[</span>
                {`
  `}
                <span className="text-amber-300">
                  {" "}
                  'Casques autonomes (Meta Quest)'
                </span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-amber-300"> 'Développement WebXR'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-amber-300">
                  {" "}
                  'Expériences immersives'
                </span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-gray-500"> ],</span>
                {`
  `}
                <span className="text-cyan-400"> outils</span>
                <span className="text-gray-500">:</span>
                {`    `}
                <span className="text-gray-500">[</span>
                <span className="text-amber-300">'Feedly'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'YouTube'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'GitHub'</span>
                <span className="text-gray-500">],</span>
                {`
  `}
                <span className="text-cyan-400"> technos</span>
                <span className="text-gray-500">:</span>
                {`   `}
                <span className="text-gray-500">[</span>
                <span className="text-amber-300">'Unity'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'WebXR'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'Three.js'</span>
                <span className="text-gray-500">],</span>
                {`
  `}
                <span className="text-cyan-400"> objectif</span>
                <span className="text-gray-500">:</span>
                {`  `}
                <span className="text-amber-300">'Explorer le dev VR'</span>
                <span className="text-gray-500">,</span>
                {`
`}
                <span className="text-gray-500">{"};"}</span>
              </pre>
              <MSpan
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
                className="inline-block w-[7px] h-[14px] bg-[#60A5FA] rounded-sm ml-0.5 -mb-0.5"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/3 to-[#818CF8]/3 pointer-events-none rounded-2xl" />
          </div>
        </MDiv>
      </div>
    </section>
  );
}

export default Veille;
