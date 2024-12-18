import FilmCard from "./FilmCard";

export default function FilmList({ filmsSelection }) {
  return (
    <>
      {filmsSelection.map((film) => (
        <FilmCard key={film.titre} film={film} />
      ))}
    </>
  );
}
