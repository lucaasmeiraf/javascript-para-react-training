import "./style.css"

export default function PlayerScore(points = 0){

    const addPoints = () =>{
        
    }

    return /*html*/`
    <ol class="player-score" data-points = ${points}>
        <li class="pointer">Um</li>
        <li class="pointer">Dois</li>
        <li class="pointer">Tres</li>
    </ol>
    `
}