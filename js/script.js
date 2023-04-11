const addTaskBtn = document.querySelector("#add-task-btn");
const tasksContainer = document.querySelector(".tasks-container");
const taskInputBox = document.querySelector("#add-task");

const addTaskElement = () => {
  const taskInputBox = document.querySelector("#add-task");
  const taskDescription = taskInputBox.value;

  let task = document.createElement("div");
  task.classList.add("task");
  task.classList.add("animate__animated");
  task.classList.add("animate__flipInX");

  let taskStatus = document.createElement("input");
  taskStatus.type = "checkbox";
  taskStatus.classList.add("task-status");
  task.appendChild(taskStatus);

  let taskText = document.createElement("input");
  taskText.type = "text";
  taskText.classList.add("task-description");
  taskText.value = taskDescription;
  task.appendChild(taskText);

  let taskDeleteBtn = document.createElement("input");
  taskDeleteBtn.type = "button";
  taskDeleteBtn.value = "X";
  taskDeleteBtn.classList.add("task-delete-btn");
  task.appendChild(taskDeleteBtn);

  if (taskDescription === "") {
    alert("Please enter text before adding task");
  } else {
    tasksContainer.appendChild(task);
    let totalTasks = document.querySelector("#tasks-total");
    let totalTasksValue = +totalTasks.innerHTML;
    let remainingTask = document.querySelector("#tasks-remaining");
    let remainingTaskValue = +remainingTask.innerHTML;
    totalTasksValue++;
    remainingTaskValue++;
    console.log(totalTasksValue);
    totalTasks.innerHTML = totalTasksValue;
    remainingTask.innerHTML = remainingTaskValue;
  }

  taskStatus.addEventListener("click", () => {
    taskStatus.parentElement.classList.toggle("task-done");
    taskStatus.parentElement.classList.toggle("animate__flipInX");
    taskStatus.parentElement.classList.toggle("animate__tada");
    let remainingTask = document.querySelector("#tasks-remaining");
    let remainingTaskValue = +remainingTask.innerHTML;
    let completedTasks = document.querySelector("#tasks-completed");
    let completedTasksValue = +completedTasks.innerHTML;
    if (taskStatus.parentElement.classList.contains("task-done")) {
      remainingTaskValue--;
      completedTasksValue++;
    } else {
      remainingTaskValue++;
      completedTasksValue--;
    }
    remainingTask.innerHTML = remainingTaskValue;
    completedTasks.innerHTML = completedTasksValue;
  });

  taskDeleteBtn.addEventListener("click", () => {
    taskDeleteBtn.parentElement.remove();
    let completedTasks = document.querySelector("#tasks-completed");
    let completedTasksValue = +completedTasks.innerHTML;
    let totalTasks = document.querySelector("#tasks-total");
    let totalTasksValue = +totalTasks.innerHTML;
    let remainingTask = document.querySelector("#tasks-remaining");
    let remainingTaskValue = +remainingTask.innerHTML;
    totalTasksValue--;
    if (taskDeleteBtn.parentElement.classList.contains("task-done")) {
      completedTasksValue--;
      completedTasks.innerHTML = completedTasksValue;
    } else {
      remainingTaskValue--;
      remainingTask.innerHTML = remainingTaskValue;
    }

    totalTasks.innerHTML = totalTasksValue;
  });
};

addTaskBtn.addEventListener("click", addTaskElement);

taskInputBox.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTaskElement();
  }
});
