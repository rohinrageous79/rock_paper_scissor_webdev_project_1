# ✊✋✌️ Rock Paper Scissors

A clean, minimalist Rock Paper Scissors game that runs entirely in the browser. Pick your move, see what the computer chose, and keep track of the score across rounds. Built with vanilla HTML, CSS, and JavaScript, with no frameworks and no dependencies.

---

## 🔗 Live Demo

👉 **[Play it here](https://rohinrageous79.github.io/rock_paper_scissor_webdev_project_1/pp4.html)**

---

## ✨ Features

- **Play instantly**: click Rock, Paper, or Scissors to start a round
- **Random computer opponent**: each move has an equal 1-in-3 chance
- **Move display**: see exactly what you and the computer played each round
- **Live scoreboard**: the score updates after every win or loss
- **Tie handling**: ties are announced and don't affect either score
- **One-click reset**: clears the scores and board for a fresh game
- **Dark theme UI** with emoji-style buttons

## 🎮 How to Play

1. Click one of the three buttons: ✊ Rock, ✋ Paper, or ✌️ Scissors.
2. The computer picks its move at random.
3. The winner is decided using the classic rules:
   - Rock beats Scissors
   - Paper beats Rock
   - Scissors beats Paper
4. The result and both moves appear on screen, and the scoreboard updates.
5. Press **RESET** to start over.

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure and game layout |
| CSS3 | Styling, flexbox layout, dark theme |
| JavaScript (ES6) | Game logic, event handling, DOM updates |

## 📁 Project Structure

```
rock_paper_scissor_webdev_project_1/
├── pp4.html     # Game markup
├── ppr4.css     # Styles
├── pp4.js       # Game logic
└── README.md
```

## 🚀 Getting Started

No installation or build step is needed.

```bash
# 1. Clone the repository
git clone https://github.com/rohinrageous79/rock_paper_scissor_webdev_project_1.git

# 2. Move into the project folder
cd rock_paper_scissor_webdev_project_1

# 3. Open the game in your browser
open pp4.html        # macOS
start pp4.html       # Windows
xdg-open pp4.html    # Linux
```

Or simply double-click `pp4.html` to open it in your browser.

> **Note:** The button icons are loaded from an external URL, so an internet connection is needed for them to display.

## 🧠 How It Works

The game logic lives in `pp4.js` and is split into two small functions:

- **`computerChoice()`** generates a random number between 0 and 1 and maps it to rock, paper, or scissors, with each outcome equally likely.
- **`playGame(playerMove)`** compares the player's move with the computer's and returns an object containing the result (`tie`, `you win`, or `you lose`) and the computer's move.

Each button's click handler calls `playGame()`, updates the score variables, and refreshes the result, moves, and score text on the page.

---

⭐ If you enjoyed this project, consider giving it a star!