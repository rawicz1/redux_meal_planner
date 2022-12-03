import React from "react";
import { useSelector } from "react-redux";
import { getAllFavourites, removeFromFavourites } from "./favouritesSlice";
import { getImages } from "../images/imagesSlice";
import { useDispatch } from "react-redux";

export const Favourites = () => {

    const images = useSelector(getImages)
    const favs = useSelector(getAllFavourites)
    const dispatch = useDispatch()

    const addImage = (id) => {
        const foundImage = images.find(image => image.id === id)       
        return foundImage.image;
    }
    
    const onRemoveRecipe = (id) => {        
    dispatch(removeFromFavourites(id))
    }
    
    return(
        <section className="favSection"> {favs.length >0 && <div className="favs" >
                <h3>Your favs: </h3>
            <div className="favourites">
                

                {favs.map((fav) => {
                    return (
                        <div key={fav.id}>      
                            {fav.title}
                            <p></p>
                            
                            <img src={addImage(fav.id)}/>
                            <button onClick={() => onRemoveRecipe(fav.id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
            
            
                
                
           
        </div>}</section>
       
        
    )
}