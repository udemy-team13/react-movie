import { useEffect, useState } from "react";
import Loader from "components/Loader";
import MovieList from "pages/MovieList";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await (
        await fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        )
      ).json();
      // setLoading((prev) => !prev); // 이거 왜 !prev인지 이해를 못해서 일단 잠시 홀딩..
      setLoading(() => false);
      setMovie(data);
    })();
  }, []);

  return <>{loading ? <Loader /> : <MovieList rawData={movie} />}</>;
}
