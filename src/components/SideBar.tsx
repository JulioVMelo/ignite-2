import { Button } from "./Button";
import { IGenre } from "../util/interfaces/genre.interface";

interface IPROPS {
  genres: IGenre[];
  handleClickButton: Function;
  selectedGenreId: Number;
}

export function SideBar(props: IPROPS) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
