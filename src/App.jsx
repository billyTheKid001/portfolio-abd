import { useState, useEffect } from "react";
import About from "./components/About";
import BTS from "./components/BTS";
import pdp from "./assets/pdp.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Entreprise from "./components/Entreprise";
import Education from "./components/Education";
import Veille from "./components/Veille";
import Contact from "./components/Contact";
import EpreuvesBTS from "./components/EpreuvesBTS";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "BTS", href: "#bts" },
  { label: "Entreprise", href: "#entreprise" },
  { label: "Parcours", href: "#education" },
  { label: "E5 / E6", href: "#epreuves" },
  { label: "Veille", href: "#veille" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#060d1a] min-h-screen text-white overflow-x-hidden">
      {/* Background grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(96,165,250,0.06) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow top-right */}
      <div className="pointer-events-none fixed top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] z-0" />
      <div className="pointer-events-none fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-700/10 blur-[120px] z-0" />

      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#060d1a]/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="text-xl font-extrabold tracking-tight">
            <span className="text-white">AB</span>
            <span className="text-[#60A5FA]">.DEV</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={href}
                  className={`relative px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-[#60A5FA]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#60A5FA] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: flag + burger */}
          <div className="flex items-center gap-4">
            <img
              src="https://flagcdn.com/w40/fr.png"
              alt="FR"
              className="w-7 rounded-sm opacity-80"
            />
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-lg`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden bg-[#0a1628]/98 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-2"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-[#60A5FA] py-2 text-sm font-medium transition-colors"
                >
                  {label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16"
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-5 max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#60A5FA] uppercase">
            <span className="block w-6 h-[2px] bg-[#60A5FA]" />
            Bienvenue sur mon portfolio
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Salut, je suis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#818CF8]">
              Abdoulaye
            </span>
            <br />
            <span className="text-gray-200">Étudiant BTS SIO</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#818CF8]">
              SLAM
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Passionné par le développement web et mobile, je conçois des
            applications performantes et intuitives. Actuellement en alternance
            chez{" "}
            <span className="text-[#60A5FA] font-semibold">BNP Paribas</span>.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#education"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#2563EB] hover:to-[#3B82F6] rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-700/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Mes expériences
              <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#60A5FA]/30 hover:border-[#60A5FA]/60 rounded-xl font-semibold text-sm text-[#60A5FA] hover:bg-[#60A5FA]/5 transition-all hover:-translate-y-0.5"
            >
              Me contacter
            </a>
          </div>

          <div className="flex gap-4 pt-1">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all hover:-translate-y-0.5"
            >
              <i className="fab fa-github text-lg" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-[#60A5FA]/10 hover:border-[#60A5FA]/30 flex items-center justify-center text-gray-400 hover:text-[#60A5FA] transition-all hover:-translate-y-0.5"
            >
              <i className="fab fa-linkedin text-lg" />
            </a>
          </div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#60A5FA]/30 to-[#818CF8]/20 blur-2xl scale-110" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/30">
            <img
              src={pdp}
              alt="Portrait d'Abdoulaye"
              className="w-64 md:w-80 object-cover block"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-4 -left-4 bg-[#0f1e3a] border border-[#60A5FA]/30 rounded-xl px-4 py-2 text-xs font-semibold shadow-lg shadow-blue-900/30 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Disponible en alternance
          </motion.div>
        </motion.div>
      </section>

      {/* ── SECTIONS ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-4">
        <section id="about"><About /></section>
        <section id="bts"><BTS /></section>
        <section id="entreprise"><Entreprise /></section>
        <section id="education"><Education /></section>
        <section id="epreuves"><EpreuvesBTS /></section>
        <section id="veille"><Veille /></section>
      </div>

      <div className="relative z-10">
        <section id="contact"><Contact /></section>
      </div>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-white/5 py-8 px-6 text-center">
        <p className="text-gray-600 text-sm">
          © 2025{" "}
          <span className="text-gray-400 font-medium">Abdoulaye</span> · Développé
          avec React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
