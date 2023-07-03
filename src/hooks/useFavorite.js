import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFavoriteMovie, deleteFavoriteMovie } from "store/store";
import { useSelector } from "react-redux";

function useFavorite() {
  const dispatch = useDispatch();
  const favMovies = useSelector((state) => {
    return state.favoriteMovies;
  });

  // Fn
  const handleClick = (movie) => {
    const existingIndex = favMovies.findIndex((item) => item.id === movie.id);
    if (existingIndex === -1) {
      dispatch(addFavoriteMovie(movie));
      alert("나의 즐겨찾기 목록에 추가 되었습니다.");
    } else {
      dispatch(deleteFavoriteMovie(movie));
      alert("나의 즐겨찾기 목록에 삭제 되었습니다.");
    }
  };

  return { handleClick };
}

export default useFavorite;
