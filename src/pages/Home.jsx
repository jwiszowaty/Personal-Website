import Menu from "../components/Menu.jsx";
import ProfilePicture from "../assets/profile.jpg";
import { certificates } from "../data/certificates.js";
function Home() {
  return (
    <>
      <Menu />
      <main className="min-h-screen bg-blue-50 text-slate-900 px-6 py-12 space-y-15">
        <section className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <img
              src={ProfilePicture}
              alt="Jakub Wiszowaty"
              className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white"
            />
            <div className="text-lg space-y-5 leading-relaxed">
              <p>
                Hi, I’m <span className="font-semibold">Jakub Wiszowaty</span> —
                a junior software engineer with a background in chemistry and a
                growing passion for solving problems through code. I’ve
                completed software engineering training with Northcoders and
                Ten10, where I built full-stack applications using JavaScript,
                Java, SQL, React, and followed Agile and TDD practices.
              </p>
              <p>
                Right now, I’m focused on leveling up my skills through personal
                projects and daily coding challenges like{" "}
                <span className="italic">Advent of Code</span>. I enjoy learning
                new technologies and collaborating on clean, functional code.
              </p>
            </div>

          </div>
        </section>
        <section className="max-w-5xl mx-auto">
          <h1 className="text-xl my-5">Cerificates</h1>
        <ul className="flex flex-col flex-wrap gap-2 text-gray-600 text-sm">
            {
              certificates.map(({title, description, url}, index) => {
              return (<li key={index} className="px-3 py-1">
                <a target="_blank" class="text-blue-700 font-bold hover:text-blue-900" href={url}><p>{title}</p></a>
                <p>{description}</p>
              </li>)
            })
            }
                </ul>
        </section>
      </main>
    </>
  );
}

export default Home;
