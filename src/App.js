import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About"
import { Contact } from "./pages/Contact";
import Project from "./pages/Project";
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />} />,
    <Route path="/about" element={<About />} />,
    <Route path="/projects" element={<Project />} />,
    <Route path="/contact" element={<Contact />} />,
  ])
);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
