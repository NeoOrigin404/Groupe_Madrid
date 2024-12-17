import SerieCard from "./SerieCard";

export default function SerieList() {
  return (
    <main>
      <h1>Séries</h1>
      {indexSeries.map((serie) => (
        <SerieCard key={serie.title} serie={serie} />
      ))}
    </main>
  );
}
