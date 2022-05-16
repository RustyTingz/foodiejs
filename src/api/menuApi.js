import { ingredients } from "./__mocks__/ingredients.js";
import { menu } from "./__mocks__/menu.js";
import { sizes } from "./__mocks__/sizes.js";

const FAILURE_RATE = 0;

const getApiData = (data, errorMessage) => {
  const delay = Math.floor(Math.random() * 5000);
  const error = Math.random() < FAILURE_RATE;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      error ? reject(new Error(errorMessage)) : resolve(data);
    }, delay);
  });
};

class MenuApi {
  getMenu = () => {
    return getApiData(
      menu,
      "MenuAPI:: getMenu there was an error fetching the menu"
    );
  };

  getIngredients = () => {
    return getApiData(
      ingredients,
      "MenuAPI:: getIngredients there was an error fetching ingredients"
    );
  };

  getSizes = () => {
    return getApiData(
      sizes,
      "MenuAPI:: getSizes there was an error fetching sizes"
    );
  };
}

export const menuApi = new MenuApi();
