var addBtn = document.querySelector(".todo-btn");
var inputValue = document.querySelector(".todo-input");

var tasks = getTasks();
addTask(tasks);

addBtn.addEventListener("click", function () {
  // blank input
  if (!inputValue.value) {
    alert("Please enter task name!");
    return false;
  }

  var tasks = getTasks();
  tasks.push({ name: inputValue.value });
  inputValue.value = "";
  localStorage.setItem("tasks", JSON.stringify(tasks));
  addTask(tasks);
});

// add
function addTask(tasks = []) {
  var todoList = document.querySelector(".todo");
  var content = ""; // Khởi tạo content là một chuỗi rỗng

  tasks.forEach((task, index) => {
    content += `
          <p class="task-item">${task.name}</p>
          <div><a href="#" onclick="editTask(${index})">
          <i class="fa-solid fa-pen-to-square"></i>
        </a>
        <a href="#" onclick="deleteTask(${index})">
          <i class="fa-solid fa-trash"></i>
        </a></div>
      `;
  });

  // Gán nội dung mới vào danh sách nhiệm vụ
  todoList.innerHTML = content;
}

// save
function getTasks() {
  return localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
}

// edit
function editTask(index) {
  var tasks = getTasks();
  var taskItem = document.querySelectorAll(".task-item")[index];
  var updatedTask = prompt("Edit task:", tasks[index].name);

  if (updatedTask !== null) {
    tasks[index].name = updatedTask;
    taskItem.textContent = updatedTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

// delete
function deleteTask(index) {
  if (confirm("Delete")) {
    var tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    addTask(getTasks());
  }
}
