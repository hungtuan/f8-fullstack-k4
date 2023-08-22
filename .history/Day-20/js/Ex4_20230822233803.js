var arr = [
  [
    "https://picsum.photos/200",
    "Tiêu đề bài viết 1",
    ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illum odio unde! Ad, debitis nam animi qui tenetur at eius, expedita ratione ipsa explicabo aliquid et ducimus facilis labore voluptatibus.`,
  ],
  [
    "https://picsum.photos/200",
    "Tiêu đề bài viết 2",
    ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illum odio unde! Ad, debitis nam animi qui tenetur at eius, expedita ratione ipsa explicabo aliquid et ducimus facilis labore voluptatibus.`,
  ],
  [
    "https://picsum.photos/200",
    "Tiêu đề bài viết 3",
    ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illum odio unde! Ad, debitis nam animi qui tenetur at eius, expedita ratione ipsa explicabo aliquid et ducimus facilis labore voluptatibus.`,
  ],
];

var html = `<div class="container>
    ${arr.map(function (value, index) {
      if (index % 2 !== 0) {
        return `<div class = "item">
                <div class = "img"><img src = "${value[0]}"></div>
                <div class = "content">
                <h2>${value[1]}</h2>
                <P>${value[2]}</P>
                </div>
            </div>`;
      } else {
        return `<div class = "item">
        <div class = "img"><img src = "${value[0]}"></div>
        <div class = "content">
        <h2>${value[1]}</h2>
        <P>${value[2]}</P>
        </div>
    </div>`;
      }
    })}
</div>`;

document.write(html);
