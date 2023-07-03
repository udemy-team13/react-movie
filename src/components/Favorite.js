import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Favorite() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const favoriteMoviesList = useSelector((state) => {
    return state.favoriteMovies;
  });

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FavoriteIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {favoriteMoviesList?.map((movie) => {
          return (
            <MenuItem key={movie.id} onClick={handleClose}>
              <Link to={`/movie-detail/${movie.id}`}>{movie.title}</Link>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
