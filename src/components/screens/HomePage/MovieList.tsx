import MovieCard from "components/common/MovieCard";
import classes from "./HomePage.module.scss";

const MovieList = () => {
  let movies = [
    {
      ownerId: 1,
      title: "one",
      id: 1,
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam in quaerat aliquid et minus doloribus voluptates a voluptatum, hic commodi velit molestias eum tempora nesciunt rem. Laborum animi ea placeat?",
      genre: "Drama",
      releaseDate: 3433553656464,
    },
    {
      ownerId: 2,
      title: "two",
      id: 2,
      description:
        " consectetur adipisicing elit. Veniam in quaerat aliquid et minus doloribus voluptates a voluptatum, hic commodi velit molestias eum tempora nesciunt rem. Laborum animi ea placeat?",
      genre: "Action",
      releaseDate: 4545453656464,
    },
  ];
  return (
    <section className={classes.Wrapper}>
      {movies.map((item) => (
        <MovieCard {...item} />
      ))}
    </section>
  );
};

export default MovieList;
