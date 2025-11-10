function About() {
  return (
    <div className="mb-28  text-white flex flex-col lg:flex-row items-start justify-between gap-10">
      {/* Texte à gauche */}
      <div className="lg:w-1/2">
        <h2 className="text-4xl mb-6 font-bold">À propos</h2>
        <p className="mb-10 leading-relaxed text-gray-300">
          Étudiant en BTS SIO option SLAM à l’Efrei, je suis passionné par le développement et les nouvelles technologies.
          Curieux, persévérant et motivé, j’aime apprendre, expérimenter et concevoir des projets concrets.
          Mon objectif : devenir un développeur complet, spécialisé dans le mobile, capable de créer des applications
          performantes, intuitives et utiles.
        </p>
      </div>

      {/* Bloc code à droite */}
      <div className="lg:w-1/2 order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] shadow-lg">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>

        <div className="px-4 lg:px-8 py-5">
          <div className="flex flex-row space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
        </div>

        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <pre className="font-mono text-xs md:text-sm lg:text-base text-white leading-6">
                <span className="text-pink-500">const</span> <span className="text-white">developer</span> <span className="text-pink-500">=</span> <span className="text-gray-400">{"{"}</span><br />
                <span className="ml-4 text-white">name:</span> <span className="text-gray-400">'</span><span className="text-amber-300">Étudiant BTS SIO - Efrei</span><span className="text-gray-400">',</span><br />
                <span className="ml-4 text-white">goal:</span> <span className="text-gray-400">'</span><span className="text-amber-300">Devenir un développeur mobile complet</span><span className="text-gray-400">',</span><br />
                <span className="ml-4 text-white">skills:</span> <span className="text-gray-400">['</span>
                <span className="text-amber-300">React</span><span className="text-gray-400">', '</span>
                <span className="text-amber-300">JavaScript</span><span className="text-gray-400">', '</span>
                <span className="text-amber-300">Tailwind</span><span className="text-gray-400">', '</span>
                <span className="text-amber-300">MySQL</span><span className="text-gray-400">', '</span>
                <span className="text-amber-300">PHP</span><span className="text-gray-400">', '</span>
                <span className="text-gray-400">['</span>
                <span className="ml-4 text-white">qualities:</span> <span className="text-gray-400">['</span>
                <span className="text-amber-300">Curieux</span><span className="text-gray-400">', '</span>
                <span className="text-amber-300">Motivé</span><span className="text-gray-400">', '</span>
                <span className="text-amber-300">Persévérant</span><span className="text-gray-400">'],</span><br />
                <span className="ml-4 text-green-400">hireable:</span> <span className="text-orange-400">function</span><span className="text-gray-400">() {"{"}</span><br />
                <span className="ml-8 text-orange-400">return</span> <span className="text-gray-400">(</span><br />
                <span className="ml-12 text-cyan-400">this.</span><span className="text-white">qualities.includes</span><span className="text-gray-400">(</span><span className="text-amber-300">'Motivé'</span><span className="text-gray-400">)</span> <span className="text-amber-300">&amp;&amp;</span><br />
                <span className="ml-12 text-cyan-400">this.</span><span className="text-white">skills.length</span> <span className="text-amber-300">&gt;=</span> <span className="text-orange-400">5</span><br />
                <span className="ml-8 text-gray-400">);</span><br />
                <span className="ml-4 text-gray-400">{"};"}</span><br />
                <span className="text-gray-400">{"};"}</span>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default About;
