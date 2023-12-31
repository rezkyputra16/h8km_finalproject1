// redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    indonesia: {},
    programming: {},
    covid19: {},
    saved: [],
    searchResult: {},
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    saveThisNews: (state, action) => {
      const filterSavedNews = state.data.saved.find(
        (item) => item.title === action.payload.title
      );
      if (filterSavedNews) {
        const filtered = state.data.saved.filter(
          (item) => item.title !== filterSavedNews.title
        );
        state.data.saved = filtered;
      } else {
        state.data.saved.push(action.payload);
      }
    },
    deleteThisNews: (state, action) => {
      state.data.saved.splice(
        state.data.saved.findIndex((item) => item.title === action.payload),
        1
      );
    },
    addNewsIndonesia: (state, action) => {
      state.data.indonesia = action.payload;
    },
    addNewsProgramming: (state, action) => {
      state.data.programming = action.payload;
    },
    addNewsCovid19: (state, action) => {
      state.data.covid19 = action.payload;
    },
    addNewsByKeyword: (state, action) => {
      state.data.searchResult = action.payload;
    },
  },
});

export const {
  saveThisNews,
  addNewsIndonesia,
  addNewsProgramming,
  addNewsCovid19,
  addNewsByKeyword,
  deleteThisNews,
} = newsSlice.actions;

export default newsSlice.reducer;
