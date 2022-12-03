import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiLink } from '../../api/spoonacular';
import { apiKey } from '../../api/spoonacular';


export const fetchAsyncMeals = createAsyncThunk(
    "meals/fetchAsyncMeals",
    async (props) => {
      try {        
        const value  = Number(props)
        
        const response = await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&timeFrame=day&targetCalories=${value}`);
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        let data = await response.json();
      
        return data;}
      catch (err) {
        console.log(err);          
    }

  });

const initialState = {
 calories: 2000,
 
}
  


const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    
    reducers: {
      setCalories(state, action){
        
        state.calories = action.payload;},
      
      },
    extraReducers: {
        [fetchAsyncMeals.pending]: () => {
          console.log("Pending");
        },
        [fetchAsyncMeals.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, meals: payload };
        },
        [fetchAsyncMeals.rejected]: () => {
          console.log("Rejected!");
        },
    }
})
export const {setCalories} = mealsSlice.actions

export const getAllMeals = (state) => state.meals.meals
export const getNutrients = (state) => state.meals.nutrients
export const getCalories = (state) => state.meals.calories


export default mealsSlice.reducer

