import "../src/components/styles/App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
