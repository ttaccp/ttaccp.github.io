
setPersonDetails(selectedPersonCard);
function setPersonDetails(data){
	$('#step4_head').attr('src', data.cardHead);
	$('#step4_name').html(data.cardName + '<i></i>');
	$('#step4_nickname').html(data.cardNickName);
}

$('#personBtn').click(function(){
	$('#step4').hide();
	$("#step5")
		.fadeIn(1000)
		.load('chat.html');
});
