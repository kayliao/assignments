const print_result = document.querySelector(".repo_list");
let count_page = 1;
let first_time = true;

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
  if (first_time) {
    print_result.innerHTML = data
      .map((info) => {
        let content = `
            <li class="item">
            <div class="title">
                <a href="">${info.name}</a>
                <span>${info.visibility}</span>
            </div>
            <p class="content">${info.description}</p>
            <div class="tag_item">
          `;
        let alink = "";
        for (let i = 0; i < info.topics.length; i++) {
          alink += `<a href="">${info.topics[i]}</a>`;
        }

        let result = content + alink + `</div></li>`;
        first_time = false;
        return result;
      })
      .join(" ");
  } else {
    for (let a = 0; a < data.length; a++) {
      let content = `
        <div class="title">
            <a href="">${data[a].name}</a>
            <span>${data[a].visibility}</span>
        </div>
        <p class="content">${data[a].description}</p>
        <div class="tag_item">
      `;
      let alink = "";
      for (let i = 0; i < data[a].topics.length; i++) {
        alink += `<a href="">${data[a].topics[i]}</a>`;
      }

      let result = content + alink + `</div>`;

      let li = document.createElement("li");
      li.className = "item";
      li.innerHTML = result;
      insert_after(li, print_result.lastElementChild);
    }
  }

  console.log(print_result.innerHTML);
}

function insert_after(new_node, existing_node) {
  existing_node.parentNode.insertBefore(new_node, existing_node.nextSibling);
}

ajax("https://api.github.com/orgs/facebook/repos?per_page=5&page=1").then(
  (data) => render(data)
);

function showMoreContent() {
  count_page++;
  ajax(
    `https://api.github.com/orgs/facebook/repos?per_page=5&page=${count_page}`
  ).then((data) => render(data));
}
