import Projects from "./components/Projects";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Osvaldo Lievano</h1>
      </header>

      <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 inline-block pb-1 mb-4">
            About Me
          </h2>
          <p className="mb-4">
            Hi, I&rsquo;m Osvaldo Lievano—feel free to call me Ozzy! I&rsquo;m a
            Full-Stack Software Engineer with expertise in React, Django,
            TypeScript, Python, and AWS.
          </p>
          <p className="mb-4">
            When I&rsquo;m not working, you&rsquo;ll find me constantly learning
            new things—whether it's salsa dancing, baking, Warhammer, reading,
            or gaming. From setting ambitious goals to adapting my skills to
            meet market demands, my hobbies have taught me valuable lessons in
            perseverance, creativity, and the importance of enjoying the
            process. Or, as we say in gaming, &quot;grinding.&quot;
          </p>
          <p className="mb-4">
            This site is built with Next.js—not exactly necessary for a
            portfolio, but a fantastic way to challenge myself and explore new
            technologies. My ultimate goal is to keep evolving my skills, which
            means this page will always be a work in progress.
          </p>
          <h3 className="text-2xl font-semibold border-b-2 border-blue-600 inline-block pb-1 mb-4">
            Contact Information
          </h3>
          <ul className="flex flex-wrap justify-center sm:justify-start gap-4 p-4">
            <li>
              <a
                href="https://www.linkedin.com/in/osvaldo-lievano/"
                className="text-blue-800 hover:underline flex items-center gap-2"
                aria-label="LinkedIn Profile"
              >
                <i
                  className="fa-brands fa-linkedin text-lg sm:text-base"
                  aria-hidden="true"
                ></i>
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/Ozlievano"
                className="text-blue-800 hover:underline flex items-center gap-2"
                aria-label="Github Profile"
              >
                <i
                  className="fa-brands fa-github text-lg sm:text-base"
                  aria-hidden="true"
                ></i>
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.x.com/Ozlievano"
                className="text-blue-800 hover:underline flex items-center gap-2"
                aria-label="Twitter Profile"
              >
                <i
                  className="fa-brands fa-twitter text-lg sm:text-base"
                  aria-hidden="true"
                ></i>
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:osvaldoalievano@gmail.com"
                className="text-blue-800 hover:underline flex items-center gap-2"
              >
                <i
                  className="fa-solid fa-envelope text-lg sm:text-base"
                  aria-hidden="true"
                ></i>
                Email Me
              </a>
            </li>
            <li>
              <a
                href="resume.pdf"
                className="text-blue-800 hover:underline flex items-center gap-2"
                download
              >
                <i
                  className="fa-solid fa-download text-lg sm:text-base"
                  aria-hidden="true"
                ></i>
                Resume
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-12 relative">
          <h3 className="text-2xl font-semibold border-b-2 border-blue-600 inline-block pb-1 mb-4">
            Projects
          </h3>
          <Projects />
        </section>

        <section className="relative mb-12">
          <div>
            <h3 className="text-2xl font-semibold border-b-2 border-blue-600 inline-block pb-1 mb-4">
              Skills
            </h3>
            <div className="w-full flex justify-center">
              <Image
                src="/skills.png"
                width={500}
                height={500}
                alt="techStack"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
