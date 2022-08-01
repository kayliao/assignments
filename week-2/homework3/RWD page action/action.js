const welcomeBlock = document.querySelector(".welcomeBox");

welcomeBlock.addEventListener(
  "click",
  () => (welcomeBlock.innerHTML = "<h1>Have a Good Time!</h1>")
);

function showMoreContent() {
  const hidden = document.querySelector(".hiddenContent");
  const butt = document.querySelector(".btnaction button");
  if (hidden.style.display === "block") {
    hidden.style.display = "none";
    butt.textContent = "Show More Content";
  } else {
    hidden.style.display = "block";
    butt.textContent = "Hide Content";
  }
}

function showList() {
  const open = document.querySelector(".menu");
  open.style.display = "block";
}

function closeMenu() {
  const close = document.querySelector(".menu");
  close.style.display = "none";
}
