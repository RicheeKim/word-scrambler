const url = "http://localhost:3000/words";
const wordSection = document.getElementById("word-section");

const getWords = () => {
  return fetch(url).then((res) => res.json());
  // .then((json) => console.log(json));
};

const displayWords = () => {
  getWords().then((words) => {
    let word = words[Math.floor(Math.random() * words.length)].name;
    appendWord(shuffleWord(word));
  });
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

// const listenForSubmit = () => {
//   form.addEventListener("submit", (e) => {
// e.preventDefault();
// getFormValue();
// compareWord();
// })
// }
const getFormValue = () => {
  return userGuess.value;
};
const compareWord = (word, userGuess) => {
  if (word == userGuess) {
    console.log("Wahoo!");
  } else {
    console.log("SORRY ");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  displayWords();
});
