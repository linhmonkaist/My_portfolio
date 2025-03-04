import Header from "@/components/header/header";
import Home from "@/components/home/home";
import About from "@/components/about/about";
import Skill from "@/components/skills/Skill";
import Services from "@/components/services/Services";
import Qualification from "@/components/qualifacation/Qualification";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";

export default function index() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </>
  );
}
