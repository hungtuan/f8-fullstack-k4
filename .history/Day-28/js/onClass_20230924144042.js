var checkAll = document.querySelector(".check-all");
var checkItem = document.querySelectorAll(".check-item");

checkAll.addEventListener("change", function () {
  var status = this.checked;

  checkItem.forEach(function (checkItem) {
    checkItem.checked = status;
  });
});

checkItem.forEach(function (checkItem) {
  checkItem.addEventListener("change", function () {
    if (!this.checked) {
      checkAll.checked = false;
      return;
    }
    var status = Array.from(checkItem).every((checkItems) => {
      return checkItems.checked;
    });
    checkAll.checked = status;
  });
});
