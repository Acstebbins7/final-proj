  
const todoList = document.querySelector(".todo-list");
updateList();
document.querySelector(".add-todo").addEventListener('click', () => {
  const newObj = {
    text: document.querySelector(".todo-input").value,
    complete: false,
    priority: document.querySelector("#priority").value,
    id: todos.length + 1
  }
  document.querySelector(".todo-input").value = "";
  todos.push(newObj);
  updateList(); 

document.querySelector("#clearTodos").addEventListener('click', () =>{
  todos.length = 0;
  updateList();
})

function printTodo(todo) {
  let checkedStr = todo.complete ? "checked=\"true\"" : "";
  let newElement = document.createElement('li');
  newElement.classList.add(`priority${todo.priority}`);
  newElement.classList.add("todoElement");
  newElement.id = todo.id;
  newElement.innerHTML = `<input type="checkbox" class="completed" ${checkedStr}"> ${todo.text}`;
  todoList.appendChild(newElement);
}

function updateList(){
  todoList.innerHTML = "";
  todos.sort((a, b) => a.priority - b.priority);
  for(let todo of todos){
    printTodo(todo);
  }
}
})

document.querySelector("#clearTodos").addEventListener('click', () =>{
  todos.length = 0;
  updateList();
})

function printTodo(todo) {
  let checkedStr = todo.complete ? "checked=\"true\"" : "";
  let newElement = document.createElement('li');
  newElement.classList.add(`priority${todo.priority}`);
  newElement.classList.add("todoElement");
  newElement.id = todo.id;
  newElement.innerHTML = `<input type="checkbox" class="completed" ${checkedStr}"> ${todo.text}`;
  todoList.appendChild(newElement);
}

function updateList(){
  todoList.innerHTML = "";
  todos.sort((a, b) => a.priority - b.priority);
  for(let todo of todos){
    printTodo(todo);
  }
}
