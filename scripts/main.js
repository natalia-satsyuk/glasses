// slide-menu
$(".nav-bar-block").click(function() {
	$(".nav-list").slideToggle(400);
});

$(".support-right-item-text").click(function() {
	$(".support-sublist").slideToggle(400);
});

//list
$(".nav-link").hover(function() {
	$(".nav-sublist").removeClass("hover");
	$(this).next().addClass("hover");
});

$(".nav-sublist").mouseleave(function() {
	$(this).slideUp(300).removeClass("hover");
});

// slider
$(".slider-wrap").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000
});

