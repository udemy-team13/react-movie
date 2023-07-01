import { useEffect, useState } from "react";
import Loader from "components/Loader";
import MovieList from "pages/MovieList";
import {useFetch} from "hooks/Homehook"
import Pagination from "components/Pagination";
import usePagination from "hooks/usePagination";

export default function Home() {
  const {loading, movies} = useFetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
  const { currentPage, next, prev, jump } = usePagination();
  console.log('currentPage', currentPage)
  
  useEffect(() => {
    // useFetch 재호출 어떻게 하지..?!
    // currentPage query string에 담아서 재호출하면 완료
  }, [currentPage])

  return <>
  <Pagination currentPage={currentPage} prev={prev} next={next} jump={jump} />
  {loading ? <Loader /> :<MovieList movies={movies} />}
  </>;
}