import "./styles/seriecard.css";

interface TypeSerie {
  serie: {
    title: string;
    annee: string;
    nbsaisons: string;
    image: string;
  };
}

export default function SerieCard({ serie }: TypeSerie) {
  return (
    <div>
      <h2>{serie.title}</h2>
      <p>{serie.annee}</p>
      <p>{serie.nbsaisons}</p>
      <img src={serie.image} alt={serie.title} />
    </div>
  );
}
