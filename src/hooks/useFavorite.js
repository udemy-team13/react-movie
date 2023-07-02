import React, { useState } from "react";

function useFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = (e) => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    alert("나의 즐겨찾기 목록에 추가 되었습니다.");
  };

  return { isFavorite, handleClick };
}

export default useFavorite;
