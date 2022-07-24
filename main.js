
// Array of words

const words = [
    "Hello",
    "Program",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destruct",
    "Paradigm",
    "Styling",
    "Cascade",
    "Document",
    "Coding",
    "Funny",
    "Working",
    "Depend",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
]

// settings levels
const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
}

// Default levels
const defauletLevelsName = "Normal"; // change level from here
const defauletLevelsSeconds = lvls[defauletLevelsName];

// catch Selectors 
let lvlNameSpan = document.querySelector(".message .lvl")
secondSpan = document.querySelector(".message .seconds"),
    startButton = document.querySelector(".start"),
    theWord = document.querySelector(".the-word"),
    input = document.querySelector(".input"),
    uncomeWords = document.querySelector(".uncoming"),
    timeLeftSpan = document.querySelector(".time span"),
    scoreGot = document.querySelector(".score .got"),
    scoreTotal = document.querySelector(".control .score .total"),
    finishMessage = document.querySelector(".finish"),

    // settings levels Name + Seconds + Score

    lvlNameSpan.innerHTML = defauletLevelsName;
secondSpan.innerHTML = defauletLevelsSeconds;
scoreTotal.innerHTML = words.length;
timeLeftSpan.innerHTML = defauletLevelsSeconds;

// disable past evets
input.onpaste = () => false;

// Start Game

startButton.onclick = function () {
    startButton.style.transform = "translate(-200%)";
    input.focus();
    // generate word function
    genWord();
}

function genWord() {
    // get random word from Array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // get word Index
    let wordIndex = words.indexOf(randomWord);
    // Remove from array
    words.splice(wordIndex, 1);
    // show the random word
    theWord.innerHTML = randomWord;
    // umpty uncoming words
    uncomeWords.innerHTML = "";
    // generate Code
    for (let i = 0; i < words.length; i++) {
        // create
        let div = document.createElement("div");
        let text = document.createTextNode(words[i])
        div.appendChild(text);
        uncomeWords.appendChild(div);
    }
    // call start play funtion
    startPlay();
}

function startPlay() {
    timeLeftSpan.innerHTML = defauletLevelsSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0") {
            // Stop timer
            clearInterval(start);

            // compare word
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = "";
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    genWord();
                } else {
                    let span = document.createElement("span");
                    span.className = "good"
                    let spanText = document.createTextNode(`Great Job Your Scour : ${scoreGot.innerHTML}`);
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                }
            } else {
                let span = document.createElement("span");
                span.className = "bad"
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    }, 1000)
}
