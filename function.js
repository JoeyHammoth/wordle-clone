const URL_GET_WORD = "https://words.dev-apis.com/word-of-the-day";
const URL_POST_WORD = "https://words.dev-apis.com/validate-word";

var word_arr = [];
var currRow = 0;

const debug_word = document.querySelector(".word");
const boxes = document.querySelectorAll(".grid div");
const warnText = document.querySelector(".warning");

document.addEventListener("keydown", function (event) {
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

    debug_word.innerText = word_arr;
    changeBox();
})

function changeBox() {
    for (let i = 0; i < boxes.length; i++) {
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
    const promise = await fetch(URL_POST_WORD, {
        method: "POST",
        body: JSON.stringify({"word": word}) // body is what is sent to the API
    });
    const processed = await promise.json();
    if (processed.validWord) {
        warnText.style.display = "none";
    } else {
        warnText.style.display = "block";
    }
}

