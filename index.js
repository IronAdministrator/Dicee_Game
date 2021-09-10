// randomPictureSrc1
let randomNumber1 = Math.floor(Math.random() * 6);
randomNumber1++;

document
  .querySelectorAll("img")[0]
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");

// randomPictureSrc2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Announcing the winner
randomNumber1 > randomNumber2
  ? (document.querySelector("h1").innerHTML = "🚩 Player 1 is the Winner!")
  : randomNumber2 > randomNumber1
  ? (document.querySelector("h1").innerHTML = "Player 2 is the Winner 🚩")
  : (document.querySelector("h1").innerHTML = "DRAW! Play More :)");

//   if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩 Player 1 is the Winner!";
//   } else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 is the Winner 🚩";
//   } else {
//     document.querySelector("h1").innerHTML = "DRAW! Play More :)";
//   }
