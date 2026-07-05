import { Hero } from "@/components/sections/Hero";
import { Life } from "@/components/sections/Life";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { ResumeTeaser } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Life />
      <About />
      <Projects />
      <ResumeTeaser />
      <Contact />
    </>
  );
}
