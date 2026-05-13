export default function Portfolio() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'C',
    'C++',
    'GitHub',
  ];

  const projects = [
    {
      title: 'Vintage Scrapbook Birthday Website',
      description:
        'A creative scrapbook-themed birthday website with animations and memories.',
      github: 'https://github.com/',
      demo: '#',
    },
    {
      title: 'To-Do App',
      description:
        'A responsive task manager built using HTML, CSS, and JavaScript.',
      github: 'https://github.com/',
      demo: '#',
    },
    {
      title: 'Calculator App',
      description:
        'A clean and modern calculator with responsive UI and keyboard support.',
      github: 'https://github.com/',
      demo: '#',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">Parangi</h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl text-center">
          <p className="text-cyan-400 text-lg mb-4">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Parangi Panchal
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Frontend Developer & Coding Student
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            Passionate about creating modern websites, coding projects, and
            interactive user experiences using HTML, CSS, JavaScript, React,
            and C++.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold"
            >
              View Projects
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-cyan-500 hover:bg-cyan-500/20 transition"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">About Me</h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate developer currently learning web development and
              programming. I enjoy building creative websites, improving my
              coding skills, and exploring modern technologies. My goal is to
              become a professional software developer and create impactful
              digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-cyan-400">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-3xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-xl"
              >
                <h3 className="text-xl font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-cyan-400">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 shadow-2xl"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-2xl font-bold text-gray-300">
                  Project Preview
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      className="px-4 py-2 rounded-xl border border-cyan-500 hover:bg-cyan-500/20 transition"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            Contact Me
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Interested in working together or discussing projects? Feel free to
            connect with me.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:yourmail@example.com"
              className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-cyan-500 hover:bg-cyan-500/20 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        <p>© 2026 Parangi Panchal. All rights reserved.</p>
      </footer>
    </div>
  );
}
