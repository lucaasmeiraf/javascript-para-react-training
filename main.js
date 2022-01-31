import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

// Import do CardGame para acessar seu conteudo index.js que contem um html
import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";

const $root = document.querySelector("#root");
// Atribui o conteudo(HTML) q esta em CardGame,
// executando a func pelo nome do import
$root.insertAdjacentHTML(
    "beforeend",
     `
     ${PlayerName('Player1')}
     ${PlayerName('Player2')}
     ${BoardGame(6)}
     `
    ); 