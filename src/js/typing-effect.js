let searchInput = document.querySelector("#hero-search__input");
let searchPlaceholder = "Admission requirement, Programs, ...";

searchInput.addEventListener("input", (e) => {
  if (e.target.value.length < 1) {
    typing();
  }
});

function typing() {
  let placeholder = "";
  let x = 0;

  searchInput.setAttribute("placeholder", "");

  let interval = setInterval(() => {
    placeholder += searchPlaceholder[x];
    x++;

    searchInput.setAttribute("placeholder", placeholder);
    x > searchPlaceholder.length - 1 ? clearInterval(interval) : x++;
  }, 180);
}

typing();
