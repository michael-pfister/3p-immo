import ProjectWidget from "../components/ProjectWidget.tsx";
import { Project, projects } from "../utils/data.ts";

function Hero() {
  return (
    <section class="flex flex-col md:flex-row justify-evenly items-center my-16 md:my-32 px-8 lg:px-32 gap-16">
      <h1 class="text-5xl lg:text-7xl text-center">
        Der Goldene Standard für Immobilien.
      </h1>
      <img class="" src="/City buildings_Isometric.svg" alt="Gebäude" />
    </section>
  );
}

function Projects({ projects }: { projects: Project[] }) {
  return (
    <section
      class="p-4 my-16 flex justify-center flex-wrap gap-4"
      id="projects"
    >
      {projects.map((project) => <ProjectWidget {...project} />)}
    </section>
  );
}

function AboutUs() {
  return (
    <section class="my-16 md:my-32 p-4 flex justify-center gap-8" id="aboutUs">
      <img
        class="hidden lg:block"
        src="/Team meeting_Flatline.svg"
        alt="Team"
      />
      <div class="max-w-[500px] flex flex-col gap-8">
        <h2 class="text-brown text-5xl">Über uns</h2>
        <p>
          Wir befassen uns mit der Immobilienprojektentwicklung im Raum Wien
          sowie mit der Investition in solche Immobilienprojekte.
        </p>
        <p>
          Der Kern und die höchste Priorität unserer Arbeit ist das Wohlbefinden
          unserer Kunden, welches wir durch individuelle Planung nach
          Kundenwunsch, beste Qualität und Liebe zum Detail sicherstellen.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      class="my-16 flex flex-wrap gap-8 md:justify-evenly items-center p-4"
      id="contact"
    >
      <h2 class="text-brown text-5xl">Kontakt</h2>
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl">3P Immobilienentwicklung GmbH</h2>
        <a
          href="https://www.google.com/maps/search/Johann-Strauß-Promenade%2080,%202000%20Stockerau"
          target="_blank"
          rel="noopener"
        >
          📍 Johann-Strauß-Promenade 80, <br />2000 Stockerau
        </a>
        <a href="tel:+4369919575429">☎️ +43 699 195 754 29</a>
        <a href="mailto:office@3p-immo.at">📧 office@3p-immo.at</a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <AboutUs />
      <Contact />
    </>
  );
}
