import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <div>
      <h1>Hello Router</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/not-found">Not Found</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/not-found" element={<NotFound />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;