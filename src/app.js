/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  let cardCharacters = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];
  let cardSymbols = ["&spades;", "&hearts;", "&diams;", "&clubs;"];

  function newCard() {
    let characterRandom = Math.floor(Math.random() * cardCharacters.length);
    let symbolRandom = Math.floor(Math.random() * cardSymbols.length);

    document.getElementById("characters").innerHTML =
      cardCharacters[characterRandom];
    document.getElementById("symbolUp").innerHTML = cardSymbols[symbolRandom];
    document.getElementById("symbolDown").innerHTML = cardSymbols[symbolRandom];

    if (cardSymbols[symbolRandom] == "&diams;") {
      document.getElementById("symbolUp").style.color = "red";
      document.getElementById("symbolDown").style.color = "red";
    } else if (cardSymbols[symbolRandom] == "&hearts;") {
      document.getElementById("symbolUp").style.color = "red";
      document.getElementById("symbolDown").style.color = "red";
    } else {
      document.getElementById("symbolUp").style.color = "black";
      document.getElementById("symbolDown").style.color = "black";
    }
  }

  setInterval(() => {
    newCard();
  }, 3000);
};
