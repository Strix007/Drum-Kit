<<<<<<< HEAD

// Adding An Event Listener To All The Drums.


var classDrumItem = 0;
var classDrumLength = document.querySelectorAll(".drum").length;
while (classDrumItem < 7) {
    document.querySelectorAll(".drum")[classDrumItem].addEventListener("click", function (){
    })
    classDrumItem++;
}


// Function To Play The Audio Files.


function playAudio() {
    var audio = new Audio("sounds/crash.mp3")
    audio.play();
=======

// Adding An Event Listener To All The Drums.


var classDrumItem = 0;
var classDrumLength = document.querySelectorAll(".drum").length;
while (classDrumItem < 7) {
    document.querySelectorAll(".drum")[classDrumItem].addEventListener("click", playAudio)
    classDrumItem++;
}


// Function To Play The Audio Files.


function playAudio() {
    var audio = new Audio("sounds/crash.mp3")
    audio.play();
>>>>>>> aeb30be85d622defb1a7edd5dc6f86d082ccaec5
}