import React from "react";
import style from './header.module.css'
import {ActiveProductIdContext} from '../../../context'
import { ProductNames } from "../../../constants/dataConstants";

const Header = ( {products} ) => {

  const { activeProductId, setActiveProductId } = React.useContext(ActiveProductIdContext);

  return (
    <header className={style.header}> 
      <label className={style.label}>
        Фильтр по типу продукции
      </label>
      <select className={style.select} name="selectedActiveProduct" value={activeProductId} onChange={(e) => setActiveProductId(e.target.value)}>
        {
          products.map(p => (<option key={p} value={p}>{ProductNames[p]}</option>))
        }
      </select>
    </header>
  )
}

export default Header;