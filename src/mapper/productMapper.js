const MapDtoTomodel = (dto) => {
  let tmp = dto.reduce((r, cur) => {
    const [day, month, year] = cur.date ? cur.date.split('/') : ['0', 'nan', 'nan'];
    return { ...r,
      [year] : { ...r[year],
        [month]: { ...r?.[year]?.[month],
          [cur.factory_id]: {
            product1: r?.[year]?.[month]?.[cur.factory_id] ? r[year][month][cur.factory_id].product1 + cur.product1 : 0,
            product2: r?.[year]?.[month]?.[cur.factory_id] ? r[year][month][cur.factory_id].product2 + cur.product2 : 0,
            product3: r?.[year]?.[month]?.[cur.factory_id] ? r[year][month][cur.factory_id].product3 + cur.product3 : 0,
          }
        }
      }
    }
  }, {});

  return tmp
}

export default MapDtoTomodel;