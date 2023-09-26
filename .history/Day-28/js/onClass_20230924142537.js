var checkAll = document.querySelector(".check-all");
var checkItem = document.querySelectorAll(".check-item");

checkAll.addEventListener("change", function () {
  var status = this.checked;

  checkItem.forEach(function (checkItem) {
    checkItem.checked = status;
  });
});

checkItem.forEach(function (checkItem) {
  if (checkItem.checked) {
    checkItem.checked = false;
  }
});
