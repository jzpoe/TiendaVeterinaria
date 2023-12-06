

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Acumulado from "./components/acumulado/Acumulado";
import Navbar from "./components/navbar/Navbar";
import DataProvider from "./dataContex/DataContext";
import Home from "./components/home/Home";
import SwiperMain from "./components/main/swiper/SwiperMain";

function App() {
  return (
    
    <DataProvider>
      
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<SwiperMain />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Acumulado" element={<Acumulado />} />
        </Routes>
        
      </BrowserRouter>
      
   
    </DataProvider>
    
  );
}

export default App;



