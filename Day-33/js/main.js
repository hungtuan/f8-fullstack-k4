const button = document.querySelector(".btn");
const output = document.querySelector(".output");
const action = document.querySelector(".action");

function speechToText() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = "vi-VN";

  button.style.background = "orange";
  action.innerHTML = "Đang nghe, vui lòng nói yêu cầu của bạn...";

  recognition.onend = function () {
    button.style.background = "#549c24";
    action.innerHTML = "Dừng nghe, hi vọng kết quả theo ý bạn";
  };

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    output.innerHTML = "<b>Kết quả: </b>" + transcript;
    processTranscript(transcript);
  };

  recognition.start();
}

function processTranscript(transcript) {
  const openWebsite = (url) => window.open(url, "_blank");
  transcript = transcript.toLowerCase().replace(/[.,?]/g, "");
  switch (transcript) {
    case "youtube":
      openWebsite("https://www.youtube.com");
      break;
    case "facebook":
      openWebsite("https://www.facebook.com");
      break;
    case "google":
      openWebsite("https://www.google.com");
      break;
    case "instagram":
      openWebsite("https://www.instagram.com");
      break;
    case "google drive":
      openWebsite("https://drive.google.com");
      break;
    case "google maps":
      openWebsite("https://maps.google.com");
      break;
    case "bản đồ":
      openWebsite("https://maps.google.com");
      break;
    default:
      if (transcript.startsWith("chỉ đường") || transcript.startsWith("tới")) {
        const location = transcript
          .replace("chỉ đường", "")
          .replace("tới", "")
          .trim();
        openWebsite(`https://www.google.com/maps/place/${location}/`);
      } else if (
        transcript.startsWith("mở bài hát") ||
        transcript.startsWith("nghe bài hát")
      ) {
        const song = transcript
          .replace("mở bài hát", "")
          .replace("nghe bài hát", "")
          .trim();
        openWebsite(`https://zingmp3.vn/tim-kiem/tat-ca?q=${song}`);
      } else if (
        transcript.startsWith("mở video") ||
        transcript.startsWith("xem video")
      ) {
        const video = transcript
          .replace("mở video", "")
          .replace("xem video", "")
          .trim();
        openWebsite(`https://www.youtube.com/results?search_query=${video}`);
      } else {
        action.innerHTML = "<b>Kết quả: Không thực hiện được yêu cầu</b>";
      }
  }
}

button.addEventListener("click", speechToText);
