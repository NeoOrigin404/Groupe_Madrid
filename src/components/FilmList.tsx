import { useState } from "react";
import FilmCard from "./FilmCard.tsx";
import "../styles/nav.css";
import "../styles/filmcard.css";
import "../styles/footer.css";

const filmsSelection = [
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F340965%2Fposters%2F674170a914b85.jpg&w=640&q=75",
    titre: "Carry-On",
    duree: "1h59 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F367%2Fposters%2F6432e232e9290_t.jpg&w=384&q=75",
    titre: "Rogue One: A Star Wars Story",
    duree: "2h14 -",
    annee: "2016",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F167725%2Fposters%2F6490ab9ded239_t.jpg&w=384&q=75",
    titre: "Kraven The Hunter",
    duree: "2h07 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F330830%2Fposters%2F6612ef0f3b9d6_t.jpg&w=384&q=75",
    titre: "Joker: Folie à Deux",
    duree: "2h28 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F346677%2Fposters%2F665dd0bdb7097.jpg&w=256&q=75",
    titre: "Venom: The Last Dance",
    duree: "1h49 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F73592%2Fposters%2F67079f18779c0.jpg&w=256&q=75",
    titre: "Gladiator II",
    duree: "2h28 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F350067%2Fposters%2F6672154617ec9.jpg&w=256&q=75",
    titre: "Smile 2",
    duree: "2h12 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F349134%2Fposters%2F657bdaefed20f.jpg&w=256&q=75",
    titre: "Civil War",
    duree: "1h49 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F349288%2Fposters%2F66b30606677b2.jpg&w=256&q=75",
    titre: "Alien : Romulus",
    duree: "2h -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F357242%2Fposters%2F671ae6ac0e39a_t.jpg&w=384&q=75",
    titre: "Heretic",
    duree: "1h50 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F136493%2Fposters%2F65c973c2e4b95_t.jpg&w=384&q=75",
    titre: "Wicked: Part One",
    duree: "2h41 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F355643%2Fposters%2F6726523f9a7e8_t.jpg&w=384&q=75",
    titre: "The Substance",
    duree: "2h18 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F353754%2Fposters%2F673e1f46c5b48_t.jpg&w=384&q=75",
    titre: "Vaiana 2",
    duree: "1h40 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F49196%2Fposters%2F6629d3a324504_t.jpg&w=384&q=75",
    titre: "Deadpool 3",
    duree: "2h08 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F344306%2Fposters%2F65b390a802573_t.jpg&w=384&q=75",
    titre: "Immaculée",
    duree: "1h29 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F358321%2Fposters%2F66ae8c958ddc3_t.jpg&w=384&q=75",
    titre: "Subservience",
    duree: "1h46 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F355922%2Fposters%2F66d2dcfde798d_t.jpg&w=384&q=75",
    titre: "Trap",
    duree: "1h45 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F355404%2Fposters%2F671dfd92870e8_t.jpg&w=384&q=75",
    titre: "Juré n°2",
    duree: "1h54 -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fmovie%2F362267%2Fposters%2F6755e0f69f3a5_t.jpg&w=384&q=75",
    titre: "An Evening with Dua Lipa",
    duree: "49 min -",
    annee: "2024",
    genre: "film",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fposters%2F5d1bfa6c30c50.jpg&w=256&q=75",
    titre: "Yellowstone",
    nbsaisons: "Saison 5",
    annee: "2018 -",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F367118%2Fposters%2F673bd923f1637.jpg&w=256&q=75",
    titre: "Dune : Prophecy",
    annee: "2024 -",
    nbsaisons: "Saison 1",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F371028%2Fposters%2F617f6a8c59e8f.jpg&w=256&q=75",
    titre: "Arcane",
    annee: "2021 -",
    nbsaisons: "Saison 2",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F453280%2Fposters%2F675c4b518d9da.jpg&w=256&q=75",
    titre: "Secret Level",
    annee: "2024 -",
    nbsaisons: "Saison 1",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F441315%2Fposters%2F67520ffb9601a.jpg&w=256&q=75",
    titre: "Black Doves",
    annee: "2024 -",
    nbsaisons: "En cours",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F74796%2Fposters%2F66d7d367dc8fd.jpg&w=256&q=75",
    titre: "Bleach",
    annee: "2004 -",
    nbsaisons: "En cours",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F430780%2Fposters%2F6754c7b0aee85_t.jpg&w=384&q=75",
    titre: "Dexter: Original Sin",
    annee: "2024 -",
    nbsaisons: "En cours",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fposters%2F161511-1_t.jpg&w=384&q=75",
    titre: "Shameless (US)",
    annee: "2011 -",
    nbsaisons: "Terminée",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F432708%2Fposters%2F66a04d124588c_t.jpg&w=384&q=75",
    titre: "Senna",
    annee: "2024 -",
    nbsaisons: "Terminée",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fposters%2F293088-6_t.jpg&w=384&q=75",
    titre: "One-Punch Man",
    annee: "2015 -",
    nbsaisons: "Terminée",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fposters%2F321060-2_t.jpg&w=384&q=75",
    titre: "The OA",
    annee: "2016 -",
    nbsaisons: "Terminée",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fposters%2F153021-58_t.jpg&w=384&q=75",
    titre: "The Walking Dead",
    annee: "2010 -",
    nbsaisons: "Terminée",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fposters%2F80379-18_t.jpg&w=384&q=75",
    titre: "The Big Bang Theory",
    annee: "2007 -",
    nbsaisons: "Terminée",
    genre: "série",
  },
  {
    affiche:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fseries%2F268592%2Fposters%2F5ec0923cb5ac1_t.jpg&w=384&q=75",
    titre: "The 100",
    annee: "2014 -",
    nbsaisons: "Terminée",
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
    .filter((film) => film.titre.toLowerCase().includes(titre.toLowerCase()));

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
            <p>Pas de résultat</p>
          )}
        </div>
      </main>
      <footer>
        <h2>© 2024, MAD MADRID, a Wild Wilder Company</h2>
      </footer>
    </>
  );
}
