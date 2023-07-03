import { useEffect } from "react";
import Loader from "components/Loader";
import MovieList from "pages/MovieList";
import { useFetch } from "hooks/Homehook";
import Pagination from "components/Pagination";
import usePagination from "hooks/usePagination";

export default function Home() {
  const { loading, movies, getMovies } = useFetch(
    "https://yts.mx/api/v2/list_movies.json"
  );
  const { currentPage, next, prev, jump } = usePagination();

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  return (
    <>
      <Pagination
        currentPage={currentPage}
        prev={prev}
        next={next}
        jump={jump}
      />
      {loading ? <Loader /> : <MovieList movies={movies} />}
    </>
  );
}
