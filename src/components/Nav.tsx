import "../styles/nav.css";

export default function Nav() {
  return (
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
        <input placeholder="Rechercher des titres" type="text" />
        <select /* onChange={} */>
          <option value="">All</option>
          <option value="Film">Film</option>
          <option value="Série">Série</option>
        </select>
      </div>

      <div id="compte">
        <p>Se connecter</p>
        <p>|</p>
        <p>S'inscrire</p>
      </div>
    </nav>
  );
}
