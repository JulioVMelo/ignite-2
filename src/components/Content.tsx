import { MovieCard } from "./MovieCard";
import { IMovie } from "../util/interfaces/movie.interface";
interface IPROPS {
  title: string;
  movies: IMovie[];
}

export function Content(props: IPROPS) {
  return (
    <>
      <header>
        <span className="category">
          Categoria:<span> {props.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map((movie) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </>
  );
}
