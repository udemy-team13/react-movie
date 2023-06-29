import { useEffect, useRef, useState } from "react";
import Loader from "components/Loader";
import MovieList from "pages/MovieList";
import { SectionObserver } from "components/SectionObserver";

export default function Home() {
  const target = useRef(null);

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    observer.observe(target.current);
    fetchData(true);
  }, []);

  function fetchData(reset = false) {
    (async () => {
      const { data } = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}`)
      ).json();
      setLoading(() => false);
      reset ? setMovies(data.movies) : setMovies(movies.concat(data.movies));
      // reset ? setPage(1) : setPage(page + 1);
    })();
  }

  const options = {
    threshold: 1.0,
  }

  const callback = () => {
    target.current.innerText += "관측됨";
    fetchData();
    // setPage(page + 1);
  };

  const observer = new IntersectionObserver(callback, options);

  return (
    <>
      {loading ? <Loader /> : <MovieList movies={movies} />}
      <SectionObserver target={target} />
    </>
  )
}
