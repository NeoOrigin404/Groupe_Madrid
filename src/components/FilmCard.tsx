import "../styles/filmcard.css";

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
    <div className="film-card">
      <img src={film.affiche} alt={film.titre} className="img-film" />
      <div className="info-film">
        <h2 className="film-title">{film.titre}</h2>
        <p className="film-info">
          {film.duree} ▪️ {film.annee}
        </p>
      </div>
    </div>
  );
}

/* <article>
      <div>
        <h2>{house.name}</h2>
        <h3>{house.type}</h3>
        <p>{house.desc}</p>
      </div>
      <img src={house.img} alt={house.name} />
    </article> */
