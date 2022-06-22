import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getCurrentMovie } from "redux/Movie/slice";
import { setEmail } from "redux/Auth/slice";
import CurrentMoviePage from "components/screens/CurrentMoviePage";

const MoviePage = () => {
  const currentMovie = useAppSelector((state) => state.Movie.currentMovie);
  const email = useAppSelector((state) => state.Auth.email);

  const params = useParams();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (!currentMovie || currentMovie?.id.toString() !== params.id) &&
      dispatch(getCurrentMovie(params.id));
    if (!email) {
      const localStorageEmail = localStorage.getItem("email");
      localStorageEmail && dispatch(setEmail(localStorageEmail));
    }
  }, [dispatch]);

  const deleteItem = () => {
    console.log("delete");
  };

  const navigateToEditPage = () => {
    navigate(`/edit-movie/${currentMovie?.id}`);
  };

  if (currentMovie)
    return (
      <Fragment>
        <CurrentMoviePage
          onDelete={deleteItem}
          onEdit={navigateToEditPage}
          currentMovie={currentMovie}
          email={email}
        />
      </Fragment>
    );
  return null;
};
export default MoviePage;
