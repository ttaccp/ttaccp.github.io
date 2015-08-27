var lock_music = new Audio();
lock_music.src = '../audio/lock.mp3';


var Msg = (function(window, $){
	
	var count = 0;
	var fn_addDom = function(){
				
		$('#msglist').append(['<div class="msg">',
								'<img src="../img/msg1.png" class="img" />',
							'</div>'].join(''));
		setTimeout(function(){
			
			var lock_music = new Audio();
			lock_music.src = '../audio/lock.mp3';
			lock_music.play();
			
			$('#msglist .msg:last').addClass('show');
			count++
			
			if(count < 2){
				fn_addDom();
			}
		}, 800);
	}
	
	var self = {
		start: function(){
			fn_addDom()
		}
	};
	
	return self;
	
})(window, $);

var startX = 0;
var hammertime = new Hammer(document.getElementById("text"));
hammertime.on("panstart panend", function (ev) {
	var x = ev.deltaX;
	if(ev.type == 'panstart'){
		startX = x;
	} else {
		if((x - startX) > 30){
			$('#step1').hide();
			$('#step2').fadeIn(1000);
		}
	}
});