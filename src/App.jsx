import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
function App() {

  return (

    <>




      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />}/>




      </Routes>

    </>
  )
}
export default App;