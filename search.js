$(document).ready(function(){
	$( "#target" ).keypress(function() {
		var search = $("#target").val();
			  $(window).attr("location","http://www.google.com.mm/#q="+search);
		});
});
