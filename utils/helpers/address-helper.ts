export const addressHelper = (params) => {

  let address: string
  const def: string = ""
  const isValidValue = (opt: string = null) => {
    return opt ? opt : def
  }
  const city = isValidValue(params?.city) ? isValidValue(params.city) + "," : def
  const street = isValidValue(params?.street)
  const building = isValidValue(params?.building)
  address = params ? `${city} ${street} ${building}` : "тут, должен быть аддресс"
  return address
}

// export const getAddr = (params) => {
//   let address = ""
//   Object.keys(params).forEach(param => {
//     if (!!params[param]) {
//       address += params[param]
//     }
//   })
//   return address
// }
