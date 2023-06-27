import { useEffect, useState } from "react";
import MovieCard from "components/MovieCard";
import { useNavigate } from "react-router-dom";
import SortMovie from "components/SortMovie";

const MovieList = (props) => {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setMovieList(props.movies);
  }, [props.movies]);

  function goDetail(id) {
    navigate(`/movie-detail/${id}`);
  }

  return (
    <div className="page-container">
      <div className="layout-center">
        <input type="text" />
        <button onClick={() => {props.onClick()}}>검색</button>

        <div className="select-wrap">
          <SortMovie
            movieList={movieList}
            setMovieList={setMovieList}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className="movie-list-wrap">
          {movieList.map(function (item) {
            return (
              <MovieCard
                onClick={goDetail}
                item={item}
                key={item.id}
                movieList={movieList}
                setMovieList={setMovieList}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
