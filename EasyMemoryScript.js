// Start when the initial HTML documnet has been completely loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

// Our array with cards
const CardArray = [
    { color: 'red'},
    { color: 'blue'},
    { color: 'pink'},
    { color: 'green'},
    { color: 'yellow'},
    { color: 'orange'},
    { color: 'salmon'},
    { color: 'sandybrown'},

    // Pairs for cards above
    { color: 'red'},
    { color: 'blue'},
    { color: 'pink'},
    { color: 'green'},
    { color: 'yellow'},
    { color: 'orange'},
    { color: 'salmon'},
    { color: 'sandybrown'}
]

// Randomizes the board if it didn't, the order of the cards would be as above, so ordered, and we don't want this
 CardArray.sort(() => 0.5 - Math.random());

// Create some arrays that'll store some temp variables
let ChosenCards = [];
let ChosenCardsId = [];

// Create a variable that'll store our points
var points = 0;

// Create array that will store all created divs with class 'card'
var arrayofCards; 

function createDivs(){

    // This for loop creates div that are our "memory cards". Amount of card depends on our CardArray length
    for(let i = 0; i < CardArray.length; i++){
        var element = document.createElement("div");
        element.classList.add("card");
        document.querySelector('.game-container').appendChild(element);
    }
    
    // Adds variables to arrayofCards created in line 37
    arrayofCards = Array.from(document.getElementsByClassName('card'));

}


// Function that add data-id to every div that is in arrayofCards. Data-id will be useful for  defining with color card should have
function createBorad(){
    createDivs();
    for(let i = 0; i < CardArray.length; i++){
        arrayofCards[i].setAttribute('data-id' , i);
        arrayofCards[i].addEventListener('click', flipCard);
    }
}

// Function that check if our points are equal to amount of pairs
function checkPoints(){
    points == arrayofCards.length/2 ? alert("You found all pairs! GG") : 1;
}

// Function that checks Matches 
//if found match add style vibility to thoes cards and add points
// if not delete style 
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
        arrayofCards[ChosenCardsId[0]].style = '';
        arrayofCards[ChosenCardsId[1]].style = '';
    }
    
    // also clear our temp variables 
    ChosenCardsId = [];
    ChosenCards = [];
}

// Function that "Flip Card" so basically show our hidden color
function flipCard(){
    let cardId = this.getAttribute('data-id');
    this.style.backgroundColor = CardArray[cardId].color;
    ChosenCards.push(CardArray[cardId].color);
    ChosenCardsId.push(cardId);
    this.removeEventListener('click', flipCard);
    ChosenCards.length == 2 ? setTimeout(CheckMatches, 50) : 1;
}

// Executes "createBorad" function
createBorad();
});

