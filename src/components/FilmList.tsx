import FilmCard from "./FilmCard";

export default function FilmList({ filmsSelection }) {
  return (
    <>
      <div>
        {filmsSelection.map((film) => (
          <FilmCard key={film.titre} film={film} />
        ))}
      </div>
    </>
  );
}
