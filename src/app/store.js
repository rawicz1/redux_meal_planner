import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipes/recipesSlice";
import favouritesReducer from '../features/favourites/favouritesSlice'
import imagesReducer from '../features/images/imagesSlice'

export const store = configureStore({
  reducer: {
    meals: recipeReducer,
    favourites: favouritesReducer,
    images: imagesReducer,
  },
});