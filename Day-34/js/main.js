const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const apiUrl = "http://localhost:3000/todos";

const taskList = $(".task-list");
const taskListFinished = $(".task-list-completed");
const addBtn = $(".add-todo-btn");
const addTodoPopup = $(".add-todo-popup");
const addTodoWrapper = $(".add-todo-wrapper");
const saveBtn = $(".save-btn");
const cancelAddBtn = $(".cancel-btn");
const searchInput = $(".search-input");

// Hàm gửi yêu cầu GET
async function fetchTodoList() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}

// Hàm gửi yêu cầu POST
async function addNewTodo(data) {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

// Hàm gửi yêu cầu DELETE
async function removeTodoItem(id) {
  return fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
}

// Hàm gửi yêu cầu PATCH
async function updateTodoItem(id, data) {
  return fetch(`${apiUrl}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

// Hàm tạo nút action cho mỗi mục
function createTaskActionButtons() {
  return `
    <div class="task-action-list">
        <button class="task-action-item remove-btn">
            <i class="fa-solid fa-trash-can"></i>
        </button>
        <button class="task-action-item edit-btn">
            <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button class="task-action-item complete-btn">
            <i class="fa-solid fa-check"></i>
        </button>
    </div>`;
}

// Hàm render danh sách
async function render() {
  const taskItemHtml = createTaskActionButtons();
  const data = await fetchTodoList();
  const todoUnfinished = data.filter((todo) => !todo.completed);
  const todoFinished = data.filter((todo) => todo.completed);

  const todoUnfinishedHtml = todoUnfinished
    .map(
      (todo) => `
      <div class="task-item">
        <p class="task-title">${todo.title}</p>
        ${taskItemHtml}
      </div>`
    )
    .join("");

  const todoFinishedHtml = todoFinished
    .map(
      (todo) => `
      <div class="task-item">
        <p class="task-title">${todo.title}</p>
        ${taskItemHtml}
      </div>`
    )
    .join("");

  taskList.innerHTML = todoUnfinishedHtml;

  taskListFinished.innerHTML = `
    <button class="show-task-completed">
      Completed todos <span class="count-doto-completed">${todoFinished.length}</span>
    </button>
    <div class="list-unfinished-container hide">${todoFinishedHtml}</div>
  `;

  showTaskComplete();
  removeTodo();
  editTodo();
  checkComplete();
}

render();

function addTodo() {
  let isAdd = false;

  addBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    addTodoPopup.classList.toggle("hide");
    isAdd = true;
  });

  addTodoWrapper.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  cancelAddBtn.addEventListener("click", (e) => {
    addTodoPopup.classList.add("hide");
  });

  document.addEventListener("click", (e) => {
    if (!addTodoPopup.classList.contains("hide")) {
      addTodoPopup.classList.add("hide");
      isAdd = false;
    }
  });

  saveBtn.addEventListener("click", async (e) => {
    if (isAdd) {
      let value = addTodoWrapper.querySelector("input").value;
      value = value.trim();
      const data = {
        completed: false,
      };

      if (value) {
        data.title = value;
        await addNewTodo(data);
        addTodoWrapper.querySelector("input").value = "";
        addTodoPopup.classList.add("hide");
        render();
        isAdd = false;
      }
    }
  });
}

addTodo();

function removeTodo() {
  const removeBtnsUnfinished = taskList.querySelectorAll(".remove-btn");
  const removeBtnsFinished = taskListFinished.querySelectorAll(".remove-btn");

  removeBtnsUnfinished.forEach((removeBtn, i) => {
    removeBtn.addEventListener("click", async (e) => {
      const data = await fetchTodoList();
      const todoUnfinished = data.filter((todo) => !todo.completed);
      await removeTodoItem(todoUnfinished[i].id);
      render();
    });
  });

  removeBtnsFinished.forEach((removeBtn, i) => {
    removeBtn.addEventListener("click", async (e) => {
      const data = await fetchTodoList();
      const todoFinished = data.filter((todo) => todo.completed);
      await removeTodoItem(todoFinished[i].id);
      render();
    });
  });
}

let isShowTaskCompleted = false;

function showTaskComplete() {
  const showTaskCompleted = document.querySelector(".show-task-completed");
  const listCompletedContainer = document.querySelector(
    ".list-unfinished-container"
  );

  if (isShowTaskCompleted) {
    listCompletedContainer.classList.remove("hide");
    showTaskCompleted.style.background = "#047857";
  }

  showTaskCompleted.addEventListener("click", (e) => {
    isShowTaskCompleted = !isShowTaskCompleted;
    listCompletedContainer.classList.toggle("hide");
    showTaskCompleted.style.background = isShowTaskCompleted
      ? "#047857"
      : "#9ca3af";
  });
}

function checkComplete() {
  const completeBtns = taskList.querySelectorAll(".complete-btn");
  completeBtns.forEach((completeBtn, i) => {
    completeBtn.addEventListener("click", async (e) => {
      const data = await fetchTodoList();
      const todoUnfinished = data.filter((todo) => !todo.completed);
      await updateTodoItem(todoUnfinished[i].id, {
        completed: true,
      });
      render();
    });
  });

  const uncompleteBtns = taskListFinished.querySelectorAll(".complete-btn");
  uncompleteBtns.forEach((uncompleteBtn, i) => {
    uncompleteBtn.addEventListener("click", async (e) => {
      const data = await fetchTodoList();
      const todoFinished = data.filter((todo) => todo.completed);
      await updateTodoItem(todoFinished[i].id, {
        completed: false,
      });
      render();
    });
  });
}

function search() {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const tasks = document.querySelectorAll(".task-item");
    tasks.forEach((task) => {
      const title = task.querySelector(".task-title").textContent.toLowerCase();
      if (title.indexOf(value) === -1) {
        task.classList.add("hide");
        task.style.height = "0";
      } else {
        task.classList.remove("hide");
        task.style.height = "60px";
      }
    });
  });
}

search();

function editTodo() {
  let isEdit = false;

  const editBtnsUnfinished = taskList.querySelectorAll(".edit-btn");

  editBtnsUnfinished.forEach((editBtn, i) => {
    editBtn.addEventListener("click", async (e) => {
      isEdit = true;
      e.stopPropagation();
      addTodoPopup.classList.remove("hide");
      const data = await fetchTodoList();
      const todoUnfinished = data.filter((todo) => !todo.completed);
      addTodoWrapper
        .querySelector("input")
        .setAttribute("placeholder", "Edit todos");
      addTodoWrapper.querySelector("input").value = todoUnfinished[i].title;
      addTodoWrapper.querySelector("input").focus();
      saveBtn.addEventListener("click", async (e) => {
        if (isEdit) {
          let value = addTodoWrapper.querySelector("input").value;
          value = value.trim();
          const data = await fetchTodoList();
          const todoUnfinished = data.filter((todo) => !todo.completed);
          await updateTodoItem(todoUnfinished[i].id, {
            title: value,
          });
          addTodoPopup.classList.add("hide");
          addTodoWrapper.querySelector("input").value = "";
          render();
          isEdit = false;
        }
      });
    });
  });
}
