import React from 'react';
import style from './main.module.css'
import Header from './header/header';
import Content from './content/content';
import { ActiveProductIdContext } from '../../context';
import MapModelToMainContent from '../../mapper/mapModelToMainContent';

const products = [
  "all",
  "product1",
  "product2",
  //"product3",
]

const Main = ({data}) => {
  const { activeProductId } = React.useContext(ActiveProductIdContext);
  const contentData = MapModelToMainContent(data, activeProductId);
  
  return (
    <div className={style.main}> 
        <Header products={products} />
        <Content data={contentData} />
    </div>
  )
}

export default Main;