import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Code2,
  Zap,
  Rss,
  Youtube,
  Linkedin,
  HelpCircle,
  ChevronDown,
  BookOpen,
  Calendar,
  ExternalLink,
} from "lucide-react";

import veilleImg from "../assets/C20/Veille.png";
import trelloImg from "../assets/C14-C15/Trello.png";

const MDiv = motion.div;
const MSpan = motion.span;

const FAQ_ITEMS = [
  {
    question: "Qu'est-ce que le No-Code / Low-Code ?",
    answer:
      "Le No-Code désigne une approche logicielle permettant de concevoir des applications via des interfaces visuelles et du glisser-déposer, sans écrire de code. Le Low-Code en est une variante qui autorise quelques lignes de personnalisation. Ces plateformes démocratisent le développement en le rendant accessible aux profils non-techniques, qu'on appelle les Citizen Developers.",
  },
  {
    question: "Quel est le but d'une veille sur le No-Code ?",
    answer:
      "Anticiper les transformations liées à l'essor de ces outils : autonomisation des équipes métier (Citizen Developers), réduction du Time-to-Market, maîtrise des risques (Shadow IT, Vendor Lock-in, RGPD). L'objectif est de prendre des décisions éclairées sur l'adoption du No-Code en entreprise.",
  },
  {
    question: "Quels sont les outils de ma veille ?",
    answer:
      "Pour ma veille sur le No-Code, j'utilise Feedly pour agréger les flux d'actualité tech, LinkedIn pour suivre les publications d'experts et d'entreprises du secteur (Bubble, Make, Airtable…), et YouTube pour les tutoriels et retours d'expérience en vidéo.",
  },
  {
    question: "Quel a été le sujet de ma veille technologique ?",
    answer:
      "J'ai choisi de traiter l'essor du No-Code et du Low-Code en entreprise, un phénomène en forte croissance qui redéfinit la façon dont les organisations conçoivent et déploient leurs applications. Ma problématique : le No-Code peut-il réellement transformer les entreprises, et à quelles conditions ?",
  },
  {
    question: "Quelles sont les thématiques abordées ?",
    answer: null, // Rich content rendered separately
  },
];

const THEMES = [
  {
    number: 1,
    title: "Qu'est-ce que le No-Code / Low-Code ?",
    source: "Journal du Net",
    date: "2024",
    image: veilleImg,
    imageCaption: "Veille informationnelle — collecte et organisation des sources No-Code",
    sections: [
      {
        subtitle: "Définition :",
        text: "Le No-Code est une approche logicielle permettant de concevoir des applications via des interfaces visuelles et du glisser-déposer, sans écrire de code. Les utilisateurs assemblent des blocs fonctionnels, formulaires et automatisations. Outils phares : Bubble (web), Airtable (bases de données), Make et Zapier (automatisations).",
        articleUrl: "https://www.journaldunet.com/developpeur/1518277-tour-d-horizon-du-low-code-et-du-no-code/",
      },
      {
        subtitle: "No-Code vs Low-Code :",
        text: "Le No-Code cible les profils non-techniques — on parle de Citizen Developers — et ne requiert aucune ligne de code. Le Low-Code s'adresse aux développeurs souhaitant accélérer leur production en combinant interface visuelle et personnalisation par code (ex : OutSystems, Mendix). Les deux approches visent à réduire le Time-to-Market.",
        articleUrl: "https://www.lemagit.fr/conseil/Ne-comparez-plus-low-code-et-no-code-selon-le-profil-des-developpeurs",
      },
    ],
  },
  {
    number: 2,
    title: "Quels sont les risques du No-Code en entreprise ?",
    source: "LeMagIT / Journal du Net",
    date: "2024",
    image: null,
    imageCaption: null,
    sections: [
      {
        subtitle: "Shadow IT et sécurité des données :",
        text: "L'accessibilité du No-Code favorise le Shadow IT : des employés créent des applications hors du contrôle de la DSI, exposant l'entreprise à des failles de sécurité et à des traitements de données non conformes au RGPD. La gouvernance de ces outils est donc un enjeu stratégique pour toute direction informatique.",
        articleUrl: "https://www.lemagit.fr/conseil/Securite-reduire-les-risques-lies-aux-plateformes-low-code-et-no-code",
      },
      {
        subtitle: "Dépendance aux plateformes (lock-in) :",
        text: "Les applications No-Code sont étroitement liées à leur éditeur : un changement de tarification, une interruption de service ou une fermeture de la plateforme peut bloquer toute l'activité. Ce Vendor Lock-in, combiné aux enjeux de souveraineté des données, est un risque stratégique souvent sous-estimé lors de l'adoption.",
        articleUrl: "https://www.journaldunet.com/developpeur/1515547-le-no-code-a-un-probleme-et-personne-n-en-parle/",
      },
    ],
  },
  {
    number: 3,
    title: "Le No-Code peut-il transformer les entreprises ?",
    source: "Archimag / Journal du Net",
    date: "2024–2025",
    image: trelloImg,
    imageCaption: "Suivi de projet Kanban — organisation des tâches et indicateurs d'avancement (C14/C15)",
    sections: [
      {
        subtitle: "Autonomie des métiers et Time-to-market :",
        text: "Le No-Code réduit drastiquement le Time-to-Market : une équipe métier peut créer et déployer un outil ou un MVP en quelques jours, sans dépendre des cycles IT. Cette autonomisation — portée par les Citizen Developers — libère la DSI pour se concentrer sur des projets à plus forte valeur ajoutée.",
        articleUrl: "https://www.archimag.com/travail-collaboratif/2024/04/25/citizen-developement-service-intelligence-collective",
      },
      {
        subtitle: "Réduction des coûts et perspectives :",
        text: "Le marché du No-Code/Low-Code dépasse 32 milliards de dollars en 2025, avec une croissance annuelle de 21 % depuis 2019. La France compte 4 millions de Citizen Developers actifs pour 800 000 développeurs professionnels. Les gains réels dépendent d'une adoption encadrée par la DSI et d'une politique de gouvernance claire.",
        articleUrl: "https://journaldunet.com/web-tech/developpeur/1523355-low-code-no-code-nouveau-catalyseur-de-l-automatisation",
      },
    ],
  },
];

