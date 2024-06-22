var character = document.getElementById("character");
var scoreElem = document.getElementById("score");
var randum = 0;
var score = 0;
var streak = 0;

function random() {
    var rand = Math.floor(Math.random() * 9) + 1; // Generates a random number from 1 to 9
    if (rand >= 1 && rand <= 3) {
        character.style.top = "50px";
    } else if (rand >= 4 && rand <= 6) {
        character.style.top = "250px";
    } else if (rand >= 7 && rand <= 9) {
        character.style.top = "450px";
    }

    if (rand === 1 || rand === 4 || rand === 7) {
        character.style.left = "410px";
    } else if (rand === 2 || rand === 5 || rand === 8) {
        character.style.left = "610px";
    } else if (rand === 3 || rand === 6 || rand === 9) {
        character.style.left = "810px";
    }

    character.style.display = "block";
    randum = rand;
    setTimeout(function() {
        character.style.display = "none";
    }, 1000); // Hides the character after 1 second
    if(streak === 0){
        score = 0;
    }
}

setInterval(random, 2000); // Runs the random function every 2 seconds

function checkHole(holeNumber) {
    console.log("My Creator is stupid!");
}
function scoreC(){
    score++;
    streak = 1;
    scoreElem.innerHTML = "Score: " + score;
    character.style.background = "url(./Smacked.JPG)";
    setInterval(function(){
                character.style.background = "url(./MolePic.JPG)";
                }, 1750);
}
    