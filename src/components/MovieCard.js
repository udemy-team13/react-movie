import { Chip, Stack, Rating } from "@mui/material";
import defaultImg from "assets/images/defaultImg.png";
import { BiHeart } from "react-icons/bi";
import useFavorite from "hooks/useFavorite";

const MovieCard = (props) => {
  const { isFavorite, handleClick } = useFavorite();
  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };

  function handleGenres(genre) {
    // onClick -> Chip의 genre를 받아온후 filter를 사용하여 해당 장르가 포함되는 애들만 골라줌.
    // filter는 새로운 배열을 반환하므로 기존배열을 건드리지않음. copy = [...movieList]등 shallow copy를 사용안해도됨.
    const filterMovieList = props.movieList.filter((movie) =>
      movie.genres.includes(genre)
    );

    // set을 이용하여 중복이 안되게 기존배열과 합쳐준후 arr로 다시 변환.
    const set = new Set([...filterMovieList, ...props.movieList]);
    const sortMovieList = Array.from(set);
    props.setMovieList(sortMovieList);
  }

  return (
    <div className="movie-card">
      <div
        className="movie-img-grp"
        onClick={() => props.onClick(props.item.id)}
      >
        <img
          src={props.item.large_cover_image}
          alt={`moviePosterImage${props.item.id}`}
          className="movie-img"
          onError={handleImgError}
        />
      </div>
      <div className="movie-txt-grp">
        <p className="movie-txt movie-title one-line">{props.item.title}</p>
        <p className="movie-txt movie-year">{props.item.year}</p>
        <Rating
          name="size-small"
          size="small"
          defaultValue={0}
          value={props.item.rating / 2}
          readOnly
        ></Rating>
      </div>
      <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
        {props.item.genres.map((item) => {
          return (
            <Chip
              onClick={() => {
                handleGenres(item);
              }}
              className="gerne-chip"
              label={item}
              size="small"
              variant="outlined"
              key={item}
            />
          );
        })}
      </Stack>
      <button className="favorite-btn" onClick={handleClick}>
        <BiHeart size="20px" color={isFavorite ? "red" : "black"} />
      </button>
    </div>
  );
};

export default MovieCard;
