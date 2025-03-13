(function () {
  const inputTasks = document.querySelector(".input-new-task");
  const tasks = document.querySelector(".tasks");

  readTasks();

  function createLi() {
    const li = document.createElement("li");
    return li;
  }

  function createBtnForDelete(li) {
    li.innerText += " ";
    const btn = document.createElement("button");
    btn.innerText = "Apagar";
    // btn.classList.add('delete');
    btn.setAttribute("class", "delete");
    btn.setAttribute("title", "Apagar essa tarefa");
    li.appendChild(btn);
  }

  function clearInput() {
    inputTasks.value = "";
    inputTasks.focus();
  }

  function readTasks() {
    const tasks = localStorage.getItem("tasks");
    const tasksList = JSON.parse(tasks);
    tasksList.forEach((t) => {
      createTask(t);
    });
  }

  function saveTasks() {
    const liTasks = tasks.querySelectorAll("li");
    const taskList = [];
    liTasks.forEach((t) => {
      let textTask = t.innerText;
      textTask = textTask.replace("Apagar", "").trim();
      taskList.push(textTask);
    });

    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem("tasks", tasksJSON);
  }

  function createTask(str) {
    const li = createLi();
    li.innerText = str;
    tasks.appendChild(li);
    createBtnForDelete(li);
    saveTasks();
    clearInput();
  }

  function deleteTask(li) {
    li.remove();
    saveTasks();
  }

  inputTasks.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      if (!inputTasks.value) return;

      createTask(inputTasks.value);
      return;
    }
  });

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("btn-add-task")) {
      if (!inputTasks.value) return;

      createTask(inputTasks.value);
      return;
    }

    if (el.classList.contains("delete")) {
      deleteTask(el.parentElement);
    }
  });
})();
