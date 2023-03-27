const images = ["lizard.png","pig.png","pikachu.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src =  `../img/${chosenImage}`;

document.body.appendChild(bgImage);
console.log(bgImage);