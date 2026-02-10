import About from "./components/About";
import BTS from "./components/BTS";
import pdp from "./assets/pdp.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Entreprise from "./components/Entreprise";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-transparent text-white flex items-center justify-between px-8 md:px-20 py-6 z-50">
        {/* LOGO */}
        <div className="text-2xl font-bold">
          <span className="text-white">AB</span>
          <span className="text-gray-400">.DEV</span>
        </div>

        {/* MENU */}
        <nav className="flex space-x-4 md:space-x-8 bg-[#2f2f2f]/70 backdrop-blur-md py-2 px-6 rounded-full text-sm md:text-base font-semibold">
          <a href="#home" className="hover:text-[#60A5FA] transition">ACCUEIL</a>
          <a href="#about" className="hover:text-[#60A5FA] transition">A PROPOS</a>
          <a href="#bts" className="hover:text-[#60A5FA] transition">BTS</a>
          <a href="#entreprise" className="hover:text-[#60A5FA] transition">ENTREPRISE</a>
        </nav>

        <div>
          <img
            src="https://flagcdn.com/w40/fr.png"
            alt="Drapeau français"
            className="w-8 rounded-md border border-gray-700"
          />
        </div>
      </header>

      {/* HOME */}
      <section
        id="home"
        className="min-h-screen w-full text-white flex flex-col md:flex-row items-center justify-between"
      >
        {/* TON CONTENU HOME (inchangé) */}
        <div className="flex flex-col space-y-8 max-w-xl mt-32 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Salut, <br />
            Je suis <span className="text-[#60A5FA]">Abdoulaye</span>, <br />
            <span>étudiant en BTS SIO option-SLAM</span>
          </h1>
          {/* ... */}
        </div>

        <img src={pdp} alt="portrait" className="w-72 md:w-96" />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* BTS */}
      <section id="bts">
        <BTS />
      </section>

      {/* Entreprise*/}
      <section id="entreprise">
          <Entreprise />
      </section>
    </>
  );
}

export default App;
