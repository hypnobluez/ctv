$(document).ready(function() {
  $('a.cv').click(function() {
    $('#content-fill').load('../cv/index.html #w');
    
  });
});

$(document).scroll(function() {
	$("#tech").html($("#skills").html());
});
