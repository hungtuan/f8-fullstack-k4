// Tạo các element
var carousel = document.querySelector(".carousel");

var carouselInner = document.querySelector(".carousel-inner");

var carouselItems = carouselInner.children;
var carouselNextBtn = document.querySelector(".carousel-nav .next");
var carouselPrevBtn = document.querySelector(".carousel-nav .prev");

var carouselDots = document.querySelector(".carousel-dots");

//Tạo dots tương đương với ảnh
var dots = Array.from(carouselInner.children)
  .map(function () {
    return `<li class="dot"></li>`;
  })
  .join("");
carouselDots.innerHTML = dots;

var carouselDot = document.querySelectorAll(".carousel-dots li");

// Tính kích thước 1 item
var itemWidth = carouselInner.clientWidth;

// Tính Tổng kích thước các item
var totalWidth = carouselItems.length * itemWidth;

// Cập nhật CSS
carouselInner.style.width = `${totalWidth}px`;

var position = 0;
// Lắng nghe sự kiện của nút next
carouselNextBtn.addEventListener("click", function () {
  //   Khi bấm vào =>trừ đi kích thước của 1 item
  if (Math.abs(position) + itemWidth * 2 > totalWidth) {
    return;
  }

  position -= itemWidth;
  carouselInner.style.translate = `${position}px`;

  // Nhảy dot next
  var nextDotIndex = Math.abs(position) / itemWidth - 1;
  var currentDotIndex = Math.abs(position) / itemWidth;
  carouselDot[nextDotIndex].classList.remove("active");
  carouselDot[currentDotIndex].classList.add("active");
});

carouselPrevBtn.addEventListener("click", function () {
  //   Khi bấm vào =>trừ đi kích thước của 1 item
  if (Math.abs(position) < itemWidth) {
    return;
  }

  position += itemWidth;
  carouselInner.style.translate = `${position}px`;

  // Nhảy dot prev
  var prevDotIndex = Math.abs(position) / itemWidth + 1;
  var currentDotIndex = Math.abs(position) / itemWidth;
  carouselDot[prevDotIndex].classList.remove("active");
  carouselDot[currentDotIndex].classList.add("active");
});

// Click dot
carouselDot[0].classList.add("active");

carouselDot.forEach(function (dot, index) {
  dot.addEventListener("click", function (e) {
    e.preventDefault();

    var dotActive = carousel.querySelector(".carousel-dots .active");
    if (dotActive !== null) {
      dotActive.classList.remove("active");
    }
    dot.classList.add("active");

    position = -(index * itemWidth);
    carouselInner.style.translate = `${position}px`;
  });
});

// Trượt slider
var flagMove = false;
var isOffsetX;
var threshold = 0.15 * itemWidth; //15%

carouselInner.addEventListener("mousedown", function (e) {
  flagMove = true;
  isOffsetX = e.offsetX;
});

carouselInner.addEventListener("mouseup", function (e) {
  flagMove = false;
  var moveWidth = e.clientX - isOffsetX;
  carouselInner.style.cursor = "default";
  carouselInner.style.transition = null;

  // Kiểm tra kéo qua ngưỡng
  if (Math.abs(moveWidth) < threshold) {
    carouselInner.style.translate = `${position}px`;
  } else {
    if (Math.abs(position) + itemWidth === totalWidth) {
      carouselInner.style.translate = `${position}px`;
    }
    if (Math.abs(position) < itemWidth) {
      carouselInner.style.translate = `${position}px`;
    }
  }
});

carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();

  if (flagMove === false) return;
  var moveWidth = e.clientX - isOffsetX;
  carouselInner.style.cursor = "grab";
  carouselInner.style.transition = null;

  //next và prev
  if (Math.abs(moveWidth) >= threshold) {
    if (moveWidth < 0) {
      if (Math.abs(position) + itemWidth === totalWidth) {
        return;
      }
      position -= itemWidth;
      carouselInner.style.translate = `${position}px`;
      flagMove = false;

      //chuyen dot next
      var nextDotIndex = Math.abs(position) / itemWidth - 1;
      var currentDotIndex = Math.abs(position) / itemWidth;
      carouselDot[nextDotIndex].classList.remove("active");
      carouselDot[currentDotIndex].classList.add("active");
    } else {
      if (Math.abs(position) < itemWidth) {
        return;
      }
      position += itemWidth;
      carouselInner.style.translate = `${position}px`;
      flagMove = false;

      //chuyen dot prev
      var prevDotIndex = Math.abs(position) / itemWidth + 1;
      var currentDotIndex = Math.abs(position) / itemWidth;
      carouselDot[prevDotIndex].classList.remove("active");
      carouselDot[currentDotIndex].classList.add("active");
    }
  } else {
    carouselInner.style.transition = "none";
    carouselInner.style.translate = `${position + moveWidth}px`;
  }
});
