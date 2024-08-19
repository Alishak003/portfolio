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
  card.style.top = 35 + "%";
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
  card.style.top = "auto";
  card.classList.add("hover-effect");
  card.classList.remove("card--loaded");
  body.style.height = "auto";
  body.style.overflowY = "scroll";
}

// magentic effect

let magnets = document.querySelectorAll(".magnetic");

magnets.forEach((ele) => {
  let boundingRect = ele.getBoundingClientRect();

  window.addEventListener("resize", () => {
    boundingRect = ele.getBoundingClientRect();
  });

  ele.addEventListener("mousemove", (e) => {
    const mousePosX = e.pageX - boundingRect.left;
    const mousePosY = e.pageY - boundingRect.top;

    gsap.to(ele, {
      x: (mousePosX - boundingRect.width / 2) * 0.4,
      y: (mousePosY - boundingRect.height / 2) * 0.4,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(ele, {});
  });

  ele.addEventListener("mouseleave", () => {
    gsap.to(ele, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1,0.3)",
    });
  });
});
