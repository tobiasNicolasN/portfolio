import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import English from "./pages/English";
import Español from "./pages/Español";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<English />} />
        <Route path="/es" element={<Español />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
