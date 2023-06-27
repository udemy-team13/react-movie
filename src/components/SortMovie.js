export default function SortMovie(props) {
  const { movieList, setMovieList, selected, setSelected } = props;

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
      <select className="select" value={selected} onChange={handleSelect}>
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
    </>
  );
}
