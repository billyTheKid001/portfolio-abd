import { motion } from "framer-motion";
import { Globe, Briefcase, Code2 } from "lucide-react";

const MDiv = motion.div;

const HIGHLIGHTS = [
  { icon: Globe, label: "Secteur", value: "Banque internationale" },
  { icon: Briefcase, label: "Mon poste", value: "Apprenti Full-Stack" },
  { icon: Code2, label: "Stack", value: "Java AEM · Angular" },
];

const STATS = [
  { value: "48M", label: "clients dans le monde" },
  { value: "190K+", label: "collaborateurs" },
  { value: "65", label: "pays" },
  { value: "~65Md€", label: "chiffre d'affaires" },
];

function Entreprise() {
  return (
    <section className="py-24 text-white" aria-labelledby="entreprise-title">
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
            Alternance
          </span>
          <h2
            id="entreprise-title"
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            BNP Paribas
          </h2>

          <p className="text-gray-400 text-base leading-relaxed mb-8">
            <span className="text-white font-semibold">BNP Paribas</span> est un
            groupe bancaire international d'origine française, reconnu comme
            l'un des leaders mondiaux des services financiers. Il accompagne
            particuliers, entreprises et institutions avec des solutions
            complètes, innovantes et sécurisées.
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {HIGHLIGHTS.map(({ icon: Icon, label, value }, i) => (
              <MDiv
                key={label}
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
                  {label}
                </p>
                <p className="text-sm text-white font-medium">{value}</p>
              </MDiv>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 text-center"
              >
                <p className="text-xl font-bold text-[#60A5FA]">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
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
                bnpparibas.js
              </span>
              <span className="w-16" />
            </div>

            {/* Code */}
            <div className="px-6 py-6 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-7 text-white">
                {`  `}
                <span className="text-pink-400">const</span>
                {` `}
                <span className="text-white">bnpParibas</span>
                {` `}
                <span className="text-pink-400">=</span>
                {` `}
                <span className="text-gray-500">{"{"}</span>
                {`
  `}
                <span className="text-cyan-400"> secteur</span>
                <span className="text-gray-500">:</span>
                {`  `}
                <span className="text-amber-300">
                  'Banque & Services financiers'
                </span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-cyan-400"> clients</span>
                <span className="text-gray-500">:</span>
                {`  `}
                <span className="text-amber-300">'48 millions'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-cyan-400"> employes</span>
                <span className="text-gray-500">:</span>
                {` `}
                <span className="text-amber-300">'190 000+'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-cyan-400"> ca</span>
                <span className="text-gray-500">:</span>
                {`       `}
                <span className="text-amber-300">'~65 milliards EUR'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-cyan-400"> presence</span>
                <span className="text-gray-500">:</span>
                {` `}
                <span className="text-amber-300">'65 pays'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-cyan-400"> monRole</span>
                <span className="text-gray-500">:</span>
                {`  `}
                <span className="text-gray-500">{"{"}</span>
                {`
  `}
                <span className="text-cyan-400"> poste</span>
                <span className="text-gray-500">:</span>
                {`   `}
                <span className="text-amber-300">'Apprenti Full-Stack'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-cyan-400"> stack</span>
                <span className="text-gray-500">:</span>
                {`   `}
                <span className="text-gray-500">[</span>
                <span className="text-amber-300">'Java'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'AEM'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'Angular'</span>
                <span className="text-gray-500">],</span>
                {`
  `}
                <span className="text-cyan-400"> periode</span>
                <span className="text-gray-500">:</span>
                {` `}
                <span className="text-amber-300">'2024 — 2026'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-gray-500"> {"}"},</span>
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

            <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/3 to-[#818CF8]/3 pointer-events-none rounded-2xl" />
          </div>
        </MDiv>
      </div>
    </section>
  );
}

export default Entreprise;
