import { Fragment, useEffect, useState } from "react";

import MovieList from "components/screens/HomePage/MovieList";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { deleteMovie, getMovieList } from "redux/Movie/slice";
import { setEmail } from "redux/Auth/slice";
import { IMovie } from "types/types";
import { useSelector } from "react-redux";

const HomePage = () => {
  const movieList = useAppSelector((state) => state.Movie.movieList);
  const searchedText = useAppSelector((state) => state.Movie.searchedText);
  const email = useAppSelector((state) => state.Auth.email);
  const loading = useSelector((state: any) => state.Common.loading);
  const [filteredList, setFilteredList] = useState<IMovie[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const newList: IMovie[] = movieList.filter((item) =>
      item.name.toUpperCase().includes(searchedText.toUpperCase())
    );

    setFilteredList(newList);
  }, [searchedText]);

  useEffect(() => {
    !movieList.length && !loading && dispatch(getMovieList());
    if (!email) {
      const localStorageEmail = localStorage.getItem("email");
      localStorageEmail && dispatch(setEmail(localStorageEmail));
    }
  }, []);

  useEffect(() => {
    setFilteredList(movieList);
  }, [movieList]);

  const onDelete = (id: string) => {
    dispatch(deleteMovie(id));
  };

  return (
    <Fragment>
      <MovieList movieList={filteredList} onDelete={onDelete} />
    </Fragment>
  );
};
export default HomePage;
