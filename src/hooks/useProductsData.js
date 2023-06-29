import React from "react";
import MapDtoTomodel from '../mapper/productMapper'
import { BackendServer } from "../constants/pathsConstants";

const useProductsData = () => {
  const [productsData, setProductsData] = React.useState({});
   
  React.useEffect(() => {
      fetch(BackendServer, {
      })
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        setProductsData(MapDtoTomodel(data))
      })
      .catch(console.error)

  }, []);
  return [productsData] 
}

export default useProductsData
