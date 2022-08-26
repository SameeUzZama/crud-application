import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbars from "./Components/Layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import AddUser from "./Components/Users/AddUser";
import EditUser from "./Components/Users/EditUser";
import ViewUser from "./Components/Users/ViewUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Users/Add" element={<AddUser />} />
          <Route path="/Users/Edit/:id" element={<EditUser />} />
          <Route path="/Users/View/:id" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
