export const getIngredients = async () => {
  try {
    const initialFetch = await fetch('http://localhost:3000/api/v1/ingredients');
    return await initialFetch.json();
  } catch(error) {
    throw Error('Failed to get ingredients from database')
  }
}