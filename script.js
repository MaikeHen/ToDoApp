/*const allTodos = document.querySelector("#all");
const openTodos = document.querySelector("#open");
const doneTodos = document.querySelector("#done");

const removeBtn = document.querySelector("button");*/

const todoDescription = document.querySelector("#to-do-description");
const addBtn = document.querySelector("#add-btn");
const toDoList = document.querySelector(".to-do-list");

const state = {
  todos: [
    { description: "cook dinner", done: false, id: 1 },
    { description: "feed the cat", done: false, id: 2 },
  ],
};

addBtn.addEventListener("click", addTodo);
toDoList.addEventListener("change", updatedTodo);

function addTodo(event) {
  event.preventDefault();
  const newTodo = {
    description: todoDescription.value,
    done: false,
    id: Math.floor(Math.random() * 500000),
  };
  state.todos.push(newTodo);
  todoDescription.value = " ";
  todoDescription.focus();
  renderTodos();
}

function renderTodos() {
  toDoList.innerText = "";
  state.todos.forEach(function (todo) {
    //erstellen ein Listen-Element
    const listEl = document.createElement("li");
    //erstellen eine Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "todo" + todo.id;
    checkbox.checked = todo.done;
    //Todo-ID an DOM-Element übergeben
    checkbox.todoId = todo.id;

    //erstellen das Label zur Checkbox und nutzen die description als Text
    const description = document.createElement("label");
    description.htmlFor = checkbox.id;
    description.innerText = todo.description;
    //hängen checkbox und description an die Liste an
    listEl.appendChild(checkbox);
    listEl.appendChild(description);
    toDoList.appendChild(listEl);
  });
}
function updatedTodo(event) {
  const id = event.target.todoId;
  const updatedTodo = state.todos.find(function (todo) {
    return todo.id === id;
  });
  updatedTodo.done = event.target.checked;
}

renderTodos();
