interface FilmTypes {
  film: {
    affiche: string;
    titre: string;
    duree: string;
    annee: string;
    nbsaisons?: string;
    genre: string;
  };
}

export default function FilmCard({ film }: FilmTypes) {
  return (
    <div className="film-card">
      <img src={film.affiche} alt={film.titre} className="img-film" />
      <div className="info-film">
        <h2 className="film-title">{film.titre}</h2>
        <div className="info-card">
          <p className="film-info">
            {film.duree} {film.annee}
          </p>
          <p className="serie-saison">{film.nbsaisons}</p>
        </div>
      </div>
    </div>
  );
}
