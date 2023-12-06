import { BrowserRouter, Route, Routes } from "react-router-dom"
import DataProvider from "../../dataContex/DataContext"
import Buscar from "../buscar/Buscar"
import Home from "../home/Home"
import Navbar from "../navbar/Navbar"
import Acumulado from "../acumulado/Acumulado"
import Main from "../main/Main"

const Banner = () => {
  return (
<>
<Banner/>
    <Buscar />
    <Home/>
</>
    
    
  )
}

export default Banner
