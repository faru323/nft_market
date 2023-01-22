
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Marketplace from "./pages/Marketplace";
import Rankings from "./pages/Rankings";
function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/marketplace" element={<Marketplace/>} />
 <Route path="/rankings" element={<Rankings/>} />
  
  </Routes>
<Footer/>
  </BrowserRouter>
  );
}

export default App;
