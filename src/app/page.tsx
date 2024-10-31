import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Component from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Component />
      <Projects />
      <Education />
      <Skills />
      {/* <Contact /> */}
    </main>
  );
}
