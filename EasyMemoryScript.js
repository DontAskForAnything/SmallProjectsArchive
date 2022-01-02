document.addEventListener('DOMContentLoaded', () => {

const colors = [
    { color: 'red'},
    { color: 'blue'},
    { color: 'pink'},
    { color: 'green'},
    { color: 'yellow'},
    { color: 'orange'},
    { color: 'salmon'},
    { color: 'sandybrown'},

    { color: 'red'},
    { color: 'blue'},
    { color: 'pink'},
    { color: 'green'},
    { color: 'yellow'},
    { color: 'orange'},
    { color: 'salmon'},
    { color: 'sandybrown'}
]

 colors.sort(() => 0.5 - Math.random());

let ChosenCards = [];
let ChosenCardsId = [];
var points = 0;
const arrayofCards = Array.from(document.getElementsByClassName('card'));

function createBorad(){
    for(let i = 0; i < colors.length; i++){
        arrayofCards[i].setAttribute('data-id' , i);
        arrayofCards[i].addEventListener('click', flipCard);
    }
}
function checkPoints(){
    points == arrayofCards.length/2 ? alert("You found all pairs! GG") : 1;
    return;
}
function CheckMatches(){
    if(ChosenCards[0] == ChosenCards[1]){
        alert('You found a match');
        arrayofCards[ChosenCardsId[0]].style.visibility = "hidden";
        arrayofCards[ChosenCardsId[1]].style.visibility = "hidden";
        points++;
        setTimeout(checkPoints, 500);
    }else{
        alert('Try again');
        arrayofCards[ChosenCardsId[0]].addEventListener('click', flipCard);
        arrayofCards[ChosenCardsId[1]].addEventListener('click', flipCard);
        arrayofCards[ChosenCardsId[0]].style.backgroundColor = '#eee';
        arrayofCards[ChosenCardsId[1]].style.backgroundColor = '#eee';

    }

    ChosenCardsId = [];
    ChosenCards = [];
}
function flipCard(){
    let cardId = this.getAttribute('data-id');
    this.style.backgroundColor = colors[cardId].color;
    ChosenCards.push(colors[cardId].color);
    ChosenCardsId.push(cardId);
    this.removeEventListener('click', flipCard);
    ChosenCards.length == 2 ? setTimeout(CheckMatches, 50) : 1;
}

createBorad();
});

