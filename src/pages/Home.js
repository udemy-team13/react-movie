import { useEffect, useState } from "react";
import Loader from "components/Loader";
import MovieList from "pages/MovieList";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await (
        await fetch("https://yts.mx/api/v2/list_movies.json")
      ).json();
      // setLoading((prev) => !prev); // 이거 왜 !prev인지 이해를 못해서 일단 잠시 홀딩..
      setLoading(() => false);
      setMovies(data.movies);
    })();
  }, []);

  // 영화 검색
  function searchMovie(keyword) {
    setLoading(true);
    console.log(keyword);
    (async () => {
      const { data } = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${keyword}`)
      ).json();
      setLoading(false);
      setMovies(data.movies);
    })();
  }

  return <>{loading ? <Loader /> : <MovieList onClick={searchMovie} movies={movies} />}</>;
}
