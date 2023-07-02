import { useState } from "react";


const useFetch = (initialUrl) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = (page) => {
    (async () => {
      setLoading(() => true);
      const {data} = await( await fetch(`${initialUrl}?page=${page}`)).json()
      setLoading(() => false);
      setMovies(data.movies);
      console.log("done");
    })();
  }



  return {loading, movies, getMovies}
}


export {useFetch};