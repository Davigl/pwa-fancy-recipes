function threatMeal(meal) {
  let {
    strMeal, strInstructions, strMealThumb, strArea, strCategory
  } = meal;
  let mealOutput = {
    title: strMeal,
    instructions: strInstructions,
    ingredients: [],
    thumbnail: strMealThumb,
    country: strArea,
    category: strCategory
  };
  let count = 1;
  let ingredientKey = `strIngredient${count}`;
  let measureKey = `strMeasure${count}`;

  while (meal[ingredientKey] && meal[measureKey]) {
    const ingredientName = meal[ingredientKey];
    const [quantity, measure] = meal[measureKey].split(' ');

    mealOutput.ingredients.push({ ingredientName, measure, quantity });

    count += 1;

    ingredientKey = `strIngredient${count}`;
    measureKey = `strMeasure${count}`;
  }

  return mealOutput;
}

export { threatMeal };
