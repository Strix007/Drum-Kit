
// Addomg A KeyDown Event Listener To The Whole Document.

document.addEventListener("keydown", function(event){
    playAudio(event.key);
    buttonAnimation(event.key);
})

// Adding A Click Event Listener To All The Buttons.

var classDrumItem = 0;
while (classDrumItem < 7) {
    document.querySelectorAll(".drum")[classDrumItem].addEventListener("click", function(){
        var buttonPress = this.innerText;
        playAudio(buttonPress);
        buttonAnimation(buttonPress); 
    })
    classDrumItem++
}

// Detecting Key-Presses And Button Clicks And Responding.

function playAudio(key) {
    var buttonPress = this.innerText;

    // Adding A Switch-Case For Clicks And Key-Presses.

    switch (key) {
        case "w": var tomOne = new Audio("sounds/tom-1.mp3");
            tomOne.play();
            break;
        case "a": var tomTwo = new Audio("sounds/tom-2.mp3");
            tomTwo.play();
            break
        case "s": var tomThree = new Audio("sounds/tom-3.mp3");
            tomThree.play();
            break;
        case "d": var tomFour = new Audio("sounds/tom-4.mp3");
            tomFour.play();
            break;
        case "j": var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k": var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l": var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(buttonPress);
            break;
    }
}

// Animation For The Buttons.

function buttonAnimation (currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.toggle("pressed");
    setTimeout(
        function (){
            activeKey.classList.toggle("pressed");
        }, 100
    )
}