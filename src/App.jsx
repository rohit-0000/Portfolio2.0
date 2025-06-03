import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/home";
import NavBar from "./Components/navbar";
import Skill from "./Components/skill";
import Project from "./Components/project";
import Contact from "./Components/contact";
import About from "./Components/about";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
