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
          I’m a computer science student in my final year, specializing in
          full-stack development with a passion for building scalable,
          user-centric applications. My journey includes hands-on experience
          with modern frameworks like React and Node.js, complemented by a
          bootcamp in full-stack development and self-driven projects in AI and
          cloud technologies. Currently, I’m expanding my expertise in AI tools
          and devops to bridge the gap between development and deployment. My
          goal is to leverage these skills to create impactful, efficient
          solutions—whether for a future employer, freelance clients, or my own
          ventures. When I’m not coding, you’ll find me experimenting with Arch
          Linux, optimizing my workflows, or diving into the latest tech trends
          to stay ahead of the curve.
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
