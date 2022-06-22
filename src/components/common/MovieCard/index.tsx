import { Fragment } from "react";
import { useNavigate } from "react-router";

import classes from "./MovieCard.module.scss";
import { useAppSelector } from "redux/hooks";
import Button from "../Button";
import { IMovie } from "types/types";

interface Iprops extends IMovie {
  onDelete: (id: string) => void;
}
const MovieCard = (props: Iprops) => {
  let currentUserEmail = useAppSelector((state) => state.Auth.email);
  const navigate = useNavigate();

  const editMovie = () => {
    navigate(`/edit-movie/${props.id}`);
  };
  const navigateToMoviePage = () => {
    navigate(`/movie/${props.id}`);
  };
  const deleteMovie = () => {
    props.onDelete(props.id.toString());
  };
  return (
    <div className={classes.cardWrapper}>
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className={classes.btnWrapper}>
        {currentUserEmail === props.creator && (
          <Fragment>
            <Button onClick={deleteMovie} theme="warrning">
              Delete
            </Button>
            <Button onClick={editMovie} theme="info">
              Edit
            </Button>
          </Fragment>
        )}
        <Button onClick={navigateToMoviePage}>View Details </Button>
      </div>
    </div>
  );
};

export default MovieCard;
