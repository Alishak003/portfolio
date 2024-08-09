let card;
let cardBottom;
let cardRight;
let body = document.getElementById("wrapper");
let cardOne = document.getElementById("card--two");
let cardStyle = window.getComputedStyle(cardOne);
cardBottom = cardStyle.getPropertyValue("bottom");

let unione = document.getElementById("unione");
let projectCard = document.getElementById("project-card");

function cardEvent(cardId) {
  card = document.getElementById(cardId);
  cardRight = (window.innerWidth / 4) * 2;
  if (card.classList.contains("card--loaded") == false) {
    addCard();
  } else {
    removeCard();
  }
}

function addCard() {
  card.style.scale = 2.65;
  card.style.transform = "rotate(0deg)";
  card.style.right = cardRight + "px";
  card.style.bottom = cardBottom + "px";
  card.classList.add("card--loaded");
  card.classList.remove("hover-effect");
  body.style.height = 100 + "vh";
  body.style.overflowY = "hidden";
}

function removeCard() {
  console.log(cardStyle.getPropertyValue("right"));
  card.style.scale = 1;
  card.style.transform = "rotate(20deg)";
  card.style.right = cardStyle.getPropertyValue("right");
  card.style.bottom = cardStyle.getPropertyValue("bottom");
  card.classList.add("hover-effect");
  card.classList.remove("card--loaded");
  body.style.height = "auto";
  body.style.overflowY = "scroll";
}
