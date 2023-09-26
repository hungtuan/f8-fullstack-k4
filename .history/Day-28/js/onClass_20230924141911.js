var checkAll = document.querySelector(".check-all");
var checkItem = document.querySelectorAll(".check-item");

console.log(checkItem);

console.log(checkAll);

checkAll.addEventListener("click", function () {
  checkItem.addEventListener("change", function () {
    checkItem.checked;
  });
});
