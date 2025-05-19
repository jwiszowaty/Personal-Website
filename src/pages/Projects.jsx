import {projects} from "../data/projects";
import Menu from "../components/Menu";

function Projects() {
  return (
    <>
      <Menu />
      <main className="mx-auto p-8 text-gray-900 bg-blue-50 min-h-screen">
        <h1 className="text-3xl font-semibold mb-10 text-center tracking-wide">
          Projects
        </h1>
        <section className="flex flex-col gap-6 max-w-5xl mx-auto">
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
                    <li key={i} className="bg-gray-100 px-3 py-1 rounded-full">
                      {tool}
                    </li>
                  ))}
                </ul>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default Projects;
