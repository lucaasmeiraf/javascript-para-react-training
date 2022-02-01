import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data';

function BoardGame(amountCards){
    const flipAndHideCards = ($activeCards) =>{
        $activeCards.forEach((card) => card.classList.remove('-active'));
    }

    const swapPlayer = () => {
        const $arrowDown = document.querySelector('.arrow-down');
        const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
        $arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1);
    }

    window.boardGame = {};
    window.boardGame.handleClick = () =>{
        const $boardGame = document.querySelector('.board-game');        const $activeCards = $boardGame.querySelectorAll('.card-front-back.-active');

        if($activeCards.length === 2){
            setTimeout(() => {
                flipAndHideCards($activeCards);
                swapPlayer();
            }, 1000);
        }
    }
    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = htmlCardsList.join('');

    return /*html*/`
    <section class="board-game" onClick="boardGame.handleClick()">
    ${$htmlCards}
    </section>`;
}

export default BoardGame;