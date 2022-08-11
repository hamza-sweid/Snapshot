import { createSlice } from "@reduxjs/toolkit";

const searchReducer = createSlice({
    name: 'searchGroups',
    initialState: {
        groups: [{ label: 'People', link: 'people' },
        { label: 'Football', link: 'football' },
        { label: 'Food', link: 'food' },
        { label: 'Beach', link: 'beach' }]
    },
    reducers: {
        addGroup: (state, action) => {
            const isExist = state.groups.find(item => item.link === action.payload.link);
            if (isExist) return;
            else state.groups.push(action.payload)
          },
        deleteGroup: (state, action) => {
            state.groups.splice(action.payload, 1);
        }
    }
})

export const { addGroup, deleteGroup } = searchReducer.actions

export default searchReducer.reducer;