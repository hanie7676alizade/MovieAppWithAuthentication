import { useEffect } from "react";
import { useParams } from "react-router";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import { editMovie, getCurrentMovie } from "redux/Movie/slice";
import { setEmail } from "redux/Auth/slice";
import { IFormValues } from "types/types";
import MovieForm from "components/common/MovieForm";

const EditMoviePage = () => {
  const currentMovie = useAppSelector((state) => state.Movie.currentMovie);

  const loading = useAppSelector((state) => state.Common.loading);
  const email = useAppSelector((state) => state.Auth.email);

  const params = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (!currentMovie || currentMovie?.id.toString() !== params.id) &&
      !loading &&
      dispatch(getCurrentMovie(params.id));
    if (!email) {
      const localStorageEmail = localStorage.getItem("email");
      localStorageEmail && dispatch(setEmail(localStorageEmail));
    }
  }, [params.id]);

  const submitForm = (data: IFormValues) => {
    currentMovie?.id && dispatch(editMovie({ ...data, id: currentMovie?.id }));
  };

  if (currentMovie)
    return <MovieForm onSubmit={submitForm} initValue={currentMovie} />;
  return null;
};
export default EditMoviePage;
