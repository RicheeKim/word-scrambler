const url = "http://localhost:3000/words";
const wordSection = document.getElementById("word-section");

const getWords = () => {
  return fetch(url).then((res) => res.json());
  // .then((json) => console.log(json));
};

const displayWords = () => {
  getWords().then((words) => {
    let word = words[Math.floor(Math.random() * words.length)];
    appendWord(word);
  });
};

const appendWord = (word) => {
  wordSection.innerHTML += wordToString(word);
};

const wordToString = (word) => {
  console.log(word);
  return `<h2>${word.name}<h2>`;
};

document.addEventListener("DOMContentLoaded", () => {
  displayWords();
});
