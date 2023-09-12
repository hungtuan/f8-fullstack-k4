var addBtn = document.querySelector(".todo-btn");
var inputValue = document.querySelector(".todo-input");
var todoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Ngăn chặn việc gửi form
  // blank input
  if (!inputValue.value) {
    alert("Please enter task name!");
    return;
  }

  var tasks = getTasks();
  tasks.push({ name: inputValue.value });
  inputValue.value = "";
  localStorage.setItem("tasks", JSON.stringify(tasks));
  addTask(tasks);
});

var tasks = getTasks();
addTask(tasks);

// add
function addTask(tasks = []) {
  var content = "";

  tasks.forEach((task, index) => {
    content += `
      <div class="todo">
        <p class="task-item">${task.name}</p>
        <div>
          <a href="#" onclick="editTask(${index})">
            <i class="fa-solid fa-pen-to-square"></i>
          </a>
          <a href="#" onclick="deleteTask(${index})">
            <i class="fa-solid fa-trash"></i>
          </a>
        </div>
      </div>
    `;
  });

  // Thay đổi nội dung của phần tử "todo-list"
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
  console.log(this);
  var tasks = getTasks();
  var updatedTask = prompt("Edit task:", tasks[index].name);

  if (updatedTask !== null) {
    tasks[index].name = updatedTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    addTask(tasks);
  }
}

// delete
function deleteTask(index) {
  if (confirm("Delete?")) {
    var tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    addTask(tasks);
  }
}
