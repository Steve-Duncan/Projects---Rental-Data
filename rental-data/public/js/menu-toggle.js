
$(document).ready(function(){

	$( '.has-submenu' ).on( 'click', function( e ) {
		$(".sub-menu").toggleClass("toggled-on");
		// e.stopPropagation();
		// e.preventDefault();
	});

	// collapse sub-menus if clicked anywhere else
	$(document).on("click", function(e){
		var _this = $( this );
		var $trigger = $(".has-submenu");
		if(_this !== $trigger) {
			$(".sub-menu").removeClass("toggled-on");

			$("navbar-toggle").addClass("collapsed");
		};
		
		// this hides elements with class of collapse
		$(".collapse").collapse("hide");
	});

	$("#login").on("click", function(){
		// alert("Login pressed");			
	});
	$("#register").on("click", function(){
		// alert("Register pressed");
		// replace html of modal-body
		// oldhtml = $('.modal-body').html();
		// var newhtml = oldhtml.replace("login", "register");
		// $(".modal-body").html(newhtml);

	});
	// $("#close_login").click(function(){
	// 	hidepopup();
	// });
});

function showpopup() {
	
	// $("#loginform").fadeIn();
	// $("#loginform").css({"visibility":"visible","display":"block"});
};

// function hidepopup() {
// 	alert("calling popup?");
// 	$("#loginform").fadeOut();
// 	$("#loginform").css({"visibility":"hidden","display":"none"});
// };
