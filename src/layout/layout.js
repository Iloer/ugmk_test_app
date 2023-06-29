import React from "react";
import {
  BrowserRouter, Route, Routes, Redirect,
} from 'react-router-dom';
import style from './layout.module.css'
import Main from "./main/main";
import Details from "./details/details";
import useProductsData from '../hooks/useProductsData'
import { ActiveProductIdContextProvider } from '../context'

const Layout = () => {
  const [data] = useProductsData();
  return (
      <div className={style.layout}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element= {
              <ActiveProductIdContextProvider >      
                <Main data={data}/>
              </ActiveProductIdContextProvider>
            }
            />
            <Route path="/details/:f/:m"
              element={
                <Details data={data} />
              }
            />
          </Routes>          
        </BrowserRouter>
      </div>
  )
}

export default Layout;