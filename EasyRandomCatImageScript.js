const button = document.querySelector('button');
const meal_constainer = document.querySelector("#meal");
button.addEventListener('click', () => {
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(res => { 
        document.querySelector('img').style.display = "";
        document.querySelector('img').src = res.file
});
})