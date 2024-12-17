import "../styles/nav.css";

export default function Nav() {
  return (
    <nav>
      <div>
        <h1>MAD MADRID</h1>
      </div>

      <div id="tri">
        <p>Séries</p>

        <p>Films</p>

        <p>Genres</p>
      </div>

      <div id="search">
        <input placeholder="Rechercher un film ou une série..." type="text" />
        <button type="button">Rechercher</button>
      </div>

      <div id="compte">
        <p>Se connecter</p>

        <p>S'inscrire</p>
      </div>
    </nav>
  );
}
