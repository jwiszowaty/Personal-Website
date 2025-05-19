import Menu from "../components/Menu";
import ProfilePicture from "../assets/profile.jpg";
import PlaneSpotting from "../assets/plane-spotting.jpeg";

export default function AboutMe() {
  return (
    <>
      <Menu />
      <main className="min-h-screen bg-blue-50 text-slate-900 px-6 py-12">
        <section className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex flex-col min-w-[292px] gap-5">
              <img
              src={ProfilePicture}
              alt="Jakub Wiszowaty"
              className="w-[292px] h-[292px] rounded-full object-cover shadow-xl border-4 border-white"
            />
            <a
      href="https://www.linkedin.com/in/jakubwiszowaty"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-[#0A66C2] text-white font-medium hover:bg-[#004182] transition duration-200 shadow-sm"
              >
                LinkedIn
              </a>
              <a
      href="https://github.com/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-800 bg-white rounded-md font-medium hover:bg-gray-100 transition"
    >
      GitHub
    </a>
            </div>
            <div className="text-lg space-y-5 leading-relaxed">
              <h1 className="text-xl font-bold">About Me</h1>
              <p className="italic font-semibold text-blue-700">
                Doing the right thing even when no one is watching.
              </p>
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
              <p>
                Outside of tech, I stay active by going to the gym and cycling,
                and I unwind through creative hobbies like sewing. I’m also a
                big fan of plane spotting — there’s something inspiring about
                watching takeoffs and landings.
              </p>
            </div>
          </div>

          {/* Background Feature Image */}
          <div className="mt-16 flex flex-col items-center">
            <img
              src={PlaneSpotting}
              alt="Plane Spotting"
              className="rounded-2xl shadow-2xl w-full max-w-3xl border-4 border-white"
            />
            <p className="mt-4 text-sm text-slate-900 italic">
              Schiphol Airport, Polderbaan (runway 18R)
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
