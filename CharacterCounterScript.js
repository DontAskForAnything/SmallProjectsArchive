document.querySelector("textarea").value = window.localStorage.getItem('text');
document.querySelector("textarea").oninput = function(){ 
    let wordsCount = 0;
    var temp = document.querySelector("textarea").value
    if(temp.trim().split(/\s+/)[0] == ""){ wordsCount = 0; }
    else{        wordsCount = temp.trim().split(/\s+/).length;}
    document.querySelector("#words-count").innerHTML = "Words: &nbsp" + wordsCount;
    document.querySelector("#characters-count").innerHTML = "Characters: &nbsp" + temp.length;
    document.querySelector("#spaces-count").innerHTML = "Spaces: &nbsp" + (temp.split(" ").length - 1);
    window.localStorage.setItem('text' , temp);
}