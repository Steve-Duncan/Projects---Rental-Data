$(function() {

    $('#login-form-link').click(function(e) {
    	$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		
		// replace html of modal-body
		var oldhtml = $('.modal-title').html();
		var newhtml = oldhtml.replace("Register","Log in");
		$(".modal-title").html(newhtml);
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');

		// replace html of modal-body
		var oldhtml = $('.modal-title').html();
		var newhtml = oldhtml.replace("Log in", "Register");
		$(".modal-title").html(newhtml);

		$(this).addClass('active');
		e.preventDefault();
	});

});

