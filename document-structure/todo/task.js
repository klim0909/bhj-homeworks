    const taskInput = document.getElementById("task__input");
  const tasksAdd = document.getElementById("tasks__add");
  
  tasksAdd.addEventListener("click", listItem);
  
  function listItem() {
  
    const tasksList = document.getElementById("tasks__list");
  
    const task = document.createElement("div");
  
    const taskTitle = document.createElement("div");
  
    const taskRemove = document.createElement("div");
    taskRemove.className = "task__remove";
  
    const text = document.createTextNode(taskInput.value);
  
    if (text.nodeValue.trim() === "") {
      return; 
    }
  
    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
  
    taskTitle.appendChild(text);
  
    tasksList.appendChild(task);
  
    taskInput.value = "";
  
    // Добавляем символ крестика
    // У меня не работало &times
    taskRemove.textContent = "✖";
  
    taskRemove.addEventListener("click", function() {
      tasksList.removeChild(task);
    });
  
  }
  //Почему то в яндксе не работает