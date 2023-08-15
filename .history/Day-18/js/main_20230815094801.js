var content = document.querySelector(".content");
var text = content.innerText;
var splitText = text.split(" ");
console.log(text);

var highlightText = () => {
  var textNew = "";
  var textCurrent = 0;

  for (var i = 0; i < text.length; i++) {
    if (i === 0) {
      textNew += `<span class="highlight">${text[i]}</span>`;
    } else {
      textNew += text[i];
    }
    textNew += " ";
  }

  content.innerHTML = textNew.trim();
  textCurrent++;

  if (textCurrent >= text.length) {
    textCurrent = 0;
  }
};

setInterval(highlightText, 500);
