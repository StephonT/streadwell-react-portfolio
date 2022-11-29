import About from "./components/About/index";
import Home from "./components/Home/index";
import Navbar from "./components/Navbar/index";
import Skills from "./components/Skills/index";
import Work from "./components/Work/index";
import Contact from "./components/Contact/index";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;