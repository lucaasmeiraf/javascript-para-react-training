import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

// Import do CardGame para acessar seu conteudo index.js que contem um html
import ScoreBoard from "./src/objects/ScoreBoard";
import BoardGame from "./src/objects/BoardGame";


const $root = document.querySelector("#root");
// Atribui o conteudo(HTML) q esta em CardGame,
// executando a func pelo nome do import
$root.insertAdjacentHTML(
    "beforeend",
     `
     ${ScoreBoard()}
     ${BoardGame(6)}
     `
    ); 