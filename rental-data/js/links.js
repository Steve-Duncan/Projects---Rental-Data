// load modal / partial pages into main page
// show, hide and other functions are handled by search.js and others

$(document).ready(function(){
	// load the login/register modal
	$("#log_reg_modal").load("views/log_reg_modal.html")

	// load the search modal
	$("#search_modal").load("views/search_modal.html")

	// load the search preferences modal
	$("#search_prefs_modal").load("views/search_prefs_modal.html")

});


