
$(document).ready(function() {

	$("#show_login").click(function(){
		alert("not in showpopup");
		showpopup();
	});
	
	$("#close_login").click(function(){
		hidepopup();
	});
});

function showpopup() {

	$("#loginform").fadeIn();
	$("#loginform").css({"visibility":"visible","display":"block"});
};

function hidepopup() {
	alert("calling popup?");
	$("#loginform").fadeOut();
	$("#loginform").css({"visibility":"hidden","display":"none"});
};