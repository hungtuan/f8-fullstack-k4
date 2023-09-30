var list = document.querySelector(".list");
var listItem = document.querySelectorAll(".list-item:not(.module)");
var moduleItem = document.querySelectorAll(".list-item.module");

// Biến để theo dõi mục đang được kéo
var draggedItem = null;

// Hàm để hiển thị nội dung của mục "Bài" hoặc "Module"
function renderItemOrModule(items, name) {
  items.forEach(function (item, index) {
    // Cho phép mục này có thể được kéo và đặt
    item.setAttribute("draggable", true);

    // Gán một thuộc tính "data-index" để theo dõi vị trí của mục
    item.setAttribute("data-index", index);

    // Tạo một phần tử <span> để chứa nội dung của mục
    var span = document.createElement("span");

    // Lấy nội dung ban đầu của mục
    var itemText = item.innerText;

    // Đặt nội dung của phần tử <span> là nội dung ban đầu của mục
    span.innerText = itemText;

    // Xóa nội dung của mục gốc
    item.innerHTML = "";

    // Đặt nội dung của mục thành "Bài (hoặc Module) số thứ tự: "
    // và sau đó, thêm phần tử <span> vào trong mục
    item.innerText = name + " " + (index + 1) + ": ";
    item.appendChild(span);

    // Gắn sự kiện "dragstart" và "dragend" cho mục
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragend", handleDragEnd);
  });
}

// Hàm xử lý khi bắt đầu kéo một mục
function handleDragStart(e) {
  // Lưu mục đang được kéo
  draggedItem = this;

  // Thêm lớp CSS "dragging" để thể hiện rằng mục đang được kéo
  e.currentTarget.classList.add("dragging");
}

// Hàm xử lý khi kết thúc kéo một mục
function handleDragEnd(e) {
  // Đặt mục đang được kéo thành null
  draggedItem = null;

  // Loại bỏ lớp CSS "dragging" để kết thúc trạng thái kéo
  e.target.classList.remove("dragging");
}

// Hàm xử lý khi mục được kéo qua mục khác (sự kiện "dragover")
function handleDragOver(e) {
  // Ngăn chặn hành động mặc định của trình duyệt
  e.preventDefault();

  // Kiểm tra nếu có mục đang được kéo
  if (draggedItem) {
    // Tìm mục gần nhất mà con trỏ chuột đang trỏ vào
    var targetItem = e.target.closest(".list-item");

    // Nếu tìm thấy mục gần nhất
    if (targetItem) {
      // Di chuyển mục đang kéo vào vị trí được xác định
      list.insertBefore(draggedItem, targetItem);
    }
  }

  // Cập nhật lại số thứ tự của tất cả các mục sau khi di chuyển
  var allItems = document.querySelectorAll(".list-item");
  allItems.forEach(function (item, index) {
    item.setAttribute("data-index", index);
  });
}

// Render "Bài" và "Module"
renderItemOrModule(listItem, "Bài");
renderItemOrModule(moduleItem, "Module");

// Sự kiện "dragover" để xử lý sự kiện kéo và thả
list.addEventListener("dragover", handleDragOver);
