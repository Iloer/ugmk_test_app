import { ActualYear, ProductNames } from "../constants/dataConstants";

const mapModelToDetailContent = (model, factory, month) => {

  let res = [
    { name: ProductNames['product1'], value: model?.[ActualYear]?.[month]?.[factory]?.['product1'] },
    { name: ProductNames['product2'], value: model?.[ActualYear]?.[month]?.[factory]?.['product2'] }
  ]
  
  return res
}

export default mapModelToDetailContent;