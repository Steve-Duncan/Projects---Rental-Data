
// bind event listeners when search options selection modal is visible
$('#search_modal').on('shown.bs.modal', function() {

    $("#btn-search").click(function(){
    	var searchPrefs =[];
        var homeType = [];
        var beds, price, pets

        // get selected values for home types
        $.each($("input[name='home_type']:checked"), function(){            
            homeType.push($(this).val());
        });
        searchPrefs.push("Home types: " + homeType.join(", "));

		// get selected value for beds
        beds = $("input[name='beds']:checked").val();
        if(beds){
            searchPrefs.push("Number of bedrooms: " + beds);
        }

        // get selected value for price
        price = $("input[name='price']:checked").val();
        if(price){
            searchPrefs.push("Price: " + price);
        }

        // get selected value for pets
        pets = $("input[name='pets']:checked").val();
        if(pets){
            searchPrefs.push("Pets: " + pets);
        }

        // This is a temporary modal for simulating functionality
        // When search prefs modal is visible, hide the search options selection modal
		$('#search_prefs_modal').on('shown.bs.modal', function(e) {
			$("#search_modal").hide();
			
			// replace html of modal-body, showing search prefs selected and what to do next
			var oldhtml = $('#search_prefs').html();
			var newhtml = oldhtml.replace(oldhtml, searchPrefs.join('<br>'));
			newhtml += "<br><br>To do next: Implement Zone selector, then connect to the database."
			$("#search_prefs").html(newhtml);
			$(this).addClass('active');
			e.preventDefault();
		});
	});
});

// When closing the search prefs modal, refresh the screen
$('#search_prefs_modal').on('hidden.bs.modal', function () {
    location.reload();
})