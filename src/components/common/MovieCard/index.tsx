import { Fragment, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

import classes from "./MovieCard.module.scss";
import EditIcon from "assets/icons/edit-gray.svg";
import notCheckedTag from "assets/icons/notCheckedTag.svg";
import checkedTag from "assets/icons/checkedTag.svg";
import { useAppSelector } from "redux/hooks";
import defaultImage from "assets/icons/defaultAvatar.svg";
import { Link } from "react-router-dom";
import Button from "../Button";
import { IMovie } from "types";

const MovieCard = (props: IMovie) => {
  let currentUserId = 1;
  const navigate = useNavigate();

  const editMovie = () => {
    navigate("/edit-movie");
  };
  const deleteMovie = () => {
    console.log("delete");
  };
  return (
    <div className={classes.cardWrapper}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.genre}</p>
      </div>
      <div className={classes.btnWrapper}>
        {currentUserId === props.ownerId && (
          <Fragment>
            <Button onClick={deleteMovie} theme="warrning">
              Delete
            </Button>
            <Button onClick={editMovie} theme="info">
              Edit
            </Button>
          </Fragment>
        )}
        <Button>View Details </Button>
      </div>
    </div>
  );
};

export default MovieCard;