const HIGHLIGHTS = [
  { icon: Eye, label: "Sujet", value: "No-Code / Low-Code" },
  {
    icon: Code2,
    label: "Plateformes",
    value: "Bubble · Airtable · Make · Zapier",
  },
  { icon: Zap, label: "Enjeux", value: "Time-to-Market · Citizen Dev · MVP" },
];

const SOURCES = [
  { icon: Rss, label: "Feedly", desc: "Agrégateur de flux tech No-Code" },
  { icon: Linkedin, label: "LinkedIn", desc: "Experts & éditeurs No-Code" },
  { icon: Youtube, label: "YouTube", desc: "Tutoriels & retours d'expérience" },
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
      {theme.image && (
        <div className="mb-6 rounded-xl overflow-hidden border border-white/[0.08]">
          <img src={theme.image} alt={theme.imageCaption ?? theme.title} className="w-full object-cover" />
          {theme.imageCaption && (
            <p className="text-[11px] text-gray-500 px-3 py-2 bg-white/[0.02]">{theme.imageCaption}</p>
          )}
        </div>
      )}
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
            sur{" "}
            <span className="text-[#60A5FA] font-semibold">
              l'essor du No-Code et du Low-Code en entreprise
            </span>
            , une approche logicielle permettant de concevoir des applications
            via des interfaces visuelles et du glisser-déposer, sans écrire de
            code manuel. Elle transforme la relation entre les équipes métier et
            la DSI.
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
                nocode_watch.js
              </span>
              <span className="w-16" />
            </div>

            {/* Code */}
            <div className="px-6 py-6 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-7 text-white">
                {`  `}
                <span className="text-pink-400">const</span>
                {` `}
                <span className="text-white">veilleNoCode</span>
                {` `}
                <span className="text-pink-400">=</span>
                {` `}
                <span className="text-gray-500">{"{"}</span>
                {`
  `}
                <span className="text-cyan-400"> sujet</span>
                <span className="text-gray-500">:</span>
                {`     `}
                <span className="text-amber-300">'No-Code / Low-Code'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-cyan-400"> outils</span>
                <span className="text-gray-500">:</span>
                {`    `}
                <span className="text-gray-500">[</span>
                {`
  `}
                <span className="text-amber-300">
                  {" "}
                  'Bubble'
                </span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-amber-300"> 'Airtable'</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-amber-300">
                  {" "}
                  'Make · Zapier'
                </span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-gray-500"> ],</span>
                {`
  `}
                <span className="text-cyan-400"> enjeux</span>
                <span className="text-gray-500">:</span>
                {`    `}
                <span className="text-gray-500">[</span>
                <span className="text-amber-300">'Time-to-market'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'Autonomie'</span>
                <span className="text-gray-500">],</span>
                {`
  `}
                <span className="text-cyan-400"> limites</span>
                <span className="text-gray-500">:</span>
                {`   `}
                <span className="text-gray-500">[</span>
                <span className="text-amber-300">'Shadow IT'</span>
                <span className="text-gray-500">,</span>
                {` `}
                <span className="text-amber-300">'Lock-in'</span>
                <span className="text-gray-500">],</span>
                {`
  `}
                <span className="text-cyan-400"> objectif</span>
                <span className="text-gray-500">:</span>
                {`  `}
                <span className="text-amber-300">'Démocratiser le dev'</span>
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
