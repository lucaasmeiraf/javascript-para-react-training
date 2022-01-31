import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

// Import do CardGame para acessar seu conteudo index.js que contem um html
import CardGame from "./src/components/CardGame";
import BoardGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");
// Atribui o conteudo(HTML) q esta em CardGame,
// executando a func pelo nome do import
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame); 