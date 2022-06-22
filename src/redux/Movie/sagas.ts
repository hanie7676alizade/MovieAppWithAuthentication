import { put } from "redux-saga/effects";

import { setLoading, setRedirect } from "../Common/slice";

import axios from "../../axiosInstance";
import { PayloadAction } from "@reduxjs/toolkit";
import { getMovieList, setCurrentMovie, setMovieList } from "./slice";
import { IMovie } from "types/types";

const getRequestHeader = () => {
  const token = localStorage.getItem("Mtoken");
  return { authorization: `Bearer ${token}` };
};

export function* fetchMovieListSaga(
  action: PayloadAction<number | string>
): Generator {
  yield put(setLoading(true));
  try {
    const response: any = yield axios.get("http://127.0.0.1:8000/movies", {
      headers: getRequestHeader(),
    });
    yield put(setMovieList(response.data));
  } catch (err: any) {
    if (err.response.status === 401) {
      yield localStorage.removeItem("Mtoken");
      yield put(setRedirect({ state: true, url: "/login" }));
    }
    console.error("sagaERR fetchMovieListSaga", err);
  } finally {
    yield put(setLoading(false));
  }
}

export function* fetchMovieSaga(
  action: PayloadAction<number | string>
): Generator {
  yield put(setLoading(true));
  try {
    const response: any = yield axios.get("http://127.0.0.1:8000/movies", {
      params: {
        id: action.payload,
      },
      headers: getRequestHeader(),
    });

    yield put(setCurrentMovie(response.data[0]));
  } catch (err: any) {
    if (err.response.status === 401) {
      yield localStorage.removeItem("Mtoken");
      yield put(setRedirect({ state: true, url: "/login" }));
    }
    console.error("sagaERR fetchMovieSaga", err);
  } finally {
    yield put(setLoading(false));
  }
}

export function* deleteMovieSaga(
  action: PayloadAction<number | string>
): Generator {
  yield put(setLoading(true));
  try {
    const response: any = yield axios.delete(
      `http://127.0.0.1:8000/movies/${action.payload}`,
      {
        headers: getRequestHeader(),
      }
    );

    yield put(setCurrentMovie(response.data[0]));
  } catch (err: any) {
    if (err.response.status === 401) {
      yield localStorage.removeItem("Mtoken");
      yield put(setRedirect({ state: true, url: "/login" }));
    }
    console.error("sagaERR fetchMovieSaga", err);
  } finally {
    yield put(setLoading(false));
  }
}

export function* editMovieSaga(action: PayloadAction<IMovie>): Generator {
  yield put(setLoading(true));
  try {
    const data = {
      name: action.payload.name,
      description: action.payload.description,
    };
    const response: any = yield axios.patch(
      `http://127.0.0.1:8000/movies/${action.payload.id}`,
      data,
      {
        headers: getRequestHeader(),
      }
    );

    yield put(getMovieList());
    yield put(setRedirect({ state: true, url: "/" }));
  } catch (err: any) {
    if (err.response.status === 401) {
      yield localStorage.removeItem("Mtoken");
      yield put(setRedirect({ state: true, url: "/login" }));
    }
    console.error("sagaERR fetchMovieSaga", err);
  } finally {
    yield put(setLoading(false));
  }
}
