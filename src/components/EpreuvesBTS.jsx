import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MDiv = motion.div;
import {
  ChevronDown,
  Code2,
  BookOpen,
  Briefcase,
  CheckCircle,
  GraduationCap,
  Laptop,
} from "lucide-react";

/* ── Badge tech ── */
function Badge({ label, color = "blue" }) {
  const styles = {
    blue: "bg-blue-500/10   border-blue-500/20   text-blue-400",
    purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  };
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-medium border ${styles[color]}`}
    >
      {label}
    </span>
  );
}

/* ── Project card ── */
function ProjectCard({ title, period, description, techs, badgeColor }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] hover:border-[#60A5FA]/20 rounded-xl p-4 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <h4 className="text-white font-semibold text-sm leading-snug">
          {title}
        </h4>
        <span className="text-xs text-gray-500 shrink-0 pt-0.5">{period}</span>
      </div>
      <p className="text-gray-400 text-xs leading-relaxed mb-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {techs.map((t) => (
          <Badge key={t} label={t} color={badgeColor} />
        ))}
      </div>
    </div>
  );
}

/* ── Competency item ── */
function Competency({ text, color = "text-[#60A5FA]" }) {
  return (
    <li className="flex items-start gap-2.5 text-gray-300 text-sm">
      <CheckCircle size={14} className={`${color} shrink-0 mt-0.5`} />
      {text}
    </li>
  );
}

/* ── Inner accordion ── */
function InnerAccordion({ title, icon, children }) {
  const [open, setOpen] = useState(false);
  const Icon = icon;
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.06]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-3.5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors text-left gap-3"
      >
        <div className="flex items-center gap-3">
          <Icon size={15} className="text-[#60A5FA] shrink-0" />
          <span className="font-semibold text-white text-sm">{title}</span>
        </div>
        <MDiv
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown size={15} className="text-gray-500" />
        </MDiv>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <MDiv
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4 border-t border-white/[0.05] text-gray-300 text-sm leading-relaxed">
              {children}
            </div>
          </MDiv>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Top-level épreuve card ── */
function EpreuveCard({
  code,
  title,
  coefficient,
  type,
  gradient,
  delay,
  children,
}) {
  const [open, setOpen] = useState(false);
  return (
    <MDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm shadow-xl"
    >
      {/* Color bar */}
      <div className={`h-[2px] bg-gradient-to-r ${gradient}`} />

      {/* Header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-center justify-between px-6 py-5 hover:bg-white/[0.03] transition-colors"
      >
        <div className="flex items-center gap-5">
          <span
            className={`text-5xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent leading-none`}
          >
            {code}
          </span>
          <div>
            <h3 className="text-base md:text-lg font-bold text-white leading-tight">
              {title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Coefficient {coefficient} · {type}
            </p>
          </div>
        </div>
        <MDiv
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 ml-4"
        >
          <ChevronDown size={20} className="text-gray-500" />
        </MDiv>
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {open && (
          <MDiv
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/[0.06] px-6 py-5 space-y-3">
              {children}
            </div>
          </MDiv>
        )}
      </AnimatePresence>
    </MDiv>
  );
}

/* ══════════════════════════════════════════════ */
function EpreuvesBTS() {
  const e5Projects = [
    {
      title: "Développement AEM — BNP Paribas",
      period: "2024 – 2025",
      description:
        "Création et maintenance de composants personnalisés avec Adobe Experience Manager. Migration de pages vers un nouveau design system, CI/CD avec Jenkins.",
      techs: ["Java", "AEM", "Sling", "Jenkins", "Git"],
    },
    {
      title: "Migration Angular & Spring Boot",
      period: "2025",
      description:
        "Participation à la migration d'une application interne vers Angular (front) / Spring Boot (back). Tests unitaires et code reviews.",
      techs: ["Angular", "Spring Boot", "REST API", "JUnit"],
    },
    {
      title: "Application iOS — Stage BNP",
      period: "2023 – 2024",
      description:
        "Développement d'une app mobile iOS via le Design System BNP. POC et clone simplifié d'Instagram en Swift.",
      techs: ["Swift", "UIKit", "Design System", "Xcode"],
    },
    {
      title: "Pendu des artistes — Stage Deezer",
      period: "2023",
      description:
        "Jeu Python consommant l'API Deezer : deviner un artiste à partir d'indices. Manipulation SQL et base de données.",
      techs: ["Python", "API REST", "SQL", "Postman"],
    },
  ];

  const e5Competencies = [
    "Concevoir et développer des solutions applicatives web et mobiles",
    "Assurer la persistance des données avec des bases de données relationnelles",
    "Participer à la gestion de projet (Scrum, Git, CI/CD)",
    "Documenter et maintenir une application en production",
    "Collaborer en équipe et réaliser des code reviews",
    "Tester et déployer une solution applicative",
  ];

  const e6Experiences = [
    {
      title: "Alternance — BNP Paribas",
      period: "Sept. 2024 – 2026",
      description:
        "Apprenti développeur Full-Stack. Développement Java/AEM, migration Angular/Spring Boot, formation des développeurs juniors, Scrum.",
      techs: ["Java", "AEM", "Angular", "Scrum"],
    },
    {
      title: "Stage — BNP Paribas (Mobile)",
      period: "Mars–Avr. 2023 · Jan.–Fév. 2024",
      description:
        "Stagiaire développeur mobile. Formation iOS (Hacking with Swift), développement de jeux mobiles, POC Design System BNP.",
      techs: ["Swift", "iOS", "Xcode"],
    },
    {
      title: "Stage — Deezer",
      period: "Sept. – Oct. 2023",
      description:
        "Manipulation de l'API Deezer, requêtes SQL, portfolio HTML/CSS, sensibilisation aux paiements.",
      techs: ["Python", "SQL", "HTML/CSS", "API REST"],
    },
  ];

  const e6Competencies = [
    "Gérer le patrimoine informatique",
    "Répondre aux incidents et aux demandes d'assistance",
    "Développer la présence en ligne de l'organisation",
    "Travailler en mode projet",
    "Mettre à disposition des utilisateurs un service informatique",
    "Organiser son développement professionnel",
  ];

  const certifications = [
    "Certificat Voltaire — maîtrise de l'orthographe française",
    "Networking Basics — Cisco Networking Academy",
    "Hacking with Swift — développement iOS (100 Days of SwiftUI)",
    "Formation Adobe Experience Manager (AEM) — BNP Paribas",
  ];

  return (
    <section className="py-24 text-white" aria-labelledby="epreuves-title">
      {/* Header */}
      <MDiv
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#60A5FA] uppercase mb-4">
          <span className="block w-5 h-[2px] bg-[#60A5FA]" />
          BTS SIO
        </span>
        <h2
          id="epreuves-title"
          className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
          Épreuves E5 & E6
        </h2>
        <p className="text-gray-400 text-base max-w-3xl">
          Les épreuves <span className="text-white font-semibold">E5</span> et{" "}
          <span className="text-white font-semibold">E6</span> valorisent les
          réalisations professionnelles et le parcours de compétences acquis
          tout au long de la formation BTS SIO option SLAM.
        </p>
      </MDiv>

      <div className="space-y-5">
        {/* E5 */}
        <EpreuveCard
          code="E5"
          title="Production et fourniture de services informatiques"
          coefficient={4}
          type="Épreuve pratique et orale"
          gradient="from-[#3B82F6] to-[#06B6D4]"
          delay={0}
        >
          <InnerAccordion title="Présentation de l'épreuve" icon={BookOpen}>
            <p className="mb-4">
              L'épreuve E5 évalue la capacité du candidat à mettre en œuvre des
              solutions applicatives en réponse à des besoins professionnels
              réels, via un dossier de situations professionnelles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Format", value: "Dossier + présentation orale" },
                { label: "Durée", value: "40 min (10 min exposé)" },
                { label: "Coefficient", value: "4" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3"
                >
                  <p className="text-xs text-gray-500 mb-1">{label}</p>
                  <p className="text-white font-semibold text-sm">{value}</p>
                </div>
              ))}
            </div>
          </InnerAccordion>

          <InnerAccordion title="Réalisations professionnelles" icon={Laptop}>
            <p className="mb-4 text-gray-400 text-xs">
              Projets développés en entreprise ou en formation constituant le
              dossier E5.
            </p>
            <div className="space-y-3">
              {e5Projects.map((p) => (
                <ProjectCard key={p.title} {...p} badgeColor="blue" />
              ))}
            </div>
          </InnerAccordion>

          <InnerAccordion title="Compétences SLAM couvertes" icon={Code2}>
            <ul className="space-y-2.5">
              {e5Competencies.map((c) => (
                <Competency key={c} text={c} />
              ))}
            </ul>
          </InnerAccordion>
        </EpreuveCard>

        {/* E6 */}
        <EpreuveCard
          code="E6"
          title="Parcours de professionnalisation"
          coefficient={3}
          type="Épreuve orale"
          gradient="from-[#8B5CF6] to-[#EC4899]"
          delay={0.15}
        >
          <InnerAccordion title="Présentation de l'épreuve" icon={BookOpen}>
            <p className="mb-4">
              L'épreuve E6 valorise l'ensemble du parcours professionnel du
              candidat via un portfolio de compétences, démontrant la
              progression sur les deux années de formation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Format", value: "Portfolio + entretien jury" },
                { label: "Durée", value: "20 min d'entretien" },
                { label: "Coefficient", value: "3" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3"
                >
                  <p className="text-xs text-gray-500 mb-1">{label}</p>
                  <p className="text-white font-semibold text-sm">{value}</p>
                </div>
              ))}
            </div>
          </InnerAccordion>

          <InnerAccordion title="Activités professionnelles" icon={Briefcase}>
            <p className="mb-4 text-gray-400 text-xs">
              Stages et alternance documentés dans le portfolio de compétences.
            </p>
            <div className="space-y-3">
              {e6Experiences.map((e) => (
                <ProjectCard key={e.title} {...e} badgeColor="purple" />
              ))}
            </div>
          </InnerAccordion>

          <InnerAccordion title="Compétences du référentiel" icon={CheckCircle}>
            <ul className="space-y-2.5">
              {e6Competencies.map((c) => (
                <Competency key={c} text={c} color="text-purple-400" />
              ))}
            </ul>
          </InnerAccordion>

          <InnerAccordion
            title="Certifications & formations complémentaires"
            icon={GraduationCap}
          >
            <ul className="space-y-2.5">
              {certifications.map((c) => (
                <Competency key={c} text={c} color="text-purple-400" />
              ))}
            </ul>
          </InnerAccordion>
        </EpreuveCard>
      </div>
    </section>
  );
}

export default EpreuvesBTS;
