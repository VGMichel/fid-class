$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).ready(function() {
	$('.portfolio-box').click(function(event){
		event.preventDefault();
		$('.modal img').attr('src', $(this).data('src'));
		$('#image-gallery-caption').text($(this).data('caption'));
		$('.modal').modal('show');
	});
});


/*$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).ready(function() {
	$('.portfolio-box').click(function(event){
		event.preventDefault();
		$('.modal img').attr('src', $(this).attr('href'));
		$('#image-gallery-caption').text($(this).data('caption'));
		$('.modal').modal('show');
	});
});*/