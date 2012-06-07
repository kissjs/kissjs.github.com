$(function(){

	$(".label").hide();

	$(".main").hover(
		function(){
			$(this).children(".label").show();
	},
		function(){
			$(this).children(".label").hide();
		}
	);
})