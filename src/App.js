import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./Pages/Home";
import About from "./Pages/About";
import News from "./Pages/News";
import Charts from "./Pages/chart";
import List from "./Pages/List";


const App  = () => {
  return (
    <div className="main-container">
    <div className="dark:bg-black">
    <Path/>
    <Footer/>
    </div>
    </div>

  );
}

function Path() {

  return (
    <BrowserRouter>
     <NavBar />
     <Routes>
     <Route>
      <Route path="/" element={<Home />} />   
      <Route path="/about" element={<About />} />  
      <Route path="/News" element={<News />} />  
      <Route path="/charts" element={<Charts />} />  
      <Route path="/list" element={<List/>} />  

    </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App;
