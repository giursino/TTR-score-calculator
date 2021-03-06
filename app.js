var ridesum = 0;
var tracksum = 0;

function updatesum() {
  $val = ridesum;
  if ($("#longest").prop('checked')) {
    $val = $val + 10;
  }
  $val = $val + (4 * $("input[name='station']:checked").val());
  $val = $val + tracksum;
  $("#sum").empty().text($val);
}

function updatetrack(add) {
  var trackval = Number($("input[name='trackval']:checked").val());
  if (trackval) {
    $("#trackdefault").hide();
    $("#trackundo").show();
    if (add) {
      tracksum += trackval;
    }
    else {
      tracksum -= trackval;
    }
    var tclass = (add ? "tcompleted" : "tnotcompleted");
    var tsign = (add ? " +" : " -");
    $("#tracks").append('<span class="' + tclass + '">' + tsign + trackval + '</span>');
    updatesum();
  }
}

function trackinit() {
  tracksum = 0;
  $("#trackdefault").show();
  $("#trackundo").hide();
  $("#tracks").empty();
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
  $("#trackadd").on("click", function () {
    updatetrack(true);
  });
  $("#trackrm").on("click", function () {
    updatetrack(false);
  });
  $("#trackundo").on("click", function () {
    var last = $("#tracks span").last();
    tracksum -= Number(last.text());
    updatesum();
    last.remove();
    if (!$("#tracks span").last().text()) {
      trackinit();
    }
  });
});


$(function() {
  $("#cancel").on("click", function() {
    ridesum = 0;
    $("#sum").empty().text("0");
    $(".button .count").empty().text("0");
    $("#longest").prop("checked", false);
    $("input[name='station']").filter('[value=0]').prop("checked", true);
    trackinit();
    return false;
  });
});
