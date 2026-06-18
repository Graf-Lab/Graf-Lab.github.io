export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          Hello I'm Grafton Labrum
        </h1>
        <p className="text-gray-400" text-lg max-w-lg mx-auto>
          I’m a computer science student specializing in full-stack development,
          with a focus on React, Node.js, and modern web technologies. I build
          scalable, user-centric applications and explore AI and cloud tools to
          bridge development and deployment.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-traslate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a
            href="contact"
            className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-traslate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
