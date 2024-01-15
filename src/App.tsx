import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
// import English from "./pages/English";
import Portfolio from "./pages/Portfolio";
import { useState } from "react";

function App() {

  const [language, setLanguage] = useState("es")

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home language={language} changeLanguage={changeLanguage} />} />
        <Route path="/portfolio" element={<Portfolio language={language} changeLanguage={changeLanguage}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{/* <Route path="/en" element={<English />} /> */}
