const form = document.getElementById("todo-form");
const input = document.getElementById("new-task");
const list = document.getElementById("todo-list");
const clearAll = document.getElementById("clear-all");

function addTodo(text) {
  // create li inside ul to wrap text content and 2 button
  const li = document.createElement("li");
  const span = document.createElement("span");
  const actions = document.createElement("div");
  li.className = "flex justify-between items-center p-2 border-b";
  span.textContent = text;
  actions.className = "space-x-2";

  // done button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.classList = "bg-green-500 text-white px-2 py-1 rounded";
  doneBtn.onclick = () => {
    span.classList.toggle("line-through");
    span.classList.toggle("text-gray-500");
  };
  // delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.classList = "bg-red-500 text-white px-2 py-1 rounded";
  delBtn.onclick = () => {
    li.remove();
  };
  // add button to div
  actions.appendChild(doneBtn);
  actions.appendChild(delBtn);
  // add span & div + button to li & add li to list
  li.appendChild(span);
  li.appendChild(actions);
  list.appendChild(li);
}

// form button submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTodo(text);
  input.value = "";
});

// clear all button
clearAll.addEventListener("click", () => {
  list.innerHTML = "";
});
