const URL_GET_WORD = "https://words.dev-apis.com/word-of-the-day";
const URL_POST_WORD = "https://words.dev-apis.com/validate-word";

let word_arr = [];
let currRow = 0;
let hasWon = false;

const debug_row = document.querySelector(".row");
const debug_word = document.querySelector(".word");
const boxes = document.querySelectorAll(".grid div");
const warnText = document.querySelector(".warning");
const loading = document.querySelector(".load");
const checkbox = document.querySelector(".debug-mode");
const titleText = document.querySelector(".title");

function checkDebug() {
    if (checkbox.checked) {
        debug_row.style.display = "block";
        debug_word.style.display = "block";
    } else {
        debug_row.style.display = "none";
        debug_word.style.display = "none";
    }
}

document.addEventListener("keydown", function (event) {
    if (hasWon) {
        return;
    }
    if (event.key == "Backspace") {
        if (currRow == 0 && word_arr.length <= 5 && word_arr.length > 0) {
            word_arr.pop();
        }
        if (currRow == 1 && word_arr.length <= 10 && word_arr.length > 5) {
            word_arr.pop();
        }
        if (currRow == 2 && word_arr.length <= 15 && word_arr.length > 10) {
            word_arr.pop();
        }
        if (currRow == 3 && word_arr.length <= 20 && word_arr.length > 15) {
            word_arr.pop();
        }
        if (currRow == 4 && word_arr.length <= 25 && word_arr.length > 20) {
            word_arr.pop();
        }
        if (currRow == 5 && word_arr.length <= 30 && word_arr.length > 25) {
            word_arr.pop();
        }
    }

    if (event.key >= "a" && event.key <= "z") {
        if (currRow == 0 && word_arr.length < 5 && word_arr.length >= 0) {
            word_arr.push(event.key.toUpperCase());
        }
        if (currRow == 1 && word_arr.length < 10 && word_arr.length >= 5) {
            word_arr.push(event.key.toUpperCase());
        }
        if (currRow == 2 && word_arr.length < 15 && word_arr.length >= 10) {
            word_arr.push(event.key.toUpperCase());
        }
        if (currRow == 3 && word_arr.length < 20 && word_arr.length >= 15) {
            word_arr.push(event.key.toUpperCase());
        }
        if (currRow == 4 && word_arr.length < 25 && word_arr.length >= 20) {
            word_arr.push(event.key.toUpperCase());
        }
        if (currRow == 5 && word_arr.length < 30 && word_arr.length >= 25) {
            word_arr.push(event.key.toUpperCase());
        }
    }

    if (event.key == "Enter") {
        if (currRow == 0 && word_arr.length == 5) {
            validateWord(getWord());
        }
        if (currRow == 1 && word_arr.length == 10) {
            validateWord(getWord());
        }
        if (currRow == 2 && word_arr.length == 15) {
            validateWord(getWord());
        }
        if (currRow == 3 && word_arr.length == 20) {
            validateWord(getWord());
        }
        if (currRow == 4 && word_arr.length == 25) {
            validateWord(getWord());
        }
        if (currRow == 5 && word_arr.length == 30) {
            validateWord(getWord());
        }
    }

    debug_word.innerText = `word_arr: ${word_arr}`
    changeBox();
})

function changeBox() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.animation = "";
        if (typeof word_arr[i] != 'undefined') {
            boxes[i].innerText = word_arr[i];
        } else {
            boxes[i].innerText = "";
        }
    }
}

function getWord() {
    var output = "";
    if (currRow == 0) {
        output = word_arr.slice(0, 5).join('');
    } else if (currRow == 1) {
        output = word_arr.slice(5, 10).join('');
    } else if (currRow == 2) {
        output = word_arr.slice(10, 15).join('');
    } else if (currRow == 3) {
        output = word_arr.slice(15, 20).join('');
    } else if (currRow == 4) {
        output = word_arr.slice(20, 25).join('');
    } else {
        output = word_arr.slice(25, 30).join('');
    }
    return output;
}

// Post word with the post URL via fetch with post config object.
// Get the valid word bool from processed promise.
async function validateWord(word) {
    loading.style.display = "block"
    const promise = await fetch(URL_POST_WORD, {
        method: "POST",
        body: JSON.stringify({"word": word}) // body is what is sent to the API
    });
    const processed = await promise.json();
    if (processed.validWord) {
        warnText.style.display = "none";
        correctingWord(word);
    } else {
        warnText.style.display = "block";
        animateWrong();
    }
}

function animateWrong() {
    if (currRow == 0) {
        for (let i = 0; i < 5; i++) {
            boxes[i].style.animation = "wrong 1s linear";
        }
    }
    if (currRow == 1) {
        for (let i = 5; i < 10; i++) {
            boxes[i].style.animation = "wrong 1s linear";
        }
    }
    if (currRow == 2) {
        for (let i = 10; i < 15; i++) {
            boxes[i].style.animation = "wrong 1s linear";
        }
    }
    if (currRow == 3) {
        for (let i = 15; i < 20; i++) {
            boxes[i].style.animation = "wrong 1s linear";
        }
    }
    if (currRow == 4) {
        for (let i = 20; i < 25; i++) {
            boxes[i].style.animation = "wrong 1s linear";
        }
    }
    if (currRow == 5) {
        for (let i = 25; i < 30; i++) {
            boxes[i].style.animation = "wrong 1s linear";
        }
    }
    loading.style.display = "none";
}

async function correctingWord(word) {
    const promise = await fetch(URL_GET_WORD);
    const processed = await promise.json();
    if (word.toLowerCase() == processed.word) {
        hasWon = true;
        titleText.style.animation = "win 2s infinite linear";
        alert("Congratulations!!! You got it right!");
    } 

    if (currRow == 5) {
        alert(`You Loose! The word is ${processed.word}.`);
    }
    compareWord(word.toLowerCase(), processed.word);
}

function compareWord(answer, solution) {
    const answerArr = answer.split("");
    const solArr = solution.split("");
    const solArrCpy = [...solArr];
    for (let i = 0; i < 5; i++) {
        const index = solArrCpy.indexOf(answerArr[i]);
        if (answerArr[i] == solArr[i]) {
            boxes[i + (currRow * 5)].style.color = "white";
            boxes[i + (currRow * 5)].style.backgroundColor = "green";
            if (index > -1) {
                solArrCpy.splice(index, 1);
            }
            console.log(solArrCpy);
        } else if (solArrCpy.includes(answerArr[i])) {
            boxes[i + (currRow * 5)].style.color = "white";
            boxes[i + (currRow * 5)].style.backgroundColor = "orange";
            if (index > -1) {
                solArrCpy.splice(index, 1);
            }
            console.log(solArrCpy);
        } else {
            boxes[i + (currRow * 5)].style.color = "white";
            boxes[i + (currRow * 5)].style.backgroundColor = "grey";
        }
    }
    currRow += 1;
    loading.style.display = "none";
    debug_row.innerText = `currRow: ${currRow}`;
}

checkbox.addEventListener("change", function () {
    checkDebug();
});