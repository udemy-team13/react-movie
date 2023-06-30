import Loader from "components/Loader";
import MovieList from "pages/MovieList";
import {useFetch} from "hooks/Homehook"


export default function Home() {
 const {loading, movies} = useFetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
  return <>
  {loading ? <Loader /> :<MovieList movies={movies} />}
  </>;
}
