import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Acumulado from "./components/acumulado/Acumulado";
import Buscar from "./components/buscar/Buscar";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import DataProvider from "./dataContex/DataContext";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Acumulado" element={<Acumulado />} />
          <Route path="/" element={<Main />} />
          <Route path="/Buscar" element={<Buscar />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
