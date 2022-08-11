import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from "../features/images/imageSlice";
import searchReducer from "../features/searchGroup/searchGroupSlice";

export default configureStore({
    reducer: {
        images: imagesReducer,
        searchGroups: searchReducer
    }
})