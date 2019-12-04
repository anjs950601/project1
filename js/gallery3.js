$(function(){
	var $galleryMoving=$(".section_key_move"); // 이동 갤러리의 참조입니다.
	var $controlls=$(".section_key_control"); // 컨트롤 버튼의 참조입니다.
	var galleryNum=3; // 갤러리 이미지 개수입니다.

	var n=0;
	var pos;

	$controlls.find("li").eq(n).find("a").addClass("active");

	$controlls.find("a").click(function(e){
		e.preventDefault();
		$controlls.find("li").removeClass("active");
		$(this).parent().addClass("active");

		n=$(this).parent().index();
		pos=n*-1*100+"%";
		$galleryMoving.animate({left:pos}, 500);
	});
});