const container = document.querySelector(".container");

function ajax(src) {
  return fetch(src)
    .then(checkStatus)
    .then((response) => response.json())
    .catch((error) => console.log("There is an error: ", error));
}

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function render(data) {
  console.log(data);
  container.innerHTML = data
    .map(
      (info) =>
        `
        <div class="box">
          <h1 class="itemName">${info.name}</h1>
          <img class = "itemImage" src="pictures/${info.name}.jpg" alt="${info.name}">
          <div class="itemString">
            <div class="itemDescription">${info.description}</div>
            <div class="itemPrice">${info.price}</div>
          </div>
        </div>
    `
    )
    .join(" ");
}

ajax("https://appworks-school.github.io/Remote-Aassigiment-Data/products").then(
  (data) => render(data)
);
// );
