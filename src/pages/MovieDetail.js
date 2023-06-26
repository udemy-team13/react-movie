import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Loader from "components/Loader";


const MovieDetail = () => {
  const {id} = useParams();
  const [detailInfo, setDetailInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState(150);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getMovieDetailInfo();
    console.log(detailInfo);
  }, [])

  function getMovieDetailInfo() {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then(function(res) {
        return res.json();
      })
      .then(function(json) {
        // setLoading((prev) => !prev);
        setLoading(() => false);
        setDetailInfo(json.data.movie);
      })
  }

  // 텍스트 길이 수정 코드
  const handleText = () => {
    if (toggle === false) {
      setText(detailInfo.description_full.length);
      setToggle((prev) => !prev);
    } else {
      setText(150);
      setToggle((prev) => !prev);
    }
  };

  return (
    <div className="page-container">
    {
      loading
      ? <Loader />
      : <div className="detail-all-wrap">
          <div className="detail-bg-img-grp">
            <img src={detailInfo.background_image_original} alt="" className="detail-bg-img" />
          </div>
          <div className="layout-center">
            <div className="detail-info-wrap">
              {/* 상단 영역 */}
              <div className="top-area-wrap">
                <div className="detail-img-grp">
                  <img src={detailInfo.large_cover_image} className="detail-img" alt="" />
                </div>
                <div className="detail-txt-grp">
                  <p>{detailInfo.title_long}</p>
                  <p>{detailInfo.genres}</p>
                  <p>{detailInfo.rating}</p>
                  <p>{detailInfo.imdb_code}</p>
                </div>
              </div>
              {/* 하단 설명 영역 */}
              <div className="bottom-area-wrap">
                <p onClick={() => { handleText() }}>{detailInfo.description_full.length > 150
                  ? `${detailInfo.description_full.slice(0, text)} ${toggle ? "" : "...펼치기"}`
                  : detailInfo.description_full}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default MovieDetail;