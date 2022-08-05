const enterPlace = document.querySelector(".enterPlace");
const toDo = document.querySelector(".toDo");

enterPlace.addEventListener("keypress", function (event) {
	// If the user presses the "Enter" key on the keyboard
	if (event.key === "Enter") {
		// Cancel the default action, if needed
		// event.preventDefault();
		// Trigger the button element with a click
		// document.getElementById("myBtn").click();

		let value = enterPlace.value;

		if (toDo.lastElementChild == null) {
			let result = `<li><input type="checkbox" class="newTaskItem" />
      <label class="strikethrough">${value}</label></li>`;
			toDo.innerHTML = result;
			enterPlace.value = "";
		} else {
			let result = `<input type="checkbox" class="newTaskItem" />
      <label class="strikethrough">${value}</label>`;
			let li = document.createElement("li");
			// li.className = "item";
			li.innerHTML = result;
			insert_after(li, toDo.lastElementChild);
			enterPlace.value = "";
		}
	}
});

function insert_after(new_node, existing_node) {
	existing_node.parentNode.insertBefore(new_node, existing_node.nextSibling);
}
