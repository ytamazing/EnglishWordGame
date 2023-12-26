const words = [
  "apple", "banana", "orange", "grape", "melon",
  "peach", "strawberry", "blueberry", "pineapple", "watermelon",
  "kiwi", "mango", "cherry", "lemon", "lime",
  "coconut", "papaya", "apricot", "pear", "plum",
  "fig", "nectarine", "tangerine", "cantaloupe", "dragonfruit"
];

let currentWordIndex = 0;
let correctAnswers = 0;

function displayNextWord() {
  if (currentWordIndex < words.length) {
    let currentWord = words[currentWordIndex];
    document.getElementById('scrambleWord').innerText = scrambleWord(currentWord);
    document.getElementById('result').innerText = "";
    document.getElementById('userInput').value = "";
    document.getElementById('remaining').innerText = `Words to go: ${words.length - currentWordIndex}`;
    document.getElementById('feedback').innerText = ""; // Clear previous feedback
  } else {
    endGame();
  }
}

function checkGuess() {
  const userGuess = document.getElementById('userInput').value.toLowerCase();
  const currentWord = words[currentWordIndex];

  if (userGuess === currentWord) {
    document.getElementById('result').innerText = "Correct!";
    correctAnswers++;
    document.getElementById('feedback').innerText = ""; // Clear previous feedback
  } else {
    document.getElementById('result').innerText = `Wrong!`;
    alert(`The correct word is: ${currentWord}`); // Display correct word in an alert
  }
  
  currentWordIndex++;
  displayNextWord();
}

function scrambleWord(word) {
  return word.split('').sort(function(){return 0.5-Math.random()}).join('');
}

function endGame() {
  document.getElementById('scrambleWord').innerText = "";
  document.getElementById('result').innerText = "";
  document.getElementById('remaining').innerText = "";
  document.getElementById('feedback').innerText = generateFeedback();
  document.getElementById('score').innerText = `You got ${correctAnswers} out of ${words.length} words correct!`;
}

function generateFeedback() {
  const percentage = (correctAnswers / words.length) * 100;
  if (percentage >= 90) {
    return "Excellent! Very good!";
  } else if (percentage >= 75) {
    return "Great job! Good!";
  } else if (percentage >= 50) {
    return "Not bad! Keep practicing!";
  } else {
    return "You can do better! Keep learning!";
  }
}

window.onload = displayNextWord;
