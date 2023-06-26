import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const MovieDetail = () => {

  let {id} = useParams();
  console.log('id', id);
  const [detailInfo, setDetailInfo] = useState({});

  useEffect(() => {
    getMovieDetailInfo();
  }, [])

  useEffect(() => {
    getMovieDetailInfo();
  }, [])

  function getMovieDetailInfo() {
    console.log('getMovieDetailInfo');
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then(function(res) {
        return res.json();
      })
      .then(function(json) {
        setDetailInfo(json.data.movie);
        console.log('detailInfo', detailInfo);
      })
  }

  return (
    <div>
      디테일 
      <div>
        <img src={detailInfo.large_cover_image} alt="" />
      </div>
      <div>
        <p>{detailInfo.title_long}</p>
        <p>{detailInfo.description_full}</p>
        <p>{detailInfo.rating}</p>
        <p>{detailInfo.genres}</p>
      </div>
    </div>
  )
}

export default MovieDetail;