$(function(){
	$("nav > ul > li").hover(
		function(){
			$(".header_outter").addClass("over");
		},
		function(){
			$(".header_outter").removeClass("over");
		}
	);
	$("nav > ul > li:first-child > a").focusin(function(){
		$(".header_outter").addClass("over");
	});
	$("nav li:last-child li:last-child").focusout(function(){
		$(".header_outter").removeClass("over");
	});
	$("nav > ul > li > a").focusin(function(){
		$(this).addClass("over");
	});
	$("nav li li:last-child").focusout(function(){
		$(this).parent().prev("a").removeClass("over");
	});
	$(".cont1").css({"z-index" : 2});
	$(".con1").click(function(e){
		e.preventDefault();
		$(".con").removeClass("active");
		$(".notice_content").removeClass("active");
		$(".notice_content").css({"z-index" : 1});
		$(".con1").addClass("active");
		$(".cont1").addClass("active");
		$(".cont1").css({"z-index" : 2});
	});
	$(".con2").click(function(e){
		e.preventDefault();
		$(".con").removeClass("active");
		$(".notice_content").removeClass("active");
		$(".notice_content").css({"z-index" : 1});
		$(".con2").addClass("active");
		$(".cont2").addClass("active");
		$(".cont2").css({"z-index" : 2});
	});
	var n=0;
	$(".select1_1").click(function(e){
		e.preventDefault();
		n=$(".select2_1").height();
		$(".select2_2").removeClass("active");
		$(".select2_1").addClass("active");
		if(n > 34) {
			$(".select2_1").removeClass("active");
		}
	});
	var n=0;
	$(".select1_2").click(function(e){
		e.preventDefault();
		n=$(".select2_2").height();
		$(".select2_1").removeClass("active");
		$(".select2_2").addClass("active");
		if(n > 34) {
			$(".select2_2").removeClass("active");
		}
	});
	var filter = "win16|win32|win64|mac|macintel";
	if( navigator.platform  ){
        if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
             location.href = "https://anjs950601.github.io/project1m/";
        }
 	}
});
