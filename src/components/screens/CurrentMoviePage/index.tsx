import Button from "components/common/Button";
import { IMovie } from "types/types";
import classes from "./CurrentMoviePage.module.scss";

interface Iprops {
  email: string;
  currentMovie: IMovie;
  onDelete: () => void;
  onEdit: () => void;
}
const CurrentMoviePage = (props: Iprops) => {
  return (
    <section className={classes.Wrapper}>
      <h1>{props.currentMovie.name}</h1>
      <span> {props.currentMovie.description}</span>
      <p>creator: {props.currentMovie.creator}</p>
      <div>
        {props.email === props.currentMovie.creator && (
          <>
            <Button theme="warrning" onClick={props.onDelete}>
              Delete
            </Button>
            <Button theme="info" onClick={props.onEdit}>
              Edit
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default CurrentMoviePage;
