import React from "react";

import { useState } from "react";

import { fetchAsyncMeals } from "../recipes/recipesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Favourites } from "../favourites/Favourites";
import {setCalories, getCalories} from '../recipes/recipesSlice'
import './header.css'

export const Header = () => {
    
    const dispatch = useDispatch();
    const caloriesValue = useSelector(getCalories)
    
    const getMealData = () => {
        dispatch(fetchAsyncMeals(caloriesValue))        
    }

    function handleChange(e) {        
        dispatch(setCalories(Number(e.target.value)))
      }
      
    return(
        <div className="title" >

            <h3>Your daily meal plan </h3>
            <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />  
            <button onClick={getMealData}>Get Daily Meal Plan</button>
            
            {/* <Favourites /> */}
                
           
        </div>
    )
}
