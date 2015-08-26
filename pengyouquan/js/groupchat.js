showchat('#chatlist .msgline:first-child');

$('#step3 .clickTip').click(function(){
	var self = $(this);
	if(self.hasClass('send')){
		$('#input2').click();
	} else {
		$('#input').click();
	}
});

$('#input').click(function(){
	$(this).hide();
	$('#input2').fadeIn(500);
	$('#step3 .clickTip').addClass('send');
});

$('#input2').click(function(){
	
	$('#step3 .clickTip').hide();
	
	$(this).hide();
	$('#input')
		.fadeIn(500)
		.unbind('click');
	
	$('#chatlist')
		.append(['<div class="msgline me">',
			'<img src="../img/head.png" class="head" />',
			'<div class="msgcontent">我知道他们！他们可是很厉害的人物！好想认识他们！</div>',
		'</div>'].join(''));
		
	
	showchat('#chatlist .msgline:last-child', addchat);	
});

var selectedPersonCard = null;
var selectedPersonIndex = null;
$('#chatlist [name="card"]').live('click',function(){
	var self = $(this),
		id = self.attr('_index');
		
	selectedPersonCard = chatDataList[id];
	selectedPersonIndex = id;
	
	$('#step3').hide();
	$("#step4")
		.fadeIn(1000)
		.load('persondetails.html');
});

function showchat(id, callback){
	
	setTimeout(function(){
		var send_music = new Audio();
		send_music.src = '../audio/send.mp3';
		send_music.play();
		$(id).addClass('show');
		if(callback){
			setTimeout(callback, 1500);
		}
	}, 50);
	
	if(callback){
		$(document).scrollTop(99999);
	}
}
var chatDataList = [];
chatDataList.push({
	type: 'msg',
	head: '../img/head10.png',
	name: 'c同学',
	content: '哈哈！你们真想认识他们？我有他们的微信号！你们可以自己添加5位大趴导师，和他们聊聊！'
});
chatDataList.push({
	type: 'card',
	head: '../img/head10.png',
	name: 'c同学',
	cardHead: '../img/head6.png',
	cardName: 'Terrence',
	cardNickName: '风险管理部门合伙人'
});
chatDataList.push({
	type: 'card',
	head: '../img/head10.png',
	name: 'c同学',
	cardHead: '../img/head1.png',
	cardName: '梁捷',
	cardNickName: '税务部门合伙人'
});
chatDataList.push({
	type: 'card',
	head: '../img/head10.png',
	name: 'c同学',
	cardHead: '../img/head3.png',
	cardName: 'Pascal',
	cardNickName: '企业管理咨询合伙人'
});
chatDataList.push({
	type: 'card',
	head: '../img/head10.png',
	name: 'c同学',
	cardHead: '../img/head11.png',
	cardName: 'Jaimie',
	cardNickName: '财务咨询服务部门总监'
});
chatDataList.push({
	type: 'card',
	head: '../img/head10.png',
	name: 'c同学',
	cardHead: '../img/head2.png',
	cardName: '潘清',
	cardNickName: '德勤审计合伙人'
});
var addchatIndex = 0;
function addchat(){
	
	if(chatDataList.length > addchatIndex){
		var data = chatDataList[addchatIndex];
		if(data.type == 'msg'){
			$('#chatlist')
				.append(['<div class="msgline ', (data.isMe ? "me":""),'">',
					'<img src="', data.head,'" class="head" />',
					'<div class="name">', data.name,'</div>',
					'<div class="msgcontent">', data.content,'</div>',
				'</div>'].join(''));
		} else if(data.type == 'card'){
			$('#chatlist')
				.append(['<div class="msgline">',
					'<img src="', data.head,'" class="head" />',
					'<div class="name">', data.name,'</div>',
					'<div class="msgcontent" name="card" _index="', addchatIndex,'">',
						'<div class="tl">名片</div>',
						'<img src="', data.cardHead,'" class="c_head" />',
						'<div class="c_name">', data.cardName,'</div>',
						'<div class="c_nick">', data.cardNickName,'</div>',
					,'</div>',
				'</div>'].join(''));
		}
		
		addchatIndex++
		showchat('#chatlist .msgline:last-child', addchat);
	}
}
