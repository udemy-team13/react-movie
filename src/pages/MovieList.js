import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "components/MovieCard";
import SortMovie from "components/SortMovie";
import SearchBar from "components/SearchBar";

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
        <div className="select-wrap">
          <SearchBar setMovieList={setMovieList} movies={props.movies} />
          <SortMovie
            movieList={movieList}
            setMovieList={setMovieList}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className="movie-list-wrap">
          {movieList ? (
            movieList?.map(function (item) {
              return (
                <MovieCard
                  onClick={goDetail}
                  item={item}
                  key={item.id}
                  movieList={movieList}
                  setMovieList={setMovieList}
                />
              );
            })
          ) : (
            <h1>영화를 찾지 못했습니다.</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
