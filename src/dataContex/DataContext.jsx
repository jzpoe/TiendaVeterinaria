

import PropTypes from "prop-types";
import { useEffect } from "react";
import { createContext } from "react"
import { useState } from "react"
import axios from "axios";

export const dataContext = createContext();


const DataProvider = ({children}) => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
      axios("imagenes.json").then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }, []);

  return (
    <dataContext.Provider value={{data,cart, setCart}}>
      {children}
    </dataContext.Provider>
  )
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default DataProvider
