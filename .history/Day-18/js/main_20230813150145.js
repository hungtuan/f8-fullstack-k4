var email = "Tuân +840934572623 học viên F8, số khác 0934572624";

var pattern = /(0|\+84)\d{9}/g;
console.log(email.replace(pattern, "***"));
