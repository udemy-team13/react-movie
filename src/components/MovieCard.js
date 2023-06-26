const MovieCard = (props) => {
  return (
    <div className="movie-card" onClick={() => props.onClick(props.item.id)}>
      <div className="movie-img-grp">
        <img src={props.item.large_cover_image} alt={`moviePosterImage${props.item.id}`} className="movie-img" />
      </div>
      <div className="movie-txt-grp">
        <p className="one-line">{props.item.title_long}</p>
        <p className="one-line">{props.item.genres}</p>
        <p className="one-line">{props.item.rating}</p>
        <p className="one-line">{props.item.summary}</p>
      </div>
    </div>
  )
}

export default MovieCard;