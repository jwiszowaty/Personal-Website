import {projects} from "../data/projects";
import Menu from "../components/Menu";

function Projects() {
  return (
    <>
      <Menu />
      <main className="flex flex-col items-center mx-auto p-8 text-gray-900 bg-blue-50 min-h-screen">
        <h1 className="text-3xl font-semibold mb-10 text-center tracking-wide">
          Projects
        </h1>
        <div class="flex w-8/10 justify-between">
          <div className="w-2/10">
            <div className="bg-white rounded-lg shadow-md p-1 m-1">
              <p className="font-light">Language</p>
              <button className="bg-blue-700 hover:bg-blue-300 text-white font-semibold px-2 m-1 rounded-lg shadow-md transition duration-300">Java</button>
              <button className="bg-blue-700 hover:bg-blue-300 text-white font-semibold px-2 m-1 rounded-lg shadow-md transition duration-300">JavaScript</button>
              <button className="bg-blue-700 hover:bg-blue-300 text-white font-semibold px-2 m-1 rounded-lg shadow-md transition duration-300">HTML/CSS</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-1 m-1">
              <p className="font-light">Framework</p>
              <button className="bg-blue-700 hover:bg-blue-300 text-white font-semibold px-2 m-1 rounded-lg shadow-md transition duration-300">React</button>
              <button className="bg-blue-700 hover:bg-blue-300 text-white font-semibold px-2 m-1 rounded-lg shadow-md transition duration-300">React Native + Expo Go</button>
              <button className="bg-blue-700 hover:bg-blue-300 text-white font-semibold px-2 m-1 rounded-lg shadow-md transition duration-300">JUnit</button>
              <button className="bg-blue-700 hover:bg-blue-300 text-white font-semibold px-2 m-1 rounded-lg shadow-md transition duration-300">Express.js</button>
              <button className="bg-blue-700 hover:bg-blue-300 text-white font-semibold px-2 m-1 rounded-lg shadow-md transition duration-300">Jest</button>
              <button className="bg-blue-700 hover:bg-blue-300 text-white font-semibold px-2 m-1 rounded-lg shadow-md transition duration-300">supertest</button>
            </div>
          </div>
          <section className="flex flex-col gap-6">
            {projects.map(({ title, links, tools }, index) => (
              <article key={index} className="flex flex-col gap-2">
                <div className="flex items-center gap-9">
                <h2 className="text-xl text-center font-medium">{title}</h2>
                  <ul className="flex justify-center items-center gap-9 list-none space-y-1">
                    {links.map(({ linkName, url }, i) => (
                      <li key={i}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center text-blue-600 hover:underline"
    
                        >
                          {linkName}
                        </a>
                      </li>
                    ))}
                  </ul>
                
                  </div>
                  <ul className="flex flex-wrap gap-2 text-gray-600 text-sm">
                    {tools.map((tool, i) => (
                      <li key={i} className="px-3 py-1 rounded-full">
                        {tool}
                      </li>
                    ))}
                  </ul>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default Projects;
