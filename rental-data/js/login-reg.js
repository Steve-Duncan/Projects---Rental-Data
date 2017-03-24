
// bind event listeners when modal is loaded
$('#log_reg_modal').on('shown.bs.modal', function() {

    $('#form_login-link').click(function(e) {

    	$("#form_login").delay(100).fadeIn(100);
 		$("#form_register").fadeOut(100);
 		$('.plan').fadeOut(100);
 		$('#form_pymt').fadeOut(100);
		$('#form_register-link').removeClass('active');
		
		// replace html of modal-body
		var oldhtml = $('.modal-title').html();
		var newhtml = oldhtml.replace(oldhtml,"Log in");
		$(".modal-title").html(newhtml);
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#form_register-link').click(function(e) {
		$("#form_register").delay(100).fadeIn(100);
		$('.reg').delay(100).fadeIn(100);
 		$("#form_login").fadeOut(100);
 		$('.plan').fadeOut(100);
 		$('.pymt').hide();
		$('#form_login-link').removeClass('active');

		// replace html of modal-body
		var oldhtml = $('.modal-title').html();
		var newhtml = oldhtml.replace(oldhtml, "Register");
		$(".modal-title").html(newhtml);

		$(this).addClass('active');
		e.preventDefault();
	});

	$('#btn-next-plan').click(function(e){
		$('.reg').fadeOut(100);
		$('.pymt').hide();
		$('.plan').delay(100).fadeIn(100);

		// replace html of modal-body
		var oldhtml = $('.modal-title').html();
		var newhtml = oldhtml.replace(oldhtml, "Choose a plan");
		$(".modal-title").html(newhtml);

		e.preventDefault();
	});

	$('#btn-next-payform').click(function(e){
		// $('.reg').fadeOut(100);
		// $('.addr').delay(100).fadeIn(100);
		$('.plan').fadeOut(100);
		$('.pymt').delay(100).fadeIn(100);

		// replace html of modal-body
		var oldhtml = $('.modal-title').html();
		var newhtml = oldhtml.replace(oldhtml, "Choose payment method");
		$(".modal-title").html(newhtml);

		e.preventDefault();
	});

	$('#btn-pay').click(function(e){
		// alert("show the pay form")
		// $('.reg').fadeOut(100);
		// $('.addr').delay(100).fadeIn(100);
		$('.plan').fadeOut(100);
		$('.pymt').delay(100).fadeIn(100);

		e.preventDefault();
	});


});

