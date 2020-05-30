function showValue() {
  if ($("#password")[0].type == "text") {
    $("#password")[0].type = "password";
  } else {
    $("#password")[0].type = "text";
  }
}
