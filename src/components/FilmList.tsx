import { useState } from "react";
import FilmCard from "./FilmCard.tsx";
import "../styles/nav.css";
import "../styles/filmcard.css";

const filmsSelection = [
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F340965%2Fposters%2F674170a914b85.jpg&w=640&q=75",
    titre: "Carry-On",
    duree: "1h59",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F342389%2Fposters%2F65bc37cc4b0a0_t.jpg&w=384&q=75",
    titre: "Red One",
    duree: "2h03",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F167725%2Fposters%2F6490ab9ded239_t.jpg&w=384&q=75",
    titre: "Kraven The Hunter",
    duree: "2h07",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F330830%2Fposters%2F6612ef0f3b9d6_t.jpg&w=384&q=75",
    titre: "Joker: Folie à Deux",
    duree: "2h28",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F346677%2Fposters%2F665dd0bdb7097.jpg&w=256&q=75",
    titre: "Venom: The Last Dance",
    duree: "1h49",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F73592%2Fposters%2F67079f18779c0.jpg&w=256&q=75",
    titre: "Gladiator II",
    duree: "2h28",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F350067%2Fposters%2F6672154617ec9.jpg&w=256&q=75",
    titre: "Smile 2",
    duree: "2h12",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F349134%2Fposters%2F657bdaefed20f.jpg&w=256&q=75",
    titre: "Civil War",
    duree: "1h49",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F349288%2Fposters%2F66b30606677b2.jpg&w=256&q=75",
    titre: "Alien : Romulus",
    duree: "2h",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fposters%2F5d1bfa6c30c50.jpg&w=256&q=75",
    titre: "Yellowstone",
    nbsaisons: "5",
    annee: "2018",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F367118%2Fposters%2F673bd923f1637.jpg&w=256&q=75",
    titre: "Dune : Prophecy",
    annee: "2024",
    nbsaisons: "1",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F371028%2Fposters%2F617f6a8c59e8f.jpg&w=256&q=75",
    titre: "Arcane",
    annee: "2021",
    nbsaisons: "1",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F453280%2Fposters%2F675c4b518d9da.jpg&w=256&q=75",
    titre: "Secret Level",
    annee: "2024",
    nbsaisons: "1",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F441315%2Fposters%2F67520ffb9601a.jpg&w=256&q=75",
    titre: "Black Doves",
    annee: "2024",
    nbsaisons: "En cours",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F74796%2Fposters%2F66d7d367dc8fd.jpg&w=256&q=75",
    titre: "Bleach",
    annee: "2004",
    nbsaisons: "En cours",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F430780%2Fposters%2F6754c7b0aee85_t.jpg&w=384&q=75",
    titre: "Dexter: Original Sin",
    annee: "2024",
    nbsaisons: "En cours",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fposters%2F161511-1_t.jpg&w=384&q=75",
    titre: "Shameless (US)",
    annee: "2011",
    nbsaisons: "Terminée",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F388589%2Fposters%2F671e4a1387c06_t.jpg&w=384&q=75",
    titre: "Opérations Spéciales : Lionesss",
    annee: "2023",
    nbsaisons: "En cours",
    genre: "série",
  },
];

export default function FilmList() {
  const [titre, setTitre] = useState("");
  const [genre, setGenre] = useState("");

  const handleChangeTitre = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitre(event.currentTarget.value);
  };

  const handleChangeGenre = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.currentTarget.value);
  };

  const filteredGenre = filmsSelection
    .filter((film) => (!genre ? film : film.genre === genre))
    .filter((film) => film.titre.includes(titre));

  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="logo">
          <img
            src="https://play-lh.googleusercontent.com/wWoF0UMsnbJfBs2GahiNr3vpJjxAzfzc_GbgZrQWjNGRFFOY4z1Ky2-J0I1km-m1HQ"
            alt="TV Time logo"
          />
          <h1>MAD MADRID</h1>
        </div>

        <div id="tri">
          <p>Séries</p>
          <p>Films</p>
          <p>Genres</p>
        </div>

        <div id="search">
          <img src="./public/search.png" alt="" />
          <input
            placeholder="Rechercher des titres"
            type="text"
            onChange={handleChangeTitre}
          />
          <select onChange={handleChangeGenre}>
            <option value="">All</option>
            <option value="film">Film</option>
            <option value="série">Série</option>
          </select>
        </div>

        <div id="compte">
          <p>Se connecter</p>
          <p>|</p>
          <p>S'inscrire</p>
        </div>
      </nav>
      <main>
        {/* Films */}
        <div className="title-contain">
          <h2>Films et séries tendances</h2>
          <h3>
            Films et séries comptabilisant le plus de réactions au cours des
            trois derniers jours !
          </h3>
        </div>
        <div className="film-container">
          {filteredGenre.length ? (
            filteredGenre.map((film) => (
              <FilmCard key={film.titre} film={film} />
            ))
          ) : (
            <p>""</p>
          )}
        </div>
      </main>
    </>
  );
}
