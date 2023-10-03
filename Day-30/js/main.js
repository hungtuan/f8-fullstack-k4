// Hàm lấy phần tử đầu tiên theo selector
const $ = (selector) => document.querySelector(selector);

// Hàm lấy tất cả các phần tử theo selector
const $$ = (selector) => document.querySelectorAll(selector);

// Biến lưu trạng thái dropdown
let isActiveBoxDownload = false;

// Lấy các phần tử DOM
const fileBtn = $("#file-btn");
const btnDropdown = $(".btn-dropdown");
const textDownloadBtn = $("#text-download-btn");
const pdfDownloadBtn = $("#pdf-download-btn");
const textEditor = $(".text-editor");
const btnBold = $("#btn-bold");
const btnUnderline = $("#btn-underline");
const btnItalic = $("#btn-italic");
const btnControlStyle = $(".btn-control-style");
const inputNameFile = $(".name-file");
const inputTypeColor = $('input[type="color"]');
const newBtn = $("#new-btn");

// Hàm để toggle dropdown và cập nhật trạng thái
const toggleDropdown = () => {
  btnDropdown.classList.toggle("active");
  isActiveBoxDownload = !isActiveBoxDownload;
};

// Sự kiện click và toggle dropdown
fileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDropdown();
});

// Sự kiện click bên ngoài để đóng dropdown khi mở
document.addEventListener("click", () => {
  if (isActiveBoxDownload) {
    toggleDropdown();
  }
});

// Hàm để đếm số từ và số ký tự
const countWord = () => {
  const text = textEditor.innerText.trim();
  const quantityWords = text === "" ? 0 : text.split(/\s+/).length;
  const quantityCharacters = text.length;
  $(".quantity-words").innerText = quantityWords;
  $(".quantity-characters").innerText = quantityCharacters;
};

// Sự kiện input trong textEditor và đếm từ và ký tự
textEditor.addEventListener("input", countWord);

// Hàm để áp dụng kiểu định dạng văn bản
const applyStyle = (style) => {
  document.execCommand(style, false, null);
};

// Sự kiện click trên các nút định dạng văn bản
btnBold.addEventListener("click", () => applyStyle("bold"));
btnItalic.addEventListener("click", () => applyStyle("italic"));
btnUnderline.addEventListener("click", () => applyStyle("underline"));

// Hàm để lấy tên tệp
const getNameFile = () => inputNameFile.value;

// Sự kiện input trong inputNameFile và cập nhật tên tệp
inputNameFile.addEventListener("input", getNameFile);

// Hàm để tạo link tải về file TXT
const createLinkDownloadTxt = () => {
  const nameFile = getNameFile();
  const blob = new Blob([textEditor.innerText], { type: "text/plain" });
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = `${nameFile}.txt`;
  return link;
};

// Hàm để tạo link tải về PDF
const createLinkDownloadPdf = () => {
  const nameFile = getNameFile();
  const opt = {
    filename: `${nameFile}.pdf`,
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(textEditor).save();
};

// Hàm để tạo tệp mới
const createNewFile = () => {
  textEditor.innerText = "";
  $(".quantity-words").innerText = 0;
  $(".quantity-characters").innerText = 0;
  inputNameFile.value = "untitled";
};

// Sự kiện click nút tạo tệp mới
newBtn.addEventListener("click", createNewFile);

// Sự kiện click nút tải về TXT
textDownloadBtn.addEventListener("click", () => {
  const link = createLinkDownloadTxt();
  link.click();
});

// Sự kiện click nút tải về PDF
pdfDownloadBtn.addEventListener("click", createLinkDownloadPdf);

// Sự kiện input trên inputTypeColor và đặt màu văn bản
inputTypeColor.addEventListener("input", () => {
  document.execCommand("foreColor", false, inputTypeColor.value);
});

// Xóa định dạng mặc định của văn bản khi paste
textEditor.addEventListener("paste", (e) => {
  e.preventDefault();
  const text = e.clipboardData.getData("text/plain");
  document.execCommand("insertText", false, text);
});
