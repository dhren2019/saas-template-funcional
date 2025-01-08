import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-[#030712] text-white py-20 px-6 text-center overflow-hidden"
      id="hero"
    >
      {/* Fondo translúcido detrás */}
      <div
        className="absolute inset-0 bg-black opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.05), transparent 70%)',
        }}
      ></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Vídeos que volverán <br className="hidden md:block" />
          a ver una y otra vez.
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl font-light mb-8">
          Utilice nuestros modelos de inteligencia artificial de última generación para llevar sus vídeos de buenos a excelentes.
        </p>

        {/* Contenedor de Imagen con Glass y Glow */}
        <div className="relative group mx-auto mt-10 max-w-4xl">
          {/* Glow animado ajustado como iluminación */}
          <div
            className="absolute rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 blur-3xl opacity-20 -z-10 animate-glow-light"
            style={{
              width: '102%', // Reduce el tamaño para minimizar el sobresaliente
    height: '102%', // Reduce la altura para evitar sobresalir mucho arriba y abajo
    top: '-1%', // Ajusta para centrar el glow
    left: '-1%', // Mantiene el glow centrado horizontalmente
            }}
          ></div>

          {/* Contenedor del efecto Glass */}
          <div
            className="relative rounded-lg p-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md"
            style={{
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Imagen */}
            <img
              src="/hero-image.avif"
              alt="Hero Screenshot"
              className="relative z-10 max-w-full mx-auto rounded-lg"
            />
          </div>
        </div>

        {/* Botón */}
        <button
            className="mt-6 px-4 py-2 text-sm font-medium rounded-full border border-blue-500 text-blue-500 hover:text-purple-500 hover:border-purple-500 transition-all"
        >
          Descargar ahora
        </button>
      </div>
    </section>
  );
};


// Gold Standard Section
const GoldStandard: React.FC = () => {
  return (
    <section className="bg-[#1d0237] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">The new Gold Standard.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Endless Ideation", text: "Never worry about creative blocks again." },
            { title: "Benchmark with AI", text: "Get insights powered by AI tools." },
            { title: "Aesthetic Excellence", text: "Achieve studio-grade visuals." },
            { title: "Pixels Perfected", text: "Craft every pixel with precision." },
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-[#290f4c] rounded-lg shadow-lg">
              <img
                src={`/small-screenshot${index + 1}.avif`}
                alt={`Feature ${index + 1}`}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Workflow Section
const Workflow: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#1d0237] to-[#290f4c] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Your videos. Your workflow.
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <pre className="bg-black text-green-400 p-6 rounded-lg shadow-lg overflow-x-auto">
              {`const page = await client.getByUID('example', params.uid);`}
            </pre>
          </div>
          <div className="w-full md:w-1/2 text-gray-300">
            <p className="mb-6">
              Create the next viral video. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <img
              src="/long-screenshot1.avif"
              alt="Workflow Screenshot"
              className="rounded-lg shadow-lg"
            />
            <button className="bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-lg mt-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonios Section
const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#1d0237] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Creators like you love Repeat
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Nike", image: "/showcase-image.avif", description: "Read Nike's case study" },
            {
              name: "Prismic",
              image: "/polygon-bg-element.svg",
              description: "Learn how Prismic boosted conversions",
            },
          ].map((company, index) => (
            <div key={index} className="p-6 bg-[#290f4c] rounded-lg shadow-lg">
              <img
                src={company.image}
                alt={company.name}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">{company.name}</h3>
              <p className="text-sm text-gray-300">{company.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Integrations Section
const Integrations: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#290f4c] to-[#1d0237] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Integrations galore.</h2>
        <p className="text-lg text-gray-300 mb-12">
          The integrations your team needs to be productive.
        </p>
        <div className="flex justify-center gap-8">
          {["npm", "github", "figma", "slack"].map((tool, index) => (
            <img
              key={index}
              src={`/icons/${tool}.svg`} // Asegúrate de incluir los íconos en esta ruta
              alt={tool}
              className="w-16 h-16"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Section
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1d0237] text-white py-10 text-center">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Repeat AI. All rights reserved.
      </p>
    </footer>
  );
};

// Página Principal
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <GoldStandard />
      <Workflow />
      <Testimonials />
      <Integrations />
      <Footer />
    </>
  );
};

export default Home;
