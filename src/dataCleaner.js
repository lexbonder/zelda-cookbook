export const getIngredientNames = rawData => {
  return rawData.map(({name, id}) => ({name, id}))
}
