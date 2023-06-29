import React from 'react';
import style from './main.module.css'
import Header from './header/header';
import Content from './content/content';
import { ActiveProductIdContext } from '../../context';
import MapModelToMainContent from '../../mapper/mapModelToMainContent';
import { ActualProducts } from '../../constants/dataConstants';

const Main = ({data}) => {
  const productsAll = "all"

  const { activeProductId } = React.useContext(ActiveProductIdContext);
  
  const contentData = MapModelToMainContent(data, 
    activeProductId === productsAll 
      ? ActualProducts.map((p) => p.name) 
      : [activeProductId]
    );
  
  const getProductsList = () => {
    let res = [...ActualProducts]
    res.unshift({ name: productsAll, label: "Все продукты"})
    return res
  }

  return (
    <div className={style.main}> 
        <Header products={getProductsList()}/>
        <Content data={contentData} />
    </div>
  )
}

export default Main;