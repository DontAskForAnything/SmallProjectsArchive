const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

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
function generatePassword() {
	const length = document.querySelector('#len').value;
	let password = "";
	if (!document.querySelector('#lowercase').checked 
		&& !document.querySelector('#uppercase').checked
		&& !document.querySelector('#numbers').checked
		&& !document.querySelector('#symbols').checked)
	{
		document.querySelector('#generated-password').value = "You must select at least one character set!";
		return;
	}
	for(var i = 0; i < length; i++) {
		password += addSymbols();
	}
	document.querySelector('#generated-password').value = password;
}
document.querySelector("#generate-button").addEventListener("click" , generatePassword);

document.querySelector("#box-GP").addEventListener("click" , () => {
		navigator.clipboard.writeText(document.querySelector("#generated-password").value).then(
		function() {			
			alert("Copied successful!");
		}, 
		function(err) {
		console.error('Async: Could not copy text: ', err);
		});
});
