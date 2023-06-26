import { useEffect, useState } from "react";
import MovieCard from 'components/MovieCard';
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [selected, setSelected] = useState("");

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

  const handleSelect = (e) => {
    if (e.target.value === "year") {
      const copyMovieList = [...movieList].sort((a, b) => a.year - b.year);
      setMovieList(copyMovieList);
      setSelected("year");
    } else if (e.target.value === "rating") {
      const copyMovieList = [...movieList].sort((a, b) => a.rating - b.rating);
      setMovieList(copyMovieList);
      setSelected("rating");
    } else if (e.target.value === "sort") {
      const copyMovieList = [...movieList];
      setMovieList(copyMovieList);
      setSelected("");
    }
  };

  return (
    <>
      <select
        value={selected}
        onChange={handleSelect}
      >
        <option key="sort" value="sort">
          -- 분류 --
        </option>
        <option key="year" value="year">
          년도 &darr;
        </option>
        <option key="rating" value="rating">
          평점 &uarr;
        </option>
      </select>
      <div className="movie-list-wrap">
        {
          movieList.map(function(item) {
            return (
              <MovieCard onClick={goDetail} item={item} key={item.id} />
            )
          })
        }
      </div>
    </>
  )
}

export default MovieList;