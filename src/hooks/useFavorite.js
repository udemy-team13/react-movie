import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "store";

function useFavorite() {
  let dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = (item) => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    dispatch(addFav(item));
    alert("나의 즐겨찾기 목록에 추가 되었습니다.");
  };

  return { isFavorite, handleClick };
}

export default useFavorite;
