const url = "http://localhost:3000/words";
// const userUrl = "http://localhost:3000/users/:id";
// const userScoreUrl = "http://localhost:3000/users/:id/scores";

const wordSection = document.getElementById("word-section");
const userGuess = document.getElementById("user-guess");
const form = document.getElementById("guess-form");
const answerMessage = document.getElementById("answer-message");
const yourScore = document.getElementById("your-score");
var word;

const getWords = () => {
  return fetch(url)
    .then((res) => res.json())
    .then((words) => setWords(words));
};

const displayWords = () => {
  getWords().then((word) => appendWord(shuffleWord(word)));
};

const setWords = (words) => {
  word = words[Math.floor(Math.random() * words.length)].name;
  console.log(word);
  return word;
};

const appendWord = (word) => {
  wordSection.innerHTML += wordToString(word);
};

const wordToString = (word) => {
  console.log(word);
  return `<h2>${word}<h2>`;
};

const shuffleWord = (word) => {
  var shuffledWord = "";
  let newWord = word.split("");
  while (newWord.length > 0) {
    shuffledWord += newWord.splice((newWord.length * Math.random()) << 0, 1);
  }
  return shuffledWord;
};

const listenForSubmit = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    compareWord(word, getFormValue());
  });
};

const getFormValue = () => {
  return userGuess.value;
};

const compareWord = (chosenWord, userGuess) => {
  if (chosenWord == userGuess) {
    displayCorrectMessage();
    displayScore();
    stopScore();
  } else {
    displayWrongMessage();
  }
};

const displayCorrectMessage = () => {
  answerMessage.innerHTML = "Correct!";
};

const displayWrongMessage = () => {
  answerMessage.innerHTML = "Sorry! Try Again";
};

var scoreLeft = 2000;
var counter = document.getElementById("counter");
const countdown = () => {
  if (scoreLeft == -1) {
    clearTimeout(timerId);
  } else {
    counter.innerHTML = "Score: " + scoreLeft;
    scoreLeft -= 1;
  }
};

var timerId = setInterval(countdown, 10);

const displayScore = () => {
  yourScore.innerHTML = "Your Score: " + parseInt(scoreLeft);
};

const stopScore = () => {
  clearInterval(timerId);
};

// const postScore = (score) => {
//   fetch(userScoreUrl, {
//     method: "POST",
//     body: JSON.stringify(score),
//     headers: { "content-type": "application/json" }
//   });
// };

document.addEventListener("DOMContentLoaded", () => {
  displayWords();
  listenForSubmit();
});
