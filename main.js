
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
    infoBoxOne.style.zIndex = "10";
    infoBoxTwo.style.opacity = "0";
    infoBoxTwo.style.zIndex = "1";
    infoBoxThree.style.opacity = "0";
    infoBoxThree.style.zIndex = "1";
    document.body.style.backgroundColor = "darkmagenta";
}

buttonTwo.onclick = function() {
    infoBoxOne.style.opacity = "0";
    infoBoxOne.style.zIndex = "10";
    infoBoxTwo.style.opacity = "1";
    infoBoxTwo.style.zIndex = "10";
    infoBoxThree.style.opacity = "0";
    infoBoxThree.style.zIndex = "1";
    document.body.style.backgroundColor = "black";
}

buttonThree.onclick = function() {
    infoBoxOne.style.opacity = "0";
    infoBoxOne.style.zIndex = "1";
    infoBoxTwo.style.opacity = "0";
    infoBoxTwo.style.zIndex = "1";
    infoBoxThree.style.opacity = "1";
    infoBoxThree.style.zIndex = "10";
    document.body.style.backgroundColor = "sienna";
}