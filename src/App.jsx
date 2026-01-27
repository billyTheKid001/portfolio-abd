import About from './components/about';
import BTS from './components/BTS';
import pdp from './assets/pdp.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-transparent text-white flex items-center justify-between px-8 md:px-20 py-6 z-50">
        {/* LOGO */}
        <div className="text-2xl font-bold">
          <span className="text-white">AB</span><span className="text-gray-400">.DEV</span>
        </div>

        {/* MENU */}
        <nav className="flex space-x-4 md:space-x-8 bg-[#2f2f2f]/70 backdrop-blur-md py-2 px-6 rounded-full text-sm md:text-base font-semibold">
          <a href="App.jsx" className="hover:text-[#60A5FA] transition">ACCUEIL</a>
          <a href="About" className="hover:text-[#60A5FA] transition">A PROPOS</a>
          <a href="Project" className="hover:text-[#60A5FA] transition">PROJET</a>
        </nav>

        {/* LANGUE (drapeau) */}
        <div>
          <img
            src="https://flagcdn.com/w40/fr.png"
            alt="Drapeau français"
            className="w-8 rounded-md border border-gray-700"
          />
        </div>
      </header>

      {/* SECTION ACCUEIL */}
      <section
        id="home"
        className="min-h-screen w-full  text-white flex flex-col md:flex-row items-center justify-between "
      >
        {/* TEXTE GAUCHE */}
        <div className="flex flex-col space-y-8 max-w-xl mt-32 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Salut, <br />
            Je suis <span className="text-[#60A5FA]">Abdoulaye</span>, <br />
            <span>étudiant en BTS SIO option-SLAM</span>
          </h1>

          {/* ICONES SOCIAUX */}
          <div className="flex space-x-6 text-[#60A5FA] text-3xl">
            <a href="https://github.com/billyTheKid001" target='blank'> <i className="fa-brands fa-github hover:text-blue-400 transition"></i></a>
            <a href="https://www.linkedin.com/in/abdoulaye-cissokho-b5429b257/" target='blank'><i className="fa-brands fa-linkedin hover:text-blue-400 transition"></i></a>
            <a href="mailto:cissokhoabdoulaye069@gmail.com"><i className="fa-solid fa-envelope hover:text-blue-400 transition"></i></a>
          </div>

          {/* BOUTONS */}
          <div className="flex gap-5 pt-6">
            <button className="text-white border border-[#60A5FA] px-6 py-3 rounded-full font-semibold hover:bg-[#60A5FA] hover:text-black transition">
              CONTACT MOI !
            </button>
            <button className="bg-[#60A5FA] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-500 transition">
              Mon CV <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </div>

        {/* IMAGE DROITE */}
        <div className="flex justify-center items-center md:justify-end w-full md:w-auto mt-10 md:mt-0">
          <img
            src={pdp}
            alt="portrait Billy"
            className="w-72 md:w-96 lg:w-[26rem] select-none"
          />
        </div>
      </section>

      {/* AUTRES SECTIONS */}
      <About/>
      <BTS/>
    </>
  );
}

export default App;
