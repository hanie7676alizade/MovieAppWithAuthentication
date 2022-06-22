import Button from "components/common/Button";
import SearchBox from "components/common/SearchBox";
import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "redux/hooks";
import { setSearchText } from "redux/Movie/slice";
import { isAuth } from "util/helpers";
import classes from "./Layout.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const onSearch = () => {
    !!inputRef.current && dispatch(setSearchText(inputRef.current.value));
  };

  const logout = () => {
    localStorage.removeItem("Mtoken");
    localStorage.removeItem("email");
    navigate("/login");
  };
  return (
    <header className={classes.Wrapper}>
      <ul>
        <li>
          <h1>MovieApp</h1>
        </li>
        {isAuth() && (
          <>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/add-movie"
              >
                add movie
              </NavLink>
            </li>
          </>
        )}
        {!isAuth() && (
          <>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/login"
              >
                login
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/register"
              >
                register
              </NavLink>
            </li>
          </>
        )}
      </ul>
      <div className={classes.searchWrapper}>
        {isAuth() && <SearchBox ref={inputRef} onChange={onSearch} />}
        {isAuth() && (
          <Button theme="warrning" onClick={logout}>
            Logout
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
