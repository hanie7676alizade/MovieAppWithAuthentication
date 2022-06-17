import Button from "components/common/Button";
import SearchBox from "components/common/SearchBox";
import { Link, NavLink } from "react-router-dom";
import classes from "./Layout.module.scss";

const Header = () => {
  const logout = () => {
    console.log("logout");
  };
  return (
    <header className={classes.Wrapper}>
      <ul>
        <li>
          <h1>Movie App</h1>
        </li>
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
            to="suggest-movie"
          >
            suggest movie
          </NavLink>
        </li>
      </ul>
      <div className={classes.searchWrapper}>
        <SearchBox />
        <Button theme="warrning" onClick={logout}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
