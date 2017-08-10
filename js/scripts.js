$(document).ready(function() {
  $("#form").click(function(event) {
  var animal = $("#animal").val();

  if (animal === "Cheetah") {
    $('#Cheetah').toggle();
  } else if (animal === "Elephant") {

    $('#Elephant').toggle();
  }  else if (animal === "Bear") {
    $('#Bear').toggle();
  }  else {
    $("#home").toggle();
  }
  event.preventDefault();

  });
});
