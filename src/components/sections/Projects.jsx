export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mxmx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3>Temp project 1</h3>
            <p> blah blah blah</p>
            <div>
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                <span></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
