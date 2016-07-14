$(document).ready(function(){
	$('a').on("click", function(){
		console.log(this);
		var imgUrl = $(this).data("img-url")
		console.log(imgUrl);
		$('img').attr("src", imgUrl);
		$('.lightbox').show();
		$('img').on("click",function(){
			$('.lightbox').hide();
		})
	});
});