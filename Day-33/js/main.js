const button = document.querySelector(".btn");
const output = document.querySelector(".output");
const action = document.querySelector(".action");

function speechToText() {
  var transcript = null;
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = "vi-VN";
  recognition.start();

  recognition.onstart = function () {
    action.innerHTML = "Vui lòng nói yêu cầu của bạn...";
    button.style.background = "orange";
  };

  recognition.onspeechend = function () {
    action.innerHTML = "Nhấp nút trên để nói";
    button.style.background = "#3498db";
    recognition.stop();
  };

  recognition.onresult = function (event) {
    transcript = event.results[0][0].transcript;
    output.innerHTML = "<b>Kết quả: </b>" + transcript;
  };
  recognition.onend = function () {
    if (transcript) {
      transcript = transcript.toLowerCase().replace(/[.,?]/g, "");

      switch (transcript) {
        case "youtube":
          window.open("https://www.youtube.com");
          break;
        case "facebook":
          window.open("https://www.facebook.com");
          break;
        case "google":
          window.open("https://www.google.com");
          break;
        case "instagram":
          window.open("https://www.instagram.com");
          break;
        case "google drive":
          window.open("https://drive.google.com");
          break;
        case "google maps":
          window.open("https://maps.google.com");
          break;
        case "bản đồ":
          window.open("https://maps.google.com");
          break;
        default:
          const commandMappings = [
            {
              keywords: ["chỉ đường", "chỉ đường tới", "đường tới", "tới"],
              url: "https://www.google.com/maps/place/",
            },
            {
              keywords: ["bài hát", "mở bài hát", "nghe bài hát"],
              url: "https://zingmp3.vn/tim-kiem/tat-ca?q=",
            },
            {
              keywords: ["video", "mở video", "xem video"],
              url: "https://www.youtube.com/results?search_query=",
            },
          ];

          let matchedCommand = null;

          for (const mapping of commandMappings) {
            for (const keyword of mapping.keywords) {
              if (transcript.includes(keyword)) {
                matchedCommand = mapping;
                transcript = transcript.replace(new RegExp(keyword, "g"), "");
                break;
              }
            }
            if (matchedCommand) break;
          }

          if (matchedCommand) {
            window.open(`${matchedCommand.url}${transcript}`);
          } else {
            action.innerHTML = "<b>Không thực hiện được yêu cầu</b>";
          }
      }
    }
  };
}

button.addEventListener("click", speechToText);
