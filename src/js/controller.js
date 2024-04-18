import * as model from './model.js';
import recipeView from './views/recipeView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function() {
  try {
    const id = '5ed6604591c37cdc054bc90b';

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch(err) {
    console.log(err);
  }
}

// window.addEventListener('hashchange', controlRecipes)
// window.addEventListener('load', controlRecipes)
const init = function() {
  recipeView.addHandlerRender(controlRecipes);
}
init();