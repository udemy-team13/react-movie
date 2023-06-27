import { Chip, Stack } from '@mui/material';

const MovieCard = (props) => {
  function clickTest() { // Chip에 onClick event가 붙어야 인터렉션이 생겨서 test로 작성
    console.log('test');
  }

  return (
    <div className="movie-card">
      <div className="movie-img-grp" onClick={() => props.onClick(props.item.id)}>
        <img src={props.item.large_cover_image} alt={`moviePosterImage${props.item.id}`} className="movie-img" />
      </div>
      <div className="movie-txt-grp">
        <p className="movie-txt movie-title one-line">{props.item.title}</p>
        <p className="movie-txt movie-year">{props.item.year}</p>
        <p className="movie-txt movie-rating">{props.item.rating}</p>
      </div>
      <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
        {
          props.item.genres.map((item) => {
            return <Chip onClick={() => {clickTest()}} className='gerne-chip' label={item} size="small" variant="outlined" />
          })
        }

    </Stack>
    </div>
  )
}

export default MovieCard;