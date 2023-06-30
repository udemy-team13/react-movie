import { useEffect, useState } from "react";


const useFetch = (initialUrl) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    (async () => {
      const {data} = await( await fetch(`${initialUrl}`)).json()
      setLoading(() => false);
      setMovies(data.movies);
      console.log("done");
    })();
  },[])

  return {loading, movies}
}


export {useFetch}