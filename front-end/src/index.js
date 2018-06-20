const url = "http://localhost:3000/words";
const wordSection = document.getElementById("word-section");
const userGuess = document.getElementById("user-guess");
const form = document.getElementById("guess-form");
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
    alert("Wahoo!");
  } else {
    console.log("SORRY");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  displayWords();
  listenForSubmit();
});
