const body = document.body;
const card = document.createElement("div");
const img = document.createElement("img");
img.src = "./images/blogimage (1).png";
const a = document.createElement("a");
const time = document.createElement("time");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const card__ = document.createElement("div");
const img2 = document.createElement("img");
img2.src = "./images/userpic.svg";
const h3 = document.createElement("h3");

body.appendChild(card);
card.append(img, a, time, h1, p, card__);
card__.append(img2, h3);

card.classList.add("card");
img.classList.add("card__img");
a.classList.add("card__link");
time.classList.add("card__time");
h1.classList.add("card__heading");
p.classList.add("card__paragraph");
card__.classList.add("card__");
img2.classList.add("card__icon");
h3.classList.add("card__icon-text");

a.textContent = "Learning";
time.textContent = "Published 21 Dec 2024";
h1.textContent = "HTML & CSS foundations";
h3.textContent = "Greg Hooper";
p.textContent =
  "These languages are the backbone of every website, defining structure,content, and presentation.";
/* <div class="card">
  <img class="card__img" src="./images/blogimage (1).png" alt="" />
  <a class="card__link" href="">
    Learning
  </a>
  <time class="card__time" datetime="">
    Published 21 Dec 2024
  </time>
  <h1 class="card__heading">HTML & CSS foundations</h1>
  <p class="card__paragraph">
    These languages are the backbone of every website, defining structure,
    content, and presentation.
  </p>
  <div class="card__">
    <img class="card__icon" src="./images/userpic.svg" alt="" />
    <h3 class="card__icon-text">Greg Hooper</h3>
  </div>
</div>; */
