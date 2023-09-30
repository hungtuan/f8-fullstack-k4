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
var handInput = function (value) {};

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

// readyState của Audio
if (audio.readyState > 0) {
  durationEl.innerText = getTime(audio.duration);
}

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

//
var karaokeContent = document.querySelector(".karaoke-content");
var currentIndex;

var handleKaraoke = () => {
  var currentTime = audio.currentTime * 1000;

  var index = lyrics.findIndex(function (sentences) {
    var words = sentences.words;
    return (
      currentTime >= words[0].startTime &&
      currentTime <= words[words.length - 1].endTime
    );
  });

  handleColor(currentTime);

  if (index !== -1 && currentIndex !== index) {
    // Khi bắt đầu hát
    if (index === 0) {
      var sentenceHTML = `<p>${getSentence(0)}</p>
          <p>${getSentence(1)}</p>`;
      karaokeContent.innerHTML = sentenceHTML;
    }
  } else {
    nextSentence(index);
  }
  currentIndex = index;

  requestId = requestAnimationFrame(handleKaraoke);
};

var handleColor = (currentTime) => {
  var wordEl = karaokeContent.querySelectorAll(".word");
  //   console.log(wordEl);
  if (wordEl.length) {
    wordEl.forEach((wordItem, index) => {
      var startTime = wordItem.dataset.startTime;
      var endTime = wordItem.dataset.endTime;

      if (currentTime > startTime && currentTime < endTime) {
        var rate = ((currentTime - startTime) / (endTime - startTime)) * 100;

        wordItem.children[0].style.width = `${rate}%`;
        if (index > 0 && currentTime >= wordEl[index - 1].dataset.endTime) {
          wordEl[index - 1].children[0].style.width = `100%`;
        }
      }
    });
  }
};

var nextSentence = function (index) {
  var lines = karaokeContent.children;
  if (index % 2 === 0) {
    lines[0].style.transition = `opacity 0.3s linear`;
    lines[0].style.opacity = 0;

    setTimeout(function () {
      lines[0].style.opacity = 1;
      lines[0].innerHTML = getSentence(index + 1);
    }, 300);
  } else {
    lines[1].style.transition = `opacity 0.3s linear`;
    lines[1].style.opacity = 0;

    setTimeout(function () {
      lines[1].style.opacity = 1;
      lines[1].innerHTML = getSentence(index + 1);
    }, 300);
  }
};

var getSentence = function (index) {
  var words = lyrics[index].words;
  var sentence = words
    .map((word) => {
      return `<span class="word" data-start-time="${word.startTime}" data-end-time="${word.endTime}">${word.data}
      <span>${word.data}</span>
      </span>`;
    })
    .join(" ");

  return sentence;
};

const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

const cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var requestId;

audio.addEventListener("play", function () {
  requestId = requestAnimationFrame(handleKaraoke);
});

audio.addEventListener("pause", function () {
  cancelAnimationFrame(requestId);
});
