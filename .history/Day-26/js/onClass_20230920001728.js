// Tạo element
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var tooltip = document.querySelector(".tooltip");

var progressBarWidth = progressBar.clientWidth;
var valueMove;
var initialClientX;
var currentValue = 0;
var value = 0;
var isDragging = false;
var newTime;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    // Lấy offsetX -> Tính phần trăm theo chiều rộng
    value = (e.offsetX * 100) / progressBarWidth;
    progress.style.width = `${value}%`;

    document.addEventListener("mousemove", handDrag);
    initialClientX = e.clientX;
    currentValue = value;

    var newTime = (value * audio.duration) / 100;
    currentTimeEl.innerText = getTime(newTime);
    audio.currentTime = newTime;
    handInput(value);
    isDragging = true;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();

  isDragging = true;
  initialClientX = e.clientX;
});

var handDrag = function (e) {
  if (isDragging) {
    valueMove = e.clientX - initialClientX;
    value = (valueMove * 100) / progressBarWidth + currentValue;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    progress.style.width = `${value}%`;

    //
    newTime = (value * audio.duration) / 100;
    currentTimeEl.innerText = getTime(newTime);

    handInput(value);
  }
};

document.addEventListener("mousemove", handDrag);

document.addEventListener("mouseup", function () {
  isDragging = false;
  currentValue = value;

  var dropTime = (value * audio.duration) / 100;
  currentTimeEl.innerText = getTime(dropTime);

  audio.currentTime = dropTime;
  handChange(value);
});

// Nhận giá trị khi kéo, khi bấm chuột xuống
// 1.Nhả chuột
var handChange = function (value) {};

// 2. Bấm chuột xuống và kéo
var handInput = function (value) {
  console.log(value);
};

// Audio
var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;

var playBtn = document.querySelector(".player .play-btn");

var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60); //Lấy được phút
  seconds = Math.floor(seconds - mins * 60); //Tính số giây
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
// Lắng nghe sự kiện loadeddata -> Khi nào audio tải xong
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("timeupdate", function () {
  if (!isDragging) {
    currentTimeEl.innerText = getTime(audio.currentTime);

    var value = (audio.currentTime * 100) / audio.duration;

    progress.style.width = `${value}%`;
  }
});

// Khi dừng, chạy
audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseIcon;
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playIcon;
});

// Hiển thị thời gian khi chỉ vào thanh
function showTooltip(e) {
  const progressBarRect = progressBar.getBoundingClientRect();
  let mouseX = e.clientX - progressBarRect.left;

  // //mouseX không nhỏ hơn 0 và không lớn hơn thanh progressBar
  // mouseX = Math.max(0, Math.min(mouseX, progressBarRect.width));

  var percentage = mouseX / progressBarRect.width;
  var previewTime = percentage * audio.duration;
  tooltip.innerText = getTime(previewTime);
  tooltip.style.display = "block";

  tooltip.style.left = `${mouseX}px`;
}

progressBar.addEventListener("mousemove", showTooltip);
progressBar.addEventListener("mouseleave", () => {
  tooltip.style.display = "none";
});

// Quay về đầu reset trạng thái
audio.addEventListener("ended", () => {
  progress.style.width = 0;
  value = 0;
  playBtn.innerHTML = playIcon;
  audio.currentTime = 0;
});
