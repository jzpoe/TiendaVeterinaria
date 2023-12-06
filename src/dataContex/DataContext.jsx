

import PropTypes from "prop-types";
import { useEffect } from "react";
import { createContext } from "react"
import { useState } from "react"
import axios from "axios";

export const dataContext = createContext();


const DataProvider = ({children}) => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    const [modal, setModal] = useState([])



    useEffect(() => {
      axios("imagenes.json").then((res) => {
        setData(res.data);
        console.log(res.data);

        axios("contenidoCards.json").then((res) => {
          setModal(res.data);
          console.log(res.data);
        })

      });
    }, []);

  

  return (
    <dataContext.Provider value={{modal,data,cart, setCart}}>
      {children}
    </dataContext.Provider>
  )
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default DataProvider
