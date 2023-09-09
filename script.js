const getEl = (el) => document.querySelector(el);
const getAll = (el) => document.querySelectorAll(el);
const start = getEl(".start");
const prev = getEl(".prev");
const next = getEl(".next");
const end = getEl(".end");
const link = getAll(".link");
const cards = getEl(".cards");
next.disabled = false;
end.disabled = false;

btn = [start, next, prev, end];

const arr = new Array(40);
let currentIndex = 0;

const uptadeCard = (currentIndex) => {
  cards.innerHTML = " ";
  for (let i = 0; i < arr.length / 5; i++) {
    const div = document.createElement("div");
    const cardNumber = i + currentIndex * 8;
    div.innerHTML = `Товар № ${cardNumber}`;
    cards.appendChild(div);
  }
};
uptadeCard(currentIndex);

const disabled = (currentIndex) => {
  currentIndex > 0
    ? ((start.disabled = false), (prev.disabled = false))
    : ((start.disabled = true), (prev.disabled = true));
  currentIndex < 4
    ? ((next.disabled = false), (end.disabled = false))
    : ((next.disabled = true), (end.disabled = true));
};

const active = (currentIndex) => {
  link.forEach((element) => {
    element.classList.remove("active");
  });
  link.forEach(() => {
    link[currentIndex].classList.add("active");
  });
};

link.forEach((el, index) => {
  el.addEventListener("click", () => {
    link.forEach((linkItem) => linkItem.classList.remove("active"));
    el.classList.add("active");
    currentIndex = index;
    disabled(index);
    uptadeCard(index);
  });
});

btn.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index == 0) {
      currentIndex = 0;
      uptadeCard(currentIndex);
      disabled(currentIndex);
      active(currentIndex);
    } else if (index == 1) {
      currentIndex++;
      uptadeCard(currentIndex);
      disabled(currentIndex);
      active(currentIndex);
    } else if (index == 2) {
      currentIndex--;
      uptadeCard(currentIndex);
      disabled(currentIndex);
      active(currentIndex);
    } else if (index == 3) {
      currentIndex = 4;
      uptadeCard(currentIndex);
      disabled(currentIndex);
      active(currentIndex);
    }
  });
});
