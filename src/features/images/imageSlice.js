import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientId from '../../api/config';

export const getImages = createAsyncThunk(
    'images/getImages',
    async (param, { rejectWithValue }) => {
        return fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${clientId}&tags=${param}&per_page=24&format=json&nojsoncallback=1`)
        .then(res => res.json()).then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err);
            return rejectWithValue('No user found')
        })
    }
);

const imageSlice = createSlice({
    name: 'images',
    initialState: {
        list: [],
        status: null
    },
    extraReducers: {
        [getImages.pending]: ((state) => {
            state.status = 'pending'
        }),
    [getImages.fulfilled]: ((state, {payload}) => {
        state.list = payload.photos.photo
        state.status = 'success'
    }),
    [getImages.rejected]: ((state) => {
        console.log('rejected');
        state.status = 'rejected';
    })
}
})

export default imageSlice.reducer;