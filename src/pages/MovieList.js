import { useEffect, useState, useCallback } from "react";
import MovieCard from 'components/MovieCard';
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieInfo();
  }, [])

  function getMovieInfo() {
    fetch('https://yts.mx/api/v2/list_movies.json')
      .then(function(res) {
        return res.json();
      })
      .then(function(json) {
        setMovieList(json.data.movies);
      })
  }

  function goDetail(id) {
    navigate(`/movie-detail/${id}`);
  }

  return (
    <div className="movie-list-wrap">
      {
        movieList.map(function(item) {
          return (
            <MovieCard onClick={goDetail} item={item} key={item.id} />
          )
        })
      }
    </div>
  )
}

export default MovieList;