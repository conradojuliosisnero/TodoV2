import { configureStore } from "@reduxjs/toolkit";
import filterTagsReducer from '../Features/tagsSlice'

export const store = configureStore({
  reducer: {
    filterTags: filterTagsReducer,
  },
});