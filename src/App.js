import "../src/components/styles/App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route  path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
