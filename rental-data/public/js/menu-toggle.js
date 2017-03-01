
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
});          
