# Word Masters

<img src="https://github.com/JoeyHammoth/wordle-clone/blob/main/logo.png" alt="Logo" height=500px>

Word Masters is a web-based word game inspired by the popular game Wordle. This project is a built based on the project instructions created by [Brian Holt](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/talking-to-servers/project) on Frontend Masters, 
leveraging his API for word validation and fetching the word of the day.

## Overview

In Word Masters, players have six attempts to guess a secret five-letter word. With each guess, the game provides color-coded feedback to help you narrow down the answer:
- **Green:** Correct letter in the correct position.
- **Orange:** Correct letter in the wrong position.
- **Grey:** Letter not present in the word.

A debug mode is also available to display additional game data if needed.

## Features

- **Word Guessing:** Input your guesses via your keyboard.
- **Real-Time API Validation:** Each guess is validated using the API endpoints.
- **Interactive Grid:** A 6x5 grid provides visual feedback for each guess.
- **Debug Mode:** Toggle extra information for troubleshooting or learning purposes.
- **Responsive:** Built with HTML, CSS, and JavaScript for a seamless web experience.

## How to Play

1. Open the `index.html` file in your web browser.
2. Start typing to fill the current row (each row holds five letters).
3. Press "Enter" to submit your guess.
4. Use "Backspace" to remove the last letter entered.
5. After submitting, each letter will be color-coded:
   - **Green:** Correct letter and position.
   - **Orange:** Correct letter but wrong position.
   - **Grey:** Incorrect letter.
6. Keep guessing until you find the correct word or use all six attempts!

## Getting Started

To run Word Masters locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/JoeyHammoth/wordle-clone.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd wordle-clone
   ```

3. **Open `index.html` in your Browser:**

   Simply open the file with your preferred web browser. An internet connection is required as the game fetches the word of the day and validates guesses using the external API.

## API Reference

This project uses two endpoints provided by Brian Holt’s API:

- **Get Word of the Day:**  
  [https://words.dev-apis.com/word-of-the-day](https://words.dev-apis.com/word-of-the-day)

- **Validate Word:**  
  [https://words.dev-apis.com/validate-word](https://words.dev-apis.com/validate-word)

These endpoints are integrated in the project’s JavaScript code to fetch the daily word and validate player guesses in real time.

## Credits

- **Brian Holt:** For his project instructions and API that serves as the foundation for this project. More details can be found on his [project page](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/talking-to-servers/project).
- **JoeyHammoth:** Project implementation and contributions under the MIT License.

## License

This project is licensed under the MIT License.
