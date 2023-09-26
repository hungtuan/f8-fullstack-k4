var checkAll = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item");
var checkItem = document.querySelector(".check-item");

checkAll.addEventListener("change", function () {
  var status = this.checked;

  checkItems.forEach(function (checkItem) {
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
