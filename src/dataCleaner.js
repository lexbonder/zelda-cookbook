export const getIngredientNames = rawData => {
  return rawData.map(({name, id}) => ({name, id}))
}

// export const getRecipeData = rawData => {
//   return rawData.map(({name, id}) => ({name, id}))
// }
