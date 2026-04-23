import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Gamepad2,
  Cpu,
  Rss,
  Youtube,
  Github,
  HelpCircle,
  ChevronDown,
  BookOpen,
  Calendar,
  ExternalLink,
} from "lucide-react";

const MDiv = motion.div;
const MSpan = motion.span;

const FAQ_ITEMS = [
  {
    question: "Qu'est ce que la veille technologique ?",
    answer:
      "La veille technologique est un processus systématique et continu de collecte, d'analyse et de diffusion d'informations sur les évolutions techniques, les innovations et les tendances dans un domaine donné. Elle permet de rester informé des avancées technologiques et d'anticiper les changements.",
  },
  {
    question: "Qu'est ce que le but d'une veille technologique ?",
    answer:
      "Le but d'une veille technologique est de surveiller l'environnement technologique pour identifier les opportunités et les menaces, anticiper les évolutions du marché, améliorer ses compétences et prendre des décisions éclairées dans le cadre de projets professionnels ou personnels.",
  },
  {
    question: "Quelles sont les outils de ma veille ?",
    answer:
      "Pour ma veille technologique, j'utilise principalement Feedly comme agrégateur d'articles tech, YouTube pour les conférences et démos VR, ainsi que GitHub pour suivre les projets open-source liés à WebXR et à la réalité virtuelle.",
  },
  {
    question: "Quelle a été le sujet de ma veille technologique ?",
    answer:
      "J'ai décidé de traiter le sujet de la réalité virtuelle (VR), qui est en constante évolution et utilisée dans beaucoup de domaines. Ma problématique principale est : Quel futur de la Réalité Virtuelle faut-il espérer ?",
  },
  {
    question: "Quelles sont les différentes thématiques abordées ?",
    answer: null, // Rich content rendered separately
  },
];

const THEMES = [
  {
    number: 1,
    title: "Qu'est ce que la réalité virtuelle ?",
    source: "Numerama",
    date: "22-01-2023",
    sections: [
      {
        subtitle: "Définition :",
        text: "La réalité virtuelle est une technologie qui permet d'immerger son utilisateur dans un environnement 3D dans lequel il peut généralement se déplacer, afin de participer à des expériences impossibles à reproduire dans la réalité ou difficiles à mettre en place. Nécessite généralement l'emploi d'un casque VR, elle permet de participer à une multitude d'expériences, que ce soit pour jouer, se divertir ou se rencontrer.",
        articleUrl: "https://www.numerama.com/tech/1248822-quest-ce-que-la-realite-virtuelle.html",
      },
      {
        subtitle: "Réalité virtuelle et Réalité augmentée :",
        text: "Attention à ne pas confondre d'une part : La réalité virtuelle qui permet à une personne de vivre une expérience d'immersion et de mener une activité senso-motrice dans un monde artificiel à immersion total.\n\nEt d'autre part la réalité augmentée une technologie qui elle permet d'intégrer des éléments virtuels en 3D, en temps réel au sein d'un environnement réel. Le principe est de combiner le virtuel et le réel et donner l'illusion d'une intégration parfaite à l'utilisateur.",
        articleUrl: "https://www.realite-virtuelle.com/difference-realite-virtuelle-augmentee/",
      },
    ],
  },
  {
    number: 2,
    title: "Que faut-il craindre de la réalité virtuelle ?",
    source: "Futura Sciences",
    date: "15-03-2023",
    sections: [
      {
        subtitle: "Risques pour la santé :",
        text: "L'utilisation prolongée de casques VR peut entraîner des nausées (cinétose), de la fatigue visuelle, des maux de tête et une désorientation spatiale. Les experts recommandent des pauses régulières et une utilisation limitée dans le temps, notamment chez les enfants dont le système visuel est encore en développement.",
        articleUrl: "https://www.futura-sciences.com/tech/actualites/realite-virtuelle-realite-virtuelle-quels-risques-sante-108889/",
      },
      {
        subtitle: "Isolement social et dépendance :",
        text: "La VR peut créer une forme d'isolement en coupant l'utilisateur du monde réel. Certains utilisateurs développent une préférence pour les interactions virtuelles au détriment des relations sociales réelles, ce qui soulève des questions sur l'impact psychologique à long terme de cette technologie.",
        articleUrl: "https://www.lefigaro.fr/secteur/high-tech/realite-virtuelle-les-risques-de-la-dependance-20230315",
      },
    ],
  },
  {
    number: 3,
    title: "La réalité virtuelle peut-elle être bénéfique pour tous ?",
    source: "L'Usine Digitale",
    date: "08-05-2023",
    sections: [
      {
        subtitle: "Applications médicales :",
        text: "La VR est utilisée en médecine pour la rééducation de patients victimes d'AVC, le traitement des phobies par exposition progressive, la gestion de la douleur chronique et la formation des chirurgiens. Elle offre un environnement sûr et contrôlé pour des thérapies innovantes.",
        articleUrl: "https://www.usine-digitale.fr/article/comment-la-realite-virtuelle-revolutionne-la-medecine.N2130986",
      },
      {
        subtitle: "Formation et éducation :",
        text: "Dans le domaine professionnel, la VR permet de simuler des situations dangereuses ou coûteuses à reproduire (formation pompiers, pilotage, industrie). Dans l'éducation, elle rend l'apprentissage plus immersif et interactif, permettant aux élèves de visiter des lieux historiques ou d'explorer le corps humain en 3D.",
        articleUrl: "https://www.education.gouv.fr/la-realite-virtuelle-au-service-de-l-education-341567",
      },
    ],
  },
];

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

function ThemeContent({ theme }) {
  return (
    <div className="mb-8 last:mb-0">
      <h4 className="text-xl font-bold text-white mb-2">
        Thème {theme.number} : {theme.title}
      </h4>
      <div className="flex items-center gap-3 text-xs text-gray-400 mb-5">
        <span className="flex items-center gap-1.5">
          <BookOpen size={13} />
          {theme.source}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar size={13} />
          {theme.date}
        </span>
      </div>
      {theme.sections.map((section, i) => (
        <div key={i} className="mb-6 last:mb-0">
          <h5 className="text-base font-semibold text-white mb-2">
            {section.subtitle}
          </h5>
          <p className="text-gray-400 text-sm leading-relaxed mb-3 whitespace-pre-line">
            {section.text}
          </p>
          <a
            href={section.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2c4a6e] hover:bg-[#3b5f8a] text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Article
            <ExternalLink size={14} />
          </a>
        </div>
      ))}
      {theme.number < 3 && (
        <hr className="border-white/[0.08] mt-6" />
      )}
    </div>
  );
}

function AccordionItem({ item, isOpen, onToggle, richContent }) {
  return (
    <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-white/[0.02] hover:border-[#60A5FA]/20 transition-colors duration-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer"
      >
        <HelpCircle size={20} className="text-[#60A5FA] shrink-0" />
        <span className="text-white font-medium text-sm flex-1">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} className="text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 ml-9">
              {richContent ? (
                richContent
              ) : (
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Veille() {
  const [openIndex, setOpenIndex] = useState(null);

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

      {/* ── FAQ Accordion ── */}
      <MDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Questions fréquentes
        </h3>
        <div className="flex flex-col gap-3 max-w-4xl">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              richContent={
                i === FAQ_ITEMS.length - 1 ? (
                  <div>
                    {THEMES.map((theme) => (
                      <ThemeContent key={theme.number} theme={theme} />
                    ))}
                  </div>
                ) : null
              }
            />
          ))}
        </div>
      </MDiv>

    </section>
  );
}

export default Veille;
