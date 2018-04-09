$(document).ready(function() {
	$('.portfolio-box').click(function(event){
		$('.modal img').attr('src', $(this).attr('href'));
		$('.modal').modal('show');
	});
});