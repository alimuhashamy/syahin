import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
</style>

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="container">
        <Routes>
          <Route path= "/" element={<Home/>} />
        </Routes>
        <Routes>
          <Route path= "/menu" element={<Menu/>} />
        </Routes>
        <Routes>
          <Route path= "/about" element={<About/>} />
        </Routes>
        <Routes>
          <Route path= "/contact" element={<Contact/>} />
        </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
