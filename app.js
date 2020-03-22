var ridesum = 0;

function updatesum() {
  $val = ridesum;
  if ($("#longest").prop('checked')) {
    $val = $val + 10;
  }
  $val = $val + (4 * $("input[name='station']:checked").val());
  $("#sum").empty().text($val);
}

$(function() {
  var undo = false;

  $(".button").on("click", function() {

    $vagonval = Number($(this).attr("value"));

    $count = Number($(this).find(".count").text());

    if (undo) {
      if ($count) {
        ridesum = ridesum - $vagonval;
        $count = $count - 1;
      }
    }
    else {
      ridesum = $vagonval + ridesum;
      $count = $count + 1;
    }

    updatesum();
    $(this).find(".count").empty().text($count);

    undo = false;
  });

  $(".dec").on("click", function() {
    undo = true;
  });

  $("#longest").change(function() {
    updatesum();
  });

  $("#stations").change(function() {
    updatesum();
  });
});



$(function() {
  $("#cancel").on("click", function() {
    ridesum = 0;
    $("#sum").empty().text("0");
    $(".button .count").empty().text("0");
    $("#longest").prop("checked", false);
    $("input[name='station']").filter('[value=0]').prop("checked", true);
    return false;
  });
});
