$(document).foundation();

$(function() {
	var pressTimer;
	var longPress = false;

	$(".button").mouseup(function(){
	  // Clear timeout
	  clearTimeout(pressTimer);
	  return false;
	}).mousedown(function(){
	  // Set timeout
	  pressTimer = window.setTimeout(function() {longPress = true;},500);
	  return false; 
	});

	$(".button").on("click", function() {

		$verdi = Number($(this).attr("value"));
		$sum = Number($("#sum").text());

		$count = Number($(this).find("span").text());

		if (longPress) {
			if ($sum >= $verdi) {
				$sum = $sum - $verdi;
				$count = $count - 1;
			}
		}
		else {
			$sum = $verdi + $sum;
			$count = $count + 1;
		}

		$("#sum").empty().text($sum);
		$(this).find("span").empty().text($count);

		longPress = false;
	});
});



$(function() {
	$("#cancel").on("click", function() {
		$("#sum").empty().text("0");
		$(".button span").empty().text("0");
		return false;
	});
});