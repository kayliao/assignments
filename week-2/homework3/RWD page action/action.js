const welcomeBlock = document.querySelector(".welcomeBox");

welcomeBlock.addEventListener(
  "click",
  () => (welcomeBlock.innerHTML = "<h1>Have a Good Time!</h1>")
);

function showMoreContent() {
  let hidden = document.querySelector(".hiddenContent");
  let butt = document.querySelector(".btnaction button");
  if (hidden.style.display === "block") {
    hidden.style.display = "none";
    butt.textContent = "Show More Content";
  } else {
    hidden.style.display = "block";
    butt.textContent = "Hide Content";
  }
}

function showList() {
  let open = document.querySelector(".menu");
  open.style.display = "block";
}

function closeMenu() {
  let close = document.querySelector(".menu");
  close.style.display = "none";
}
