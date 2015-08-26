$('#numlist .num').live('click', function(){
	var self = $(this),
		val = self.attr('_val'),
		num = $('#numbox [_val="' + val + '"]'),
		topnumVal = num.attr('_val');
	
	if(num.length > 0 && !num.hasClass('cur')){
		var pre = num.prev();
		if(pre.length > 0 && pre.hasClass('cur') && val == topnumVal){
			num.addClass('cur')
		} else if(pre.length == 0 && val == topnumVal){
			num.addClass('cur')
		} else {
			clearNumSelected();
		}
	} else {
		clearNumSelected();
	}
	
	if($('#numbox .num:last').hasClass('cur')){
		$('#step2').hide();
		$("#step3")
			.fadeIn(1000)
			.load('groupchat.html');
	}
});

function clearNumSelected(){
	
	$('#numbox .num').removeClass('cur');
	var count = 0,
		temp = ['-30px', '30px', '-30px', '30px'];
		
	animate();

	function animate(){
		
		$('#numbox')
		.stop()
		.animate({
			'margin-left': temp[count]
		}, 80, function(){
			if(temp.length > ++count){
				animate();
			}
		});
	}
}
