import { GetMonthName } from "../utils/dataUtils"

const MapModelToMainContent = (model, products) => {
  let result = []
  Object.keys(model).forEach(y => (
    Object.keys(model[y]).forEach(m => {
          result.push(
            Object.keys(model[y][m]).reduce((rec, factory) => {
              return { ...rec,
                year: y,
                month: m, 
                monthName: GetMonthName(m), 
                [factory]: products.reduce( (sum, prod) => sum += model[y][m][factory][prod], 0 ) / 1000
              }
            }, {})
          )
    })
  ))

  return result.sort((a, b) => {
    const monthA = parseInt(a.month, 10)
    const monthB = parseInt(b.month, 10)
    if (monthA < monthB) {
      return -1;
    }
    if (monthA > monthB) {
      return 1;
    }
    return 0;
  });
}

export default MapModelToMainContent;