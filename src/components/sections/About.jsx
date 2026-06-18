export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="glass rounded p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p>
            stuff stuff "Currently in my final year of a computer science
            degree, I’ve completed a full-stack bootcamp and worked on projects
            involving AI and cloud technologies. Outside of coding, I experiment
            with Arch Linux, optimize workflows, and stay updated on tech trends
            to refine my skills and deliver impactful solutions."
          </p>
        </div>
      </div>
    </section>
  );
};
