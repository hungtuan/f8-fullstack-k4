import { client } from "./client.js";

const loading = document.querySelector(".loading-container");
const audio = document.querySelector(".audio");

let numberQuestion = 1;
let isCorrect = false;
let numberIsChecked = 0;
let score = 0;
let answerArr = [];
let numberOfCorrectAnswer = 0;
let numberOfInCorrectAnswer = 0;
let timeOutId;
let isNext = false;

const getData = async (resource = "questions", query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { response, data } = await client.get(`/${resource}?${queryString}`);
  return data;
};

const questionData = getData();

function animate() {
  const startBtn = document.querySelector(".start-btn");
  const actionContainer = document.querySelector(".action-container");
  const quizContainer = document.querySelector(".quiz-container");
  const questionList = document.querySelector(".question-list");

  startBtn.addEventListener("click", () => {
    actionContainer.classList.add("hide");
    quizContainer.classList.remove("hide");

    loading.classList.add("hide");
    questionList.classList.remove("hide");
    countdownTimer();
  });
}

animate();

function renderQuestion() {
  const questionList = document.querySelector(".question-list");
  questionList.innerHTML = "";
  questionData.then((data) => {
    data.forEach((question, index) => {
      const questionItem = document.createElement("div");
      questionItem.classList.add("question-item");
      questionList.appendChild(questionItem);

      const questionContainer = document.createElement("div");
      questionContainer.classList.add("question-container");
      questionItem.appendChild(questionContainer);

      const quantityQuestion = document.createElement("div");
      quantityQuestion.classList.add("quantity-question");
      quantityQuestion.innerHTML = `${++index}/${data.length}`;
      questionContainer.appendChild(quantityQuestion);

      const scoreContainer = document.createElement("div");
      scoreContainer.classList.add("score-container");
      scoreContainer.innerHTML = `Score: <span class="score">0</span>`;
      questionContainer.appendChild(scoreContainer);

      const countdown = document.createElement("div");
      countdown.classList.add("countdown");

      const countdownTimer = document.createElement("div");
      countdownTimer.classList.add("countdown-timer");
      countdown.appendChild(countdownTimer);

      const progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");
      countdown.appendChild(progressBar);

      const progress = document.createElement("div");
      progress.classList.add("progress");
      progress.id = "progress";
      progressBar.appendChild(progress);
      questionContainer.appendChild(countdown);

      const questionText = document.createElement("p");
      questionText.classList.add("question");
      questionText.innerHTML = `${question.question}`;
      if (question.correct_answers.length >= 2) {
        const questionNote = document.createElement("p");
        questionNote.classList.add("question-note");
        questionNote.innerHTML = `Note: Bạn có thể chọn nhiều đáp án`;
        questionText.appendChild(questionNote);
      }
      questionContainer.appendChild(questionText);

      const answerContainer = document.createElement("div");
      answerContainer.classList.add("answer-container");
      questionContainer.appendChild(answerContainer);

      question.options.forEach((option, index) => {
        const answer = document.createElement("div");
        answer.classList.add("answer");
        answer.innerHTML = `${option}`;
        answer.setAttribute("data-index", index);
        answerContainer.appendChild(answer);
      });
      questionList.appendChild(questionItem);
    });

    chooseAnswer();
  });
}

renderQuestion();

function playAgain() {
  const actionContainer = document.querySelector(".action-container");
  const quizContainer = document.querySelector(".quiz-container");
  const questionList = document.querySelector(".question-list");
  const resultPage = document.querySelector(".result-page");
  const loading = document.querySelector(".loading-container");

  // Ẩn nút "Chơi lại" khi bắt đầu trò chơi
  resultPage.style.display = "none";
  // Thêm sự kiện cho nút "Chơi lại"
  loading.classList.remove("hide");

  // Đặt lại tất cả biến và bắt đầu trò chơi lại
  numberQuestion = 1;

  isCorrect = false;
  numberIsChecked = 0;
  score = 0;
  answerArr = [];
  numberOfCorrectAnswer = 0;
  numberOfInCorrectAnswer = 0;
  isNext = false;

  actionContainer.classList.add("hide");
  quizContainer.classList.remove("hide");
  loading.classList.add("hide");

  questionList.classList.remove("hide");
  renderQuestion();
  nextSlide();
  countdownTimer();
}

