var content = document.querySelector(".content");
var text = content.innerText.split(" ");
var textIndex = 0;

console.log(text);

var highlightText = () => {
  var newText = "";

  for (var i = 0; i < text.length; i++) {
    if (i === textIndex) {
      newText += `<span class="highlight">${text[i]}</span>`;
    } else {
      newText += text[i];
    }
    newText += " ";
  }

  content.innerHTML = newText;

  textIndex = (textIndex + 1) % text.length;
};

setInterval(highlightText, 900);
