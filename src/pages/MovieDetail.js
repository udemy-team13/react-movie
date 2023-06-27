import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";
import { Chip, Stack, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import defaultImg from "assets/images/defaultImg.png";

const MovieDetail = () => {
  const { id } = useParams();
  const [detailInfo, setDetailInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState(150);
  const [toggle, setToggle] = useState(false);

  const handleImgError = (e) => {
    e.target.src = defaultImg;
};

  useEffect(() => {
    getMovieDetailInfo();
  }, []);

  function getMovieDetailInfo() {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        // setLoading((prev) => !prev);
        setLoading(() => false);
        setDetailInfo(json.data.movie);
      });
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

  console.log("detailInfo", detailInfo);

  return (
    <div className="page-container">
      {loading ? (
        <Loader />
      ) : (
        <div className="detail-all-wrap">
          <div className="detail-bg-img-grp">
            <img
              src={detailInfo.background_image_original}
              alt=""
              className="detail-bg-img"
            />
          </div>
          <div className="layout-center">
            <div className="detail-info-wrap">
              {/* 상단 영역 */}
              <div className="top-area-wrap">
                <div className="detail-img-grp">
                  <img
                    src={detailInfo.large_cover_image}
                    className="detail-img"
                    alt=""
                    onError={handleImgError}
                  />
                </div>
                <div className="detail-txt-grp">
                  <p>{detailInfo.title_long}</p>
                  <Stack direction="row" spacing={1}>
                    {detailInfo.genres.map((item) => {
                      return (
                        <Chip
                          className="detail-genre-chip"
                          label={item}
                          color="default"
                          variant="outlined"
                        />
                      );
                    })}
                  </Stack>

                  <Rating
                    defaultValue={detailInfo.rating / 2}
                    readOnly
                    emptyIcon={
                      <StarIcon
                        style={{ opacity: 0.8, fill: "white" }}
                        fontSize="inherit"
                      />
                    }
                  ></Rating>
                  <a
                    href={"https://www.imdb.com/title/" + detailInfo.imdb_code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      style={{ height: "16px" }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/863px-IMDB_Logo_2016.svg.png?20200406194337"
                      alt="imdb_image"
                    />
                  </a>
                </div>
              </div>
              {/* 하단 설명 영역 */}
              <div className="bottom-area-wrap">
                <p
                  onClick={() => {
                    handleText();
                  }}
                >
                  {detailInfo.description_full.length > 150
                    ? `${detailInfo.description_full.slice(0, text)} ${
                        toggle ? "" : "...펼치기"
                      }`
                    : detailInfo.description_full}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
