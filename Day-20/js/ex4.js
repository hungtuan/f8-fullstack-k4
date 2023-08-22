var arr = [
  [
    "https://picsum.photos/200/150",
    "Tiêu đề bài viết 1",
    ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illum odio unde! Ad, debitis nam animi qui tenetur at eius, expedita ratione ipsa explicabo aliquid et ducimus facilis labore voluptatibus.`,
  ],
  [
    "https://picsum.photos/200/150",
    "Tiêu đề bài viết 2",
    ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illum odio unde! Ad, debitis nam animi qui tenetur at eius, expedita ratione ipsa explicabo aliquid et ducimus facilis labore voluptatibus.sadasdsadsadsssaasdsadasd`,
  ],
  [
    "https://picsum.photos/200/150",
    "Tiêu đề bài viết 3",
    ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illum odio unde! Ad, debitis nam animi qui tenetur at eius, expedita ratione ipsa explicabo aliquid et ducimus facilis labore voluptatibus.`,
  ],
];

var html = '<div class="container">\n';

html += `${arr
  .map((value, index) => {
    var indexCurrent = index + 1;

    if (indexCurrent % 2 !== 0) {
      return `<div class = "item">
                <div class = "img"><img src = "${value[0]}"></div>
                <div class = "content">
                <h2>${value[1]}</h2>
                <P>${value[2]}</P>
                </div>
            </div>
            <div class = "line"></div>
            `;
    } else {
      return `<div class = "item">
        <div class = "img"><img src = "${value[0]}"></div>
        <div class = "content">
        <h2>${value[1]}</h2>
        <P>${value[2]}</P>
        </div>
    </div>
    <div class = "line"></div>`;
    }
  })
  .join("")}`;

html += "</div>";

document.write(html);
