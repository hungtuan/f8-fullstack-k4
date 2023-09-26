// Tạo element
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var tooltip = document.querySelector(".tooltip");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;

var progressBarWidth = progressBar.clientWidth;
var valueMove;
var initialClientX;
var currentValue = 0;
var value = 0;
var isDragging = false;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    e.preventDefault();
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
    e.preventDefault();
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
    var newTime = (value * audio.duration) / 100;
    currentTimeEl.innerText = getTime(newTime);

    handInput(value);
  }
};

document.addEventListener("mousemove", handDrag);

document.addEventListener("mouseup", function () {
  if (isDragging) {
    isDragging = false;

    currentValue = value;
    var dropTime = (value * audio.duration) / 100;
    currentTimeEl.innerText = getTime(dropTime);

    audio.currentTime = dropTime;
  }
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

    value = (audio.currentTime * 100) / audio.duration;

    progress.style.width = `${value}%`;
  }

  showKaraoke();
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
  var mouseX = e.clientX - progressBarRect.left;

  //mouseX không nhỏ hơn 0 và không lớn hơn thanh progressBar
  mouseX = Math.max(0, Math.min(mouseX, progressBarRect.width));

  var percentage = mouseX / progressBarRect.width;
  var previewTime = percentage * audio.duration;
  tooltip.innerText = getTime(previewTime);
  tooltip.style.left = `${mouseX}px`;

  tooltip.style.display = "block";
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

// Buổi 28
// Lấy  dữ liệu lyrics
var sentences = lyrics.data.sentences;

var karaoke = document.querySelector(".karaoke");
var karaokeInner = document.querySelector(".karaoke-inner");
var openBtn = document.querySelector(".show-karaoke button");
var closeBtn = document.querySelector(".close");

var info = `<p>Anh Đây Đừng Khóc</p><p>Ca sĩ: Lý Tuấn Kiệt</p>`;

var shouldShowInfoAtStart = true;
var shouldShowInfoAtEnd = true;

function toggleKaraoke() {
  if (karaoke.classList.contains("show")) {
    karaoke.classList.remove("show");
    closeBtn.removeEventListener("click", toggleKaraoke);
  } else {
    karaoke.classList.add("show");
    closeBtn.addEventListener("click", toggleKaraoke);
  }
}

openBtn.addEventListener("click", toggleKaraoke);

// Hiển thị lời bài hát
function showKaraoke() {
  var currentTime = audio.currentTime * 1000;

  // Hiển thị thông tin ở đầu
  if (shouldShowInfoAtStart && currentTime < sentences[0].words[0].startTime) {
    karaokeInner.innerHTML = info;
    shouldShowInfoAtStart = false;
    shouldShowInfoAtEnd = true;
    return;
  }

  // Hiển thị thông tin ở cuối
  var lastSentence = sentences[sentences.length - 1];
  if (
    shouldShowInfoAtEnd &&
    currentTime > lastSentence.words[lastSentence.words.length - 1].endTime
  ) {
    karaokeInner.innerHTML = info;
    shouldShowInfoAtEnd = false;
    shouldShowInfoAtStart = true;
    return;
  }

  for (var i = 0; i < sentences.length; i += 2) {
    var currentSentence = sentences[i];
    var nextSentence = sentences[i + 1];

    if (
      i + 1 < sentences.length &&
      currentTime >= currentSentence.words[0].startTime - 800 &&
      currentTime <= nextSentence.words[nextSentence.words.length - 1].endTime
    ) {
      var even = currentSentence.words
        .map(function (word) {
          return `<span class="word">${word.data}</span>`;
        })
        .join("");

      var odd = nextSentence.words
        .map(function (word) {
          return `<span class="word">${word.data}</span>`;
        })
        .join("");

      var line = `<p class="even">${even}</p><p class="odd">${odd}</p>`;
      karaokeInner.innerHTML = line;
      return;
    }
  }

  if (
    currentTime >
      lastSentence.words[lastSentence.words.length - 1].endTime + 2000 &&
    currentTime < sentences[sentences.length - 2].words[0].startTime &&
    sentences[sentences.length - 2].words[0].startTime -
      lastSentence.words[lastSentence.words.length - 1].endTime >
      5000
  ) {
    karaokeInner.innerHTML = info;
  }
}
