import "./style.css";

export default function ArrowDown(currentPlayer = 1){
    return /* html */ `
    <img class="arrow-down"
        data-currentPlayer="${currentPlayer}"
         src="images/IconArrowDown.svg" 
         alt="Icone da seta" />
    `;
}