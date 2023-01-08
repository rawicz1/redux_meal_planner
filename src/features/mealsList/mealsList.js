import React from "react";
import { MealCard } from "./MealCard";
import { useDispatch, useSelector } from "react-redux";
import './mealsList.css'
import { getAllMeals, getNutrients } from "../recipes/recipesSlice";
import { Favourites } from "../favourites/Favourites";

export const MealsList = () => {

    const meals = useSelector(getAllMeals)
    // const nutrients = useSelector(getNutrients)
      
    return(
        <> {meals && <section className="nutrients">
                   <div className="favouritesBox"><Favourites /></div> 
                    <div className="meals">
                        {meals.meals.map((meal) => {                                                
                            return <MealCard key={meal.id} meal={meal}/>                                                
                        }) }
                    </div>             
            </section>}
            </>
            
        
    )
}