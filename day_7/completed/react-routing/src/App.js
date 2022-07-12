import "./App.css";
import Nav from "./components/nav";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactDetails from "./pages/contactDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/:contactId" element={<ContactDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
