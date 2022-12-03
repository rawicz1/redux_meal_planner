import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    favourites: [],
}

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourites: (state, action) => {            
            state.favourites.push(action.payload)           
        },
        
        removeFromFavourites: (state, action) => {
            return {
                ...state,
                favourites: state.favourites.filter((fav) => fav.id !== action.payload)
              }
            
        }
        
    },
   
})

export const {addToFavourites, removeFromFavourites } = favouritesSlice.actions

export const getAllFavourites = (state) => state.favourites.favourites

export default favouritesSlice.reducer

