import Projects from "./components/Projects";
import SkillsList from "./components/SkillsList";
import { getSkills } from "@/app/api/routes"; 
const skillData = getSkills();

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Osvaldo Lievano</h1>
      </header>

      <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
        <section className="mb-12">
          <h3 className="text-2xl font-semibold border-b-2 border-blue-600 inline-block pb-1 mb-4">
            About Me
          </h3>
          <p className="mb-4">
          Hi, I’m Osvaldo Lievano—feel free to call me Ozzy! I’m a Full-Stack Software Engineer with expertise in React, Django, TypeScript, Python, and AWS. This portfolio draws inspiration from one of my all-time favorite games, Old School RuneScape.
          </p>
          <p className="mb-4">
          Old School RuneScape ignited my passion for continuous growth. From setting ambitious goals to adapting skills to meet market demands, the game taught me valuable lessons about perseverance, creativity, and having fun while putting in the work—or as we say in gaming, "grinding."
          </p>
          <p className="mb-4">
          This site is built with Next.js—not exactly necessary for a portfolio, but a fantastic way to challenge myself and explore new technologies. My ultimate goal is to keep evolving my skills, which means this page will always be a work in progress.
          </p>
          <p className="mb-4">
          Outside of work, you’ll often find me baking, dancing salsa, or competing in beach and indoor volleyball tournaments. Life’s about balance, and I strive to bring the same energy and dedication to my hobbies as I do to my craft.
          </p>
        </section>

        <section className="mb-12 relative">
          <h3 className="text-2xl font-semibold border-b-2 border-blue-600 inline-block pb-1 mb-4">
            Projects
          </h3>
          <Projects />
        </section>

        <section className="relative mb-12">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md z-20 mb-8">
  <p className="text-lg font-semibold">Experience Info:</p>
  <p>1 Hour spent in any one of these skills equates to ~60,000 experience gained.</p>
</div>

<div>
  <h3 className="text-2xl font-semibold border-b-2 border-blue-600 inline-block pb-1 mb-4">
    Skills
  </h3>
            <SkillsList skills={skillData} />
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold border-b-2 border-blue-600 inline-block pb-1 mb-4">
            Contact Information
          </h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/in/osvaldo-lievano/"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/Ozlievano"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.x.com/Ozlievano"
                className="text-blue-500 hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:osvaldoalievano@gmail.com"
                className="text-blue-500 hover:underline"
              >
                Send Email
              </a>
            </li>
            <li>
              <a href="resume.pdf" className="text-blue-500 hover:underline" download>Download Resume</a>
              </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
