import { useState } from "react";

const useSearchMovies = (initialValue) => {
  const { setMovieList, movies } = initialValue;
  const [text, setText] = useState("");

  const handleMovieList = (movieList) => {
    setMovieList(movieList);
  };

  // input의 문자열 관리
  const handleText = (e) => {
    setText(e.target.value);
    // input의 value.length가 0일때 기존 데이터를 가져와서 뿌려줌
    if (e.target.value.length === 0) {
      handleMovieList(movies);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // input validate
    if (text.length === 0) return;

    // 해당하는 영화의 데이터 불러오기
    (async () => {
      const {
        data: { movies },
      } = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${text}`)
      ).json();
      handleMovieList(movies);
    })();
  };

  return { text, handleText, handleSubmit };
};

export { useSearchMovies };
