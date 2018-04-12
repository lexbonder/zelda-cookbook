export const getIngredients = async () => {
  try {
    const initialFetch = await fetch('http://localhost:3000/api/v1/ingredients');
    // const initialFetch = await fetch('https://zelda-cookbook-backend.herokuapp.com/api/v1/ingredients');
    return await initialFetch.json();
  } catch(error) {
    throw Error('Failed to get ingredients from database')
  }
}

export const getRecipes = async () => {
  try {
    const initialFetch = await fetch('http://localhost:3000/api/v1/recipes');
    // const initialFetch = await fetch('https://zelda-cookbook-backend.herokuapp.com/api/v1/recipes');
    return await initialFetch.json();
  } catch(error) {
    throw Error('Failed to get recipes from database')
  }
}