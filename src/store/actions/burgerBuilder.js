import * as actionType from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = name => {
  return {
    type: actionType.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionType.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredient = ingredients => {
  return {
    type: actionType.SET_INGREDIENT,
    ingredients: ingredients
  };
};

export const fetchIngredientFailed = () => {
  return {
    type: actionType.FETCH_INGREDIENT_FAILED
  };
};

export const initIngredient = () => {
  return dispatch => {
    axios
      .get("https://react-burger-builder-cf7f0.firebaseio.com/ingredients.json")
      .then(res => {
        dispatch(setIngredient(res.data));
      })
      .catch(error => {
        dispatch(fetchIngredientFailed());
      });
  };
};
