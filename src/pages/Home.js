import { useEffect, useState } from "react";
import Loader from "components/Loader";
import MovieList from "pages/MovieList";
import Pagination from "components/Pagination";
import usePagination from "hooks/usePagination";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { currentPage, next, prev, jump } = usePagination(5);


  useEffect(() => {
    (async () => {
      setLoading(() => true);
      const { data } = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?page=${currentPage}`)
      ).json();
      setLoading(() => false);
      setMovies(data.movies);
    })();
  }, [currentPage]);

 

  return (
    <>
      <Pagination currentPage={currentPage} prev={prev} next={next} jump={jump} />
      {loading ? <Loader /> : <MovieList movies={movies} />}
    </>
  )
}
