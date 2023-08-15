var content = document.querySelector(".content");
var text = content.innerText;
var splitText = text.split(" ");
var textIndex = 0;
console.log(splitText);

var highlightText = () => {
  var textNew = "";

  for (var i = 0; i < splitText.length; i++) {
    if (i === textIndex) {
      textNew += `<span class="highlight">${splitText[i]}</span>`;
      console.log(splitText[i]);
    } else {
      textNew += splitText[i];
    }
    textNew += " ";
    console.log(textNew);
  }
  content.innerHTML = textNew.trim();

  textIndex++;

  if (textIndex >= splitText.length) {
    textIndex = 0; //Xét lại ban đầu
  }
};

setInterval(highlightText, 900);
