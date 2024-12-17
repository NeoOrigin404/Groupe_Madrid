import FilmList from "./components/FilmList";
import SerieList from "./components/SerieList";

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
    <main>
      {/* Films */}
      <div className="title-contain">
        <h2>Films tendance</h2>
        <h3>
          Films comptabilisant le plus de réactions au cours des trois derniers
          jours
        </h3>
      </div>
      <div className="film-container">
        <FilmList filmsSelection={filmsSelection} />
      </div>

      {/* Series */}
      <div className="title-contain">
        <h2>Séries tendances</h2>
        <h3>
          Séries comptabilisant le plus de réactions au cours des trois derniers
          jours
        </h3>
      </div>
      {/* <section className="serie-container">
        <SerieList indexSeries={indexSeries} />
      </section> */}
    </main>
  );
}

const indexSeries = [
  {
    title: "Yellowstone",
    année: "2018",
    nbsaisons: "5",
    image:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fposters%2F5d1bfa6c30c50.jpg&w=256&q=75",
  },
  {
    title: "Dune : Prophecy",
    année: "2024",
    nbsaisons: "1",
    image:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F367118%2Fposters%2F673bd923f1637.jpg&w=256&q=75",
  },
  {
    title: "Arcane",
    année: "2021",
    nbsaisons: "1",
    image:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F371028%2Fposters%2F617f6a8c59e8f.jpg&w=256&q=75",
  },
  {
    title: "Secret Level",
    année: "2024",
    nbsaisons: "1",
    image:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F453280%2Fposters%2F675c4b518d9da.jpg&w=256&q=75",
  },
  {
    title: "Black Doves",
    année: "2024",
    nbsaisons: "En cours",
    image:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F441315%2Fposters%2F67520ffb9601a.jpg&w=256&q=75",
  },
];
