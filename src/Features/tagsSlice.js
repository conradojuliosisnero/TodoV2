import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: []
}

export const tagsFilterSlice = createSlice({
    name: 'filterTags',
    initialState,
    reducers: {
        addTag: (state, action) => {
            state = action.payload
        }
        deleteTag: (state, action) => {
            state = action.payload
        }
    }
})