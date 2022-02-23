const images = [
  "image.jpg",
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const link = document.querySelector("style");

bgImage.src = `Image/${chosenImage}`;

bgImage.classList = "background";
document.body.appendChild(bgImage);
// document.head.insertBefore(bgImage, link);
