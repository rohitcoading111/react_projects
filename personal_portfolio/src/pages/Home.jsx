import Hero from "../components/Hero";
import { Link } from "react-router-dom"; 
const Home = () => {
  return (
    <>
      <Hero />

      <section id="about" className="min-h-screen bg-white/5 px-6 py-32">
        <h2 className="text-5xl font-bold">About</h2>
      </section>

      <section id="skills" className="min-h-screen px-6 py-32">
        <h2 className="text-5xl font-bold">Skills</h2>
      </section>

      <section id="projects" className="min-h-screen bg-white/5 px-6 py-32">
        <h2 className="text-5xl font-bold">Projects</h2>
      </section>

      <section id="contact" className="min-h-screen px-6 py-32">
        <h2 className="text-5xl font-bold">Contact</h2>
      </section>
    </>
  );
};

export default Home;