$(document).on("scroll", function(){
	
	var pixels = $(document).scrollTop()
	var total = $(document).height() - $(window).height()
	var percentage = 100 * pixels / total

	$("div.progress").css("width", percentage + "%")
})

// when a link in a list is hovered over change the img

$("ul a").hover(function() {
  $("#pic").removeClass().addClass($(this).attr('rel'));
});

/// create hidden div for each artist, 
