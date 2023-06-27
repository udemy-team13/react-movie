import { useEffect, useState } from "react";
import MovieCard from "components/MovieCard";
import { useNavigate } from "react-router-dom";
import SortMovie from "components/SortMovie";
import { Button, TextField } from '@mui/material';

const MovieList = (props) => {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [selected, setSelected] = useState("");
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setMovieList(props.movies);
  }, [props.movies]);

  function goDetail(id) {
    navigate(`/movie-detail/${id}`);
  }

  function handleSearch() {
    props.onClick(keyword);
  }

  return (
    <div className="page-container">
      <div className="layout-center">
        <div className="list-top-sort-wrap">
          <div className="input-wrap">
            <TextField id="standard-basic" label="영화를 검색해보세요" variant="standard"
            onChange={(e) => { setKeyword(e.target.value) }}
            onKeyDown={(e) => {
              if(e.key === 'Enter') {
                handleSearch();
              }
            }}
            />
            <Button size="small" variant="outlined" style={{'color': '#000', 'borderColor': '#000'}} onClick={() => {
              handleSearch();
            }}>검색</Button>
          </div>
          <div className="select-wrap">
            <SortMovie
              movieList={movieList}
              setMovieList={setMovieList}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>
        <div className="movie-list-wrap">
          {movieList?.map(function (item) {
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
