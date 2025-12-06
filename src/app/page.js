import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "@/components/Skills";

export const metadata = {
  title: "Your Name — Portfolio",
  description: "Full-stack dev | UI/UX | Projects and contact",
};

export default function Home() {
  return (
   <div className="container px-6 pr-0 w-full">
  <main className="space-y-20 py-12">
    <Hero />
    <About />
    <Skills/>
    <Projects />
    <Contact />
  </main>
  <Footer />
</div>
  );
}
