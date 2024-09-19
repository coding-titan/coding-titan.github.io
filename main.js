
// Variable declarations
let infoBoxOne = document.getElementById("project-box-one")
let infoBoxTwo = document.getElementById("project-box-two")
let infoBoxThree = document.getElementById("project-box-three")
let buttonOne = document.getElementById("button-one")
let buttonTwo = document.getElementById("button-two")
let buttonThree = document.getElementById("button-three")

// Buttons
buttonOne.onclick = function() {
    infoBoxOne.style.opacity = "1";
    infoBoxTwo.style.opacity = "0";
    infoBoxThree.style.opacity = "0";
}

buttonTwo.onclick = function() {
    infoBoxOne.style.opacity = "0";
    infoBoxTwo.style.opacity = "1";
    infoBoxThree.style.opacity = "0";
}

buttonThree.onclick = function() {
    infoBoxOne.style.opacity = "0";
    infoBoxTwo.style.opacity = "0";
    infoBoxThree.style.opacity = "1";
}