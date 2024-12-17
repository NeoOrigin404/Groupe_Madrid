interface TypesFilm {
  film: {
    affiche: string;
    titre: string;
    duree: string;
    annee: number;
  };
}

export default function FilmCard({ film }: TypesFilm) {
  return (
    <>
      <div className="film-card">
        <img src={film.affiche} alt={film.titre} />
        <h2>{film.titre}</h2>
        <p>
          {film.duree} . {film.annee}
        </p>
      </div>
    </>
  );
}
