import Header from "@/components/header/header";
import Home from "@/components/home/home";
import About from "@/components/about/about";
import Skill from "@/components/skills/Skill";

export default function index() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </>
  );
}
