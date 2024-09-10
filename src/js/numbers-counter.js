const nums = document.querySelectorAll(".icon-number-box__no");
const section = document.querySelector(".numbers");
let isStarted = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 450 && !isStarted) {
    nums.forEach((num) => numsCounter(num));
    isStarted = true;
  }
};

function numsCounter(el) {
  let targetNum = parseInt(el.dataset.target);
  let currentNum = 0;
  let incrementSpeed = Math.floor(2000 / targetNum);
  let count = setInterval(() => {
    currentNum++;
    el.textContent = currentNum;
    if (currentNum >= targetNum) {
      clearInterval(count);
    }
  }, incrementSpeed);
}
