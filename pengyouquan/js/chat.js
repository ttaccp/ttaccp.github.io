
$('#step5_name').html(selectedPersonCard.cardName);

showchat2('#chatlist2 .msgline:last-child', addchat2);

var chatDataList2 = [0];
chatDataList2.push([
	{
		type: 'msg',
		head: '../img/head6.png',
		name: 'Terrence',
		content: '同学，你好！我是Terrence'
	},
	{
		type: 'msg',
		isMe: true,
		head: '../img/head.png',
		content: '导师，您好！831德勤宣讲会几天后即将开始，听说那天会特别热闹，现场还有200张笔试直通卡发放！'
	},
	{
		type: 'msg',
		head: '../img/head6.png',
		name: 'Terrence',
		content: '是的呀！很期待你当天来参加！德勤大家庭这几天为了准备这次空中宣讲会都忙得不亦乐乎！你快来看看我们的朋友圈吧！'
	}
]);
chatDataList2.push([
	{
		type: 'msg',
		head: '../img/head1.png',
		name: '梁捷',
		content: '同学，你好，我是梁捷。看来你肯定是知道了德勤831空中宣讲！'
	},
	{
		type: 'msg',
		isMe: true,
		head: '../img/head.png',
		content: '恩恩！我知道！听说您跳舞特别棒！期待五位导师的出现！'
	},
	{
		type: 'msg',
		head: '../img/head1.png',
		name: '梁捷',
		content: '哈哈哈！每个德勤人之间相处都非常nice。我们不仅是同事，更是生活中的朋友。今天我的朋友圈里特别热闹，快来看看吧！'
	}
]);
chatDataList2.push([
	{
		type: 'msg',
		head: '../img/head3.png',
		name: 'Pascal',
		content: '同学，你好，我是Pascal。'
	},
	{
		type: 'msg',
		isMe: true,
		head: '../img/head.png',
		content: 'Pascal，您好！没想到能加到您的微信，好激动！'
	},
	{
		type: 'msg',
		head: '../img/head3.png',
		name: 'Pascal',
		content: '嘿嘿！很高兴认识你。看来你对德勤很感兴趣，8月31日空中宣讲会上你会对德勤有一个全面的了解，到时候我们五位德勤合伙人都会到场，千万不要错过噢！！'
	}
]);
chatDataList2.push([
	{
		type: 'msg',
		head: '../img/head11.png',
		name: 'Jaimie',
		content: 'Hello，同学，我是Jaimie。'
	},
	{
		type: 'msg',
		isMe: true,
		head: '../img/head.png',
		content: '您好，Jaimie。之前听在德勤实习的同学说过您，她说您对实习生特别好，还特别温柔！'
	},
	{
		type: 'msg',
		head: '../img/head11.png',
		name: 'Jaimie',
		content: '谢谢~德勤的是一个有爱的大家庭，我们会悉心培养有潜力的人才，高度认可学生的能力，德勤是一个让我成长并能使大家快速成长的地方。宣讲会还有几天就开始了，到时候一定要来参加哦，报名方法看看我的朋友圈就知道了！'
	}
]);
chatDataList2.push([
	{
		type: 'msg',
		head: '../img/head2.png',
		name: '潘青',
		content: '同学，你好！我是潘青'
	},
	{
		type: 'msg',
		isMe: true,
		head: '../img/head.png',
		content: '潘导师，您好！我是德勤的狂热粉丝！听说德勤831空中宣讲正在火热举办中，现场有些什么内容您可以提前透露给我吗？'
	},
	{
		type: 'msg',
		head: '../img/head2.png',
		name: '潘青',
		content: '哈哈，没问题！空中宣讲会当天我们五位合伙人全会到达现场，作为你们的先行者，我们有很多心得与你们分享，现场还将有200张笔试直通卡发放！'
	},
	{
		type: 'msg',
		head: '../img/head2.png',
		name: '潘青',
		content: '现在报名者已经超过4000多，机会要抓紧哦！想知道怎么获得直通卡，快来我的朋友圈里报名吧！'
	}
]);

function showchat2(id, callback){
	
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

var currentChatData = chatDataList2[selectedPersonIndex];
var currentAddchatIndex = 0;
function addchat2(){
	
	if(currentChatData.length > currentAddchatIndex){
		var data = currentChatData[currentAddchatIndex];
		if(data.type == 'msg'){
			$('#chatlist2')
				.append(['<div class="msgline ', (data.isMe ? "me":""),'">',
					'<img src="', data.head,'" class="head" />',
					'<div class="name">', data.name,'</div>',
					'<div class="msgcontent">', data.content,'</div>',
				'</div>'].join(''));
		} else if(data.type == 'card'){
			$('#chatlist2')
				.append(['<div class="msgline">',
					'<img src="', data.head,'" class="head" />',
					'<div class="name">', data.name,'</div>',
					'<div class="msgcontent" name="card" _index="', currentAddchatIndex,'">',
						'<div class="tl">名片</div>',
						'<img src="', data.cardHead,'" class="c_head" />',
						'<div class="c_name">', data.cardName,'</div>',
						'<div class="c_nick">昵称：', data.cardNickName,'</div>',
					,'</div>',
				'</div>'].join(''));
		}
		
		currentAddchatIndex++
		showchat2('#chatlist2 .msgline:last-child', addchat2);
	} else {
		
		setTimeout(function(){
			$('#step5').hide();
			$("#step6")
				.fadeIn(1000)
				.load('chatlist.html');
		}, 5000);
	}
}
