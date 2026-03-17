import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChipBackground from "./components/ChipBackground";

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Certificates />
    <Achievements />
    <Education />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        <div className="chip-bg-wrap">
          <ChipBackground />
        </div>
        <div style={{ position: "relative", zIndex: 1 }} className="text-slate-100">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
