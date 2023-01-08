import React, {useState, useEffect}from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './mealCard.css'
import { addToFavourites } from "../favourites/favouritesSlice";
import { getAllMeals } from "../recipes/recipesSlice";
import { getAllFavourites } from "../favourites/favouritesSlice";
import { apiKey } from "../../api/spoonacular";
import { addImage } from "../images/imagesSlice";



export const MealCard = ({meal}) => {

  const meals = useSelector(getAllMeals) 
  const favourites = useSelector(getAllFavourites)   

  const [imageUrl, setImageUrl] = useState("");
  
  const [mealData, setMealData] = useState("")
  const dispatch = useDispatch()

  const onAddFavourite = () => {   
        
    const found = favourites.find(elem => elem.id === meal.id)
   
    if (found){
      return
    }
    else{
        dispatch(addToFavourites(meal));  
        dispatch(addImage({id: meal.id, image: imageUrl})) 
      }
    }

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${apiKey}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
        setMealData(data) //add image URL to the state
        console.log(data)
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [meal.id]);

  const gotToMeal = (meal) => {
    console.log(meal.sourceUrl)
  }
    return(
        
            <div className="mealSingle">
                <h4>{meal.title}</h4>                
                <img src={imageUrl} alt="recipe" />  
                <div className="mealButtons">
                    <form action={meal.sourceUrl} target="_blank" method="post">
                     
                      <button type="submit">Go to recipe</button>
                    </form>
                    
                    
                    <button className="favButton" onClick={onAddFavourite}>&#10084;</button>
                </div>              
                
                
            </div>
            
            
        
    )
}