function chooseAnswer() {
  const answerBtns = document.querySelectorAll(".answer");
  answerBtns.forEach((answerBtn) => {
    answerBtn.addEventListener("click", (e) => {
      const el = e.target;
      answerArr.push(el.innerHTML);
      numberIsChecked++;

      questionData.then((data) => {
        let numberOfAnswers = data[numberQuestion - 1].correct_answers.length;
        if (data[numberQuestion - 1].correct_answers.includes(el.innerHTML)) {
          el.classList.add("correct");
          isCorrect = true;
        } else {
          isCorrect = false;
          el.classList.add("incorrect");
          if (audio.src !== "./music/Day36_sound_incorrect.mp3") {
            audio.src = "./music/Day36_sound_incorrect.mp3";
          }
          audio.play();
          numberOfInCorrectAnswer++;
          if (!isNext) {
            nextSlide();
          }
          isNext = true;
          return;
        }
        if (numberIsChecked === numberOfAnswers) {
          if (isCorrect) {
            score += 100;
            const scoreContainer =
              document.querySelectorAll(".score-container");
            scoreContainer.forEach((scoreContainer) => {
              scoreContainer.innerHTML = `Score: <span class="score">${score}</span>`;
            });
            if (audio.src !== "./music/Day36_sound_correct.mp3") {
              audio.src = "./music/Day36_sound_correct.mp3";
            }
            audio.play();
            numberOfCorrectAnswer++;
          } else {
            if (audio.src !== "./music/Day36_sound_incorrect.mp3") {
              audio.src = "./music/Day36_sound_incorrect.mp3";
            }
            audio.play();
            numberOfInCorrectAnswer++;
          }
          if (!isNext) {
            nextSlide();
          }
          isNext = true;
        }
      });
    });
  });
}

function nextSlide() {
  setTimeout(() => {
    document.querySelector(".question-list").style.transform = `translateX(-${
      numberQuestion * 100
    }vw)`;
    numberQuestion++;
    answerArr = [];
    numberIsChecked = 0;
    isCorrect = false;
    countdownTimer();
    isNext = false;
  }, 500);
}

function countdownTimer() {
  if (timeOutId) {
    clearTimeout(timeOutId);
  }
  let secondsLeft = 10;
  const progressElement = document.querySelectorAll(".progress");

  function updateProgressBar() {
    const progressWidth = (secondsLeft / 10) * 100;
    progressElement.forEach((progress) => {
      progress.style.width = progressWidth + "%";
    });
  }

  function countdown() {
    updateProgressBar();
    questionData.then((data) => {
      if (numberQuestion > data.length) {
        renderResult();
        return;
      }
      if (secondsLeft > 0) {
        secondsLeft--;
        timeOutId = setTimeout(countdown, 1000);
      } else {
        nextSlide();
      }
    });
  }

  countdown();
}

function renderResult() {
  const resultPage = document.querySelector(".result-page");

  questionData.then((data) => {
    const html = `
            <div class="question-container">
                <h2 style="text-align: center;">Result</h2>
                <div class="result-list">
                    <div class="result-item">
                    <p class="result-text">${score}</p>
                    <p class="result-title">Score</p>
                    </div>
                    <div class="result-item">
                    <p class="result-text">${data.length}</p>
                    <p class="result-title">Total Question</p>
                    </div>
                    
                    <div class="result-item">
                    <p class "result-text">${numberOfInCorrectAnswer}</p>
                    <p class="result-title">Incorrect</p>
                    </div>
                    <div class="result-item">
                    <p class "result-text">${numberOfCorrectAnswer}</p>
                    <p class="result-title">Correct</p>
                    </div>
                    <button class="play-again" style="z-index: 2">Chơi lại</button>
                    
                </div>
            </div>
        `;
    resultPage.innerHTML = html;

    //Play Again

    const playAgainBtn = document.querySelector(".play-again");
    playAgainBtn.addEventListener("click", () => {
      playAgain(); //Gọi hàm chơi lại
    });
    resultPage.style.display = "block";
  });
}
