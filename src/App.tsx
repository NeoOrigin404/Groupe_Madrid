import FilmList from "./components/FilmList";

import "./styles/app.css";

const filmsSelection = [
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F340965%2Fposters%2F674170a914b85.jpg&w=640&q=75",
    titre: "Carry-On",
    duree: "1h59",
    annee: "2024",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F342389%2Fposters%2F65bc37cc4b0a0_t.jpg&w=384&q=75",
    titre: "Red One",
    duree: "2h03",
    annee: "2024",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F167725%2Fposters%2F6490ab9ded239_t.jpg&w=384&q=75",
    titre: "Kraven The Hunter",
    duree: "2h07",
    annee: "2024",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F330830%2Fposters%2F6612ef0f3b9d6_t.jpg&w=384&q=75",
    titre: "Joker: Folie à Deux",
    duree: "2h28",
    annee: "2024",
  },
];

export default function App() {
  return (
    <>
      <main>
        <h1>TV Time</h1>
        <FilmList filmsSelection={filmsSelection} />
      </main>
    </>
  );
}
