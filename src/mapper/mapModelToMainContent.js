import { GetMonthName } from "../utils/dataUtils"

const MapModelToMainContent = (model, product) => { // TODO: переделать на принятие массива симмируемых продуктов
  let result = []
  Object.keys(model).forEach(y => (
    Object.keys(model[y]).forEach(m => {
          result.push(
            Object.keys(model[y][m]).reduce((rec, cur) => {
              return { ...rec,
                year: y,
                month: m, 
                monthName: GetMonthName(m), 
                [cur]: (
                  product === 'all' 
                    ? (model[y][m][cur].product1 + model[y][m][cur].product2/* + model[y][m][cur].product3*/) 
                    : model[y][m][cur][product]
                ) / 1000
              }
            }, {})
          )
    })
  ))

  return result
}

export default MapModelToMainContent;