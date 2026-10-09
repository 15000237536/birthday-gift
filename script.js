const coverPage = document.querySelector("#coverPage");
const nextPage = document.querySelector("#nextPage");
const startButton = document.querySelector("#startButton");
const backButton = document.querySelector("#backButton");

let transitionTimer;

function showNextPage() {
  window.clearTimeout(transitionTimer);
  startButton.disabled = true;
  coverPage.classList.add("is-leaving");

  transitionTimer = window.setTimeout(() => {
    coverPage.hidden = true;
    coverPage.classList.remove("is-leaving");
    nextPage.hidden = false;

    window.requestAnimationFrame(() => {
      nextPage.classList.add("is-visible");
      backButton.focus({ preventScroll: true });
    });
  }, 700);
}

function showCoverPage() {
  window.clearTimeout(transitionTimer);
  nextPage.classList.remove("is-visible");
  nextPage.hidden = true;
  coverPage.hidden = false;
  startButton.disabled = false;

  window.requestAnimationFrame(() => {
    startButton.focus({ preventScroll: true });
  });
}

startButton.addEventListener("click", showNextPage);
backButton.addEventListener("click", showCoverPage);
