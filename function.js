const URL_GET_WORD = "https://words.dev-apis.com/word-of-the-day";
const URL_POST_WORD = "https://words.dev-apis.com/validate-word";

var word_arr = [];
var currRow = 0;

const debug_word = document.querySelector(".word");
const boxes = document.querySelectorAll(".grid div");

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

function checkWord() {
    
}