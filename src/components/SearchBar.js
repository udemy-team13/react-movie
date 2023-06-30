import { Button, TextField } from "@mui/material";
import { useSearchMovies } from "hooks/useSearchMovies";

export default function SearchBar({ setMovieList, movies }) {
  const { text, handleText, handleSubmit } = useSearchMovies({
    setMovieList,
    movies,
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "5px",
        }}
      >
        <TextField
          id="standard-basic"
          label="영화를 검색해보세요"
          variant="standard"
          value={text}
          onChange={handleText}
        />
        <Button
          type="submit"
          size="small"
          variant="outlined"
          style={{ color: "#000", borderColor: "#000" }}
        >
          검색
        </Button>
      </form>
    </div>
  );
}
