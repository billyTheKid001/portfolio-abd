import { motion } from "framer-motion";
import { Github, ExternalLink, Clock, CheckCircle, Layers } from "lucide-react";
import mangaDash from "../assets/Projets/MangaDash.png";

const MDiv = motion.div;

const PROJECTS = [
  {
    id: "ecommerce",
    title: "Site E-Commerce",
    year: "1ère année BTS SIO",
    description:
      "Application e-commerce développée en première année de BTS SIO. Gestion des produits, panier, commandes et interface utilisateur complète.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    status: "done",
    gradient: "from-[#3B82F6] to-[#06B6D4]",
    accentColor: "#3B82F6",
    github: "https://github.com/louthomas94/e-commerce",
    image: null,
    col: 1,
  },
  {
    id: "mangadash",
    title: "Manga Dash",
    year: "Hackathon BTS SIO",
    description:
      "Application web développée lors du Hackathon BTS SIO. Tableau de bord dédié à l'univers manga : recherche, suivi de lecture et découverte de titres via API.",
    tags: ["React", "API REST", "Tailwind CSS", "Vite"],
    status: "done",
    gradient: "from-[#8B5CF6] to-[#EC4899]",
    accentColor: "#8B5CF6",
    github: "https://github.com/billyTheKid001/Manga-Dash",
    image: mangaDash,
    col: 1,
  },
  {
    id: "biblio-front",
    title: "Gestion Bibliothèque — Client Léger",
    year: "Projet E6 · SP1 · Jan – Mars 2026",
    description:
      "Application web SPA pour la bibliothèque municipale de Paris. Les adhérents consultent le catalogue et gèrent leurs emprunts via une interface dynamique sans rechargement. Architecture HTML/CSS/JS côté client communicant avec une API PHP centrale (PDO, requêtes préparées). Sécurisation anti-injection SQL et anti-XSS.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "PDO", "Git"],
    status: "done",
    gradient: "from-[#10B981] to-[#3B82F6]",
    accentColor: "#10B981",
    github: "https://github.com/billyTheKid001/gestionbibliotheque",
    image: null,
    col: 2,
  },
  {
    id: "biblio-back",
    title: "Gestion Bibliothèque — Client Lourd",
    year: "Projet E6 · SP2 · Jan – Mars 2026",
    description:
      "Application desktop Python/Tkinter réservée aux bibliothécaires pour administrer livres et membres (CRUD complet) et valider les retours avec détection des retards. Architecture orientée objet (POO) : chaque onglet est une classe héritant de tk.Frame. Connexion sécurisée à la base MySQL partagée via mysql-connector-python.",
    tags: ["Python 3.14", "Tkinter", "MySQL", "POO", "venv", "Git"],
    status: "done",
    gradient: "from-[#F59E0B] to-[#EF4444]",
    accentColor: "#F59E0B",
    github: "https://github.com/billyTheKid001/bibliotheque_back",
    image: null,
    col: 2,
  },
];

function StatusBadge({ status }) {
  if (status === "done")
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border border-green-500/25 bg-green-500/10 text-green-400">
        <CheckCircle size={9} /> Terminé
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border border-amber-500/25 bg-amber-500/10 text-amber-400">
      <Clock size={9} /> En cours
    </span>
  );
}

function ProjectCard({ project, delay }) {
  return (
    <MDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-200 flex flex-col"
    >
      <div className={`h-[3px] bg-gradient-to-r ${project.gradient}`} />

      {/* Image */}
      {project.image && (
        <div className="overflow-hidden border-b border-white/[0.06]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-44 object-cover opacity-90 hover:opacity-100 transition-opacity duration-200"
          />
        </div>
      )}

      {/* Placeholder visuel pour les projets sans screenshot */}
      {!project.image && (
        <div className="h-20 border-b border-white/[0.06] bg-white/[0.01] flex items-center justify-center">
          <div className="flex items-center gap-2 opacity-20">
            <Layers size={20} className="text-white" />
          </div>
        </div>
      )}

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1">{project.year}</p>
            <h3 className="text-white font-bold text-base leading-snug">{project.title}</h3>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <p className="text-gray-400 text-xs leading-relaxed flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full border font-medium"
              style={{
                borderColor: `${project.accentColor}30`,
                background: `${project.accentColor}10`,
                color: project.accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] text-white text-xs font-semibold transition-all w-fit"
          >
            <Github size={13} />
            Voir sur GitHub
            <ExternalLink size={11} className="text-gray-500" />
          </a>
        )}
      </div>
    </MDiv>
  );
}

export default function Projets() {
  const perso = PROJECTS.filter((p) => p.col === 1);
  const e6 = PROJECTS.filter((p) => p.col === 2);

  return (
    <section className="py-24 text-white" aria-labelledby="projets-title">
      <MDiv
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#60A5FA] uppercase mb-4">
          <span className="block w-5 h-[2px] bg-[#60A5FA]" />
          Réalisations
        </span>
        <h2
          id="projets-title"
          className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
          Mes projets
        </h2>
        <p className="text-gray-400 text-base max-w-2xl">
          Projets réalisés en formation, en hackathon et dans le cadre de l'épreuve{" "}
          <span className="text-[#60A5FA] font-semibold">E6</span> du BTS SIO.
        </p>
      </MDiv>

      {/* Projets perso / formation */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle size={14} className="text-green-400" />
          <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">Formation & Hackathon</h3>
          <span className="flex-1 h-[1px] bg-white/[0.06]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {perso.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Projet E6 */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle size={14} className="text-green-400" />
          <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">Projet E6 — Gestion de bibliothèque</h3>
          <span className="flex-1 h-[1px] bg-white/[0.06]" />
        </div>
        <p className="text-gray-500 text-xs mb-6 max-w-2xl leading-relaxed">
          Système complet pour la bibliothèque municipale de Paris — deux applications complémentaires partageant la même base de données MySQL, réalisées seul de janvier à mars 2026.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {e6.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
