const taskInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");

tasksAdd.addEventListener("click", function(event) {
  event.preventDefault();
  
  listItem();
});

function listItem() {

  const tasksList = document.getElementById("tasks__list");

  const task = document.createElement("div");
  task.classList.add("task");

  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task__title");

  const taskRemove = document.createElement("a");
  taskRemove.href = "#";
  taskRemove.classList.add("task__remove");
  taskRemove.textContent = "&times;";

  const text = document.createTextNode(taskInput.value);

  if (text.nodeValue.trim() === "") {
    return;
  }

  task.appendChild(taskTitle);
  task.appendChild(taskRemove);

  taskTitle.appendChild(text);

  tasksList.appendChild(task);

  taskInput.value = "";

  taskRemove.addEventListener("click", function() {
    tasksList.removeChild(task); 
  });

}