
// Variable declarations
let infoBoxOne = document.getElementById("project-box-one")
let infoBoxTwo = document.getElementById("project-box-two")
let infoBoxThree = document.getElementById("project-box-three")
let buttonOne = document.getElementById("button-one")
let buttonTwo = document.getElementById("button-two")
let buttonThree = document.getElementById("button-three")

// Buttons
buttonOne.onclick = function() {
    infoBoxOne.style.display = "grid";
    infoBoxTwo.style.display = "none";
    infoBoxThree.style.display = "none";
}

buttonTwo.onclick = function() {
    infoBoxOne.style.display = "none";
    infoBoxTwo.style.display = "grid";
    infoBoxThree.style.display = "none";
}

buttonThree.onclick = function() {
    infoBoxOne.style.display = "none";
    infoBoxTwo.style.display = "none";
    infoBoxThree.style.display = "grid";
}