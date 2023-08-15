var content = document.querySelector(".content");
var text = content.innerText;
var splitText = text.split(" ");
console.log(splitText);

var highlightText = () => {
  var textNew = "";
  var textCurrent = 0;

  for (var i = 0; i < splitText.length; i++) {
    if (i === textCurrent) {
      textNew += `<span class="highlight">${splitText[i]}</span>`;
      console.log(splitText[i]);
    } else {
      textNew += splitText[i];
    }
    textNew += " ";
  }

  content.innerHTML = textNew.trim();
  textCurrent++;

  if (textCurrent >= splitText.length) {
    textCurrent = 0;
  }
};

setInterval(highlightText, 500);
