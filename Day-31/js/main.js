let count = 30;
let lastTimestamp = 0;
const INTERVAL = 1000; // 1000ms
const countEl = document.querySelector(".count span");
const btnLink = document.querySelector(".btn-link");

const handleCounter = (timestamp) => {
  if (timestamp - lastTimestamp >= INTERVAL) {
    lastTimestamp = timestamp;
    count--;
    countEl.innerText = count;

    if (count > 0) {
      requestAnimationFrame(handleCounter);
    } else {
      btnLink.removeAttribute("disabled");
    }
  } else {
    requestAnimationFrame(handleCounter);
  }
};

btnLink.addEventListener("click", () => {
  if (count === 0) {
    window.location.href = "https://fullstack.edu.vn/";
  }
});

requestAnimationFrame(handleCounter);
