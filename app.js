
$(function() {
  var undo = false;

  $(".button").on("click", function() {

    $vagonval = Number($(this).attr("value"));
    $sum = Number($("#sum").text());

    $count = Number($(this).find(".count").text());

    if (undo) {
      if ($count) {
        $sum = $sum - $vagonval;
        $count = $count - 1;
      }
    }
    else {
      $sum = $vagonval + $sum;
      $count = $count + 1;
    }

    $("#sum").empty().text($sum);
    $(this).find(".count").empty().text($count);

    undo = false;
  });

  $(".dec").on("click", function() {
    undo = true;
  });

});



$(function() {
  $("#cancel").on("click", function() {
    $("#sum").empty().text("0");
    $(".button .count").empty().text("0");
    return false;
  });
});
