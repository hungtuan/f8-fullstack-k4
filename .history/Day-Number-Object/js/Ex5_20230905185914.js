// # Bài 5:
// Chuyển mảng sau thành dạng thẻ html select option

var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

function generateSelectOptions(categories, parentName = "") {
  let options = "";

  for (const category of categories) {
    const categoryName = parentName
      ? `${parentName}${category.name}`
      : category.name;
    options += `<option value="${category.id}">${categoryName}</option>`;

    if (category.children && category.children.length > 0) {
      options += generateSelectOptions(category.children, categoryName);
    }
  }

  return options;
}

var selectOptions = generateSelectOptions(categories);

// Tạo thẻ select và thêm các option vào đó
var selectElement = document.createElement("select");
selectElement.innerHTML = selectOptions;

// Đặt id cho thẻ select (tùy chọn)
selectElement.id = "categorySelect";

// Thêm thẻ select vào DOM
document.body.appendChild(selectElement);
