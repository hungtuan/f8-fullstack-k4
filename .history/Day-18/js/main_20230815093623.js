var content = document.querySelector(".content");
var text = content.innerText;
var text = text.split(" ");
console.log(text);

var highlightText = () => {
  var textNew = "";

  for (var i = 0; i < text.length; i++) {
    if (i === 0) {
      textNew += `<span class= "highlight">${text[i]}</span>`;
    }
  }
};
