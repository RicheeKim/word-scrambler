const url = "http://localhost:3000/words";

const getWords = () => {
  return fetch(url).then((res) => res.json());
  // .then((json) => console.log(json));
};

const displayWords = () => {
  getWords().then((json) => console.log(json));
};

document.addEventListener("DOMContentLoaded", () => {
  displayWords();
});
