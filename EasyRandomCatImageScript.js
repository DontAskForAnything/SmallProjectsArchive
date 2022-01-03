// Variable declaration
const button = document.querySelector('button');
const meal_constainer = document.querySelector("#meal");

// Adding event listener on click to button
button.addEventListener('click', () => {

    // When button clicked, it fetches data from api
    fetch('https://aws.random.cat/meow')

    // After fetching string data changes to json format
    .then(res => res.json())

     // After format changes, changes img attribute display and sets img src as a link from api
    .then(res => { 
        document.querySelector('img').style.display = "";
        document.querySelector('img').src = res.file
});
})