$(function(){
	var n=0;
	var mover=0;

	$(".header_key_control li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		gmoving();
	});
	$(".right").click(function(e){
		e.preventDefault();
		if(n < 5){
			n=n+1;
		}
		gmoving();
	});
	$(".left").click(function(e){
		e.preventDefault();
		if(n > 0){
			n=n-1;
		}
		gmoving();
	});
	function gmoving(){
		mover=n * -1 * 99.95;
		$(".header_key_move").css({"left" : mover+"%"});
		$(".header_key_control li").removeClass("active");
		$(".header_key_control li").eq(n).addClass("active");
	}
});
