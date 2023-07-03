import { configureStore, createSlice } from "@reduxjs/toolkit";

const favoriteMovies = createSlice({
  name: "favoriteMovies",
  initialState: [],
  reducers: {
    // 즐겨찾기 영화 추가
    addFavoriteMovie(state, action) {
      const localArr = JSON.parse(localStorage.getItem("user"));
      const existingIndex = localArr.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex === -1) {
        localArr.push(action.payload);
        localStorage.setItem("user", JSON.stringify(localArr));
        state.push(action.payload);
      }
    },

    // 즐겨찾기 영화 삭제
    deleteFavoriteMovie(state, action) {
      const localArr = JSON.parse(localStorage.getItem("user"));
      const existingIndex = localArr.findIndex(
        (item) => item.id === action.payload.id
      );

      localArr.splice(existingIndex, 1);
      localStorage.setItem("user", JSON.stringify(localArr));
      state.splice(existingIndex, 1);
    },

    // localStorage 영화 가져와서 세팅
    settingFavoriteMovie(state, action) {
      state.push(...action.payload);
    },
  },
});

export default configureStore({
  reducer: {
    favoriteMovies: favoriteMovies.reducer,
  },
});

export const { addFavoriteMovie, deleteFavoriteMovie, settingFavoriteMovie } =
  favoriteMovies.actions;
