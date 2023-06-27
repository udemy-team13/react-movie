import { useState } from "react";
import { Button, TextField } from '@mui/material';


export default function SearchBar({ setMovieList, movies }) {
  const [text, setText] = useState("");

  // input의 문자열 관리
  const handleText = (e) => {
    setText(e.target.value);
    // input의 value.length가 0일때 기존 데이터를 가져와서 뿌려줌
    if (e.target.value.length === 0) {
      setMovieList(movies);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // input validate
    if (text.length === 0) return;

    // 해당하는 영화의 데이터 불러오기
    (async () => {
      const {
        data: { movies },
      } = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${text}`)
      ).json();
      setMovieList(movies);
    })();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '5px'}}>
        <TextField id="standard-basic" label="영화를 검색해보세요" variant="standard"
        value={text}
        onChange={handleText}
        />
        <Button type="submit" size="small" variant="outlined" style={{'color': '#000', 'borderColor': '#000'}}>검색</Button>
      

        {/* <input
          className="search-input"
          value={text}
          onChange={handleText}
          placeholder="영화검색"
        /> */}
        {/* <button className="search-btn" type="submit">
          검색
        </button> */}
      </form>
    </div>
  );
}
