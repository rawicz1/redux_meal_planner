import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    images: []
}

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        addImage: (state, action) => {            
            state.images.push(action.payload)           
        },
        
    },
   
})

export const {addImage } = imagesSlice.actions

export const getImages = (state) => state.images.images

export default imagesSlice.reducer