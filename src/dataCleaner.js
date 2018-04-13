export const getIngredientNames = rawData => {
  console.log(rawData)
  return rawData.map(({name, id}) => ({name, id}))
}
