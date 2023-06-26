const MovieCard = (props) => {
  return (
    <div className="movie-card" onClick={() => props.onClick(props.item.id)}>
      <div className="movie-img-grp">
        <img src={props.item.large_cover_image} alt={`moviePosterImage${props.item.id}`} className="movie-img" />
      </div>
      <div className="movie-txt-grp">
        <p>{props.item.title_long}</p>
        <p>{props.item.rating}</p>
      </div>
    </div>
  )
}

export default MovieCard;