import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import NavbarComponent from "./Navbar";
function App() {

  return (

    <>




      <NavbarComponent />
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