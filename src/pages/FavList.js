// import MovieCard from "components/MovieCard";
import { useSelector } from "react-redux";
import MovieCard from "components/MovieCard";

export default function FavList() {
  let state = useSelector((state) => {
    return state;
  });

  return (
    <div className="page-container">
      <div className="layout-center">
        <div className="movie-list-wrap">
          {state.favList.map((item) => {
            return <MovieCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
