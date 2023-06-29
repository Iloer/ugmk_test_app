import { ActualProducts, ActualYear } from "../constants/dataConstants";

const mapModelToDetailContent = (model, factory, month) =>  
  ActualProducts.map(prod => ({ name: prod.name, value: model?.[ActualYear]?.[month]?.[factory]?.[prod.name] }))

export default mapModelToDetailContent;