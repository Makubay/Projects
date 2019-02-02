$(document).ready(function() {
	$(".menu-toggle").click(function() {
		$("nav").toggleClass('active');
		$(this).toggleClass('active');
	});
});