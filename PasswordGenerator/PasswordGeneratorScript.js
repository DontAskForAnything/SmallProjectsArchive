// Variables that will be used for random char from string
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

//  Functions that returns random chars from variables
function upperLettersAdd(){
	return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function lowerLettersAdd(){
	return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function numbersAdd(){
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function symbolsAdd(){
	return symbols[Math.floor(Math.random() * symbols.length)];
}

//This function creates a temporary array in which it stores the characters returned by the functions above,
// which are executed depending on the user's checkbox settings
// At the end, function return random char from this array
function addSymbols(){
	var temp = [];
	if(document.querySelector('#lowercase').checked){
		temp.push(lowerLettersAdd());
	}	
	if (document.querySelector('#uppercase').checked){
		temp.push(upperLettersAdd());
	}
	if(document.querySelector('#numbers').checked){
		temp.push(numbersAdd());
	}
	if(document.querySelector('#symbols').checked){
		temp.push(symbolsAdd());
	}
	return temp[Math.floor(Math.random() * temp.length)];
}

// Main function from which all other starts
function generatePassword() {
	// Create variables
	const length = document.querySelector('#len').value;
	let password = "";
	// Checks if minimum one checkbox is checked if so, continue, if not, sets generated password as error value
	if (!document.querySelector('#lowercase').checked 
		&& !document.querySelector('#uppercase').checked
		&& !document.querySelector('#numbers').checked
		&& !document.querySelector('#symbols').checked)
	{
		document.querySelector('#generated-password').value = "You must select at least one character set!";
		return;
	}
	// Generates characters until it reaches the length specified by the user and stores it in the password variable. 
	for(var i = 0; i < length; i++) {
		password += addSymbols();
	}

	// Sets generated password value to new generated password
	document.querySelector('#generated-password').value = password;
}

// Adds event listener to generate button that on click will start generatePassword function
document.querySelector("#generate-button").addEventListener("click" , generatePassword);

// Adds event listener on copy box that on click will copy text from generated password field to user clipboard
document.querySelector("#box-GP").addEventListener("click" , () => {
		navigator.clipboard.writeText(document.querySelector("#generated-password").value).then(
			// Functions above check if copied was successful or not
			function() {			
				alert("Copied successful!");
			}, 
			function(err) {
				alert('Async: Could not copy text: ', err);
		});
});
