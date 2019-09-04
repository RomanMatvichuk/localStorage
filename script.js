var inputTxt = document.getElementById("inputTxt");
var btnSave = document.getElementById("btnSave");
var storedBlock = document.getElementById("storedBlock");
var storedTxt = document.getElementById("storedTxt");
var btnDelete = document.getElementById("btnDelete");

if (localStorage.length !== 0){
    storedTxt.innerText = localStorage.getItem("storedTxt");
    storedBlock.style.display = "block";
}

btnSave.onclick = function() {
    if (inputTxt.value !== ""){
        localStorage.setItem("storedTxt", inputTxt.value);
        storedTxt.innerText = inputTxt.value;
        inputTxt.value = "";
        storedBlock.style.display = "block";
    }
}

btnDelete.onclick = function() {
    localStorage.clear();
    storedBlock.style.display = "none";
}