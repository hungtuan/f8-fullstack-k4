var checkAll = document.querySelector(".check-all");
var checkItem = document.querySelectorAll(".check-item");

checkAll.addEventListener("change", function () {
  var status = this.checked;

  checkItem.forEach(function (checkItem) {
    checkItem.checked = status;
  });
});

checkItem.addEventListener("click", function () {
  checkItem.forEach(function (checkItem) {
    if (checkItem.checked === true) {
      checkItem.checked = false;
    }
  });
});
