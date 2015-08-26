var personData = [];
// 0
personData.push({
	head: '../img/head5.png',
	name: 'HR姐姐',
	nickName: 'HR姐姐',
	tag: '美丽的HR姐姐',
	address: '上海黄浦区外滩中心',
	signature: '德勤像家一样，有温暖，有欢乐，让你加入了，就再也不想离开！',
	picList: [
		'../img/pic11.png',
		'../img/pic12.png',
		'../img/pic13.png'
	]
});

// 1
personData.push({
	head: '../img/head4.png',
	name: 'MC',
	nickName: 'MC',
	tag: '德勤活跃一哥',
	address: '上海黄浦区外滩中心',
	signature: '在德勤，我才能看到真实的自己，做真的自己。',
	picList: [
		'../img/pic10.png'
	]
});

// 2
personData.push({
	head: '../img/head3.png',
	name: 'Pascal',
	nickName: 'Pascal',
	tag: '企业管理咨询合伙人',
	address: '上海黄浦区外滩中心',
	signature: '能力的边界就是职位的边界。德勤为你准备的是足够长的跑道，你要做的就是奋力向前。',
	picList: [
		'../img/pic21.png',
		'../img/pic22.png',
		'../img/pic23.png'
	]
});

// 3
personData.push({
	head: '../img/head7.png',
	name: 'Zizi',
	nickName: 'Zizi',
	tag: '德勤新生代理事会GenY的一员',
	address: '上海黄浦区外滩中心',
	signature: '在这里，一个新的开始，一个明朗的未来！',
	picList: [
		'../img/pic18.png',
		'../img/pic19.png'
	]
});

// 4
personData.push({
	head: '../img/head8.png',
	name: '剪辑师',
	nickName: '剪辑师',
	tag: '剪辑师',
	address: '上海黄浦区外滩中心',
	signature: '德勤的每一刻都值得珍藏！',
	picList: [
		'../img/pic20.png'
	]
});

// 5
personData.push({
	head: '../img/head1.png',
	name: '梁捷',
	nickName: '梁捷',
	tag: '国际税务部门合伙人',
	address: '上海黄浦区外滩中心',
	signature: '工作和生活从不对立，只要合理规划，就能双赢！德勤能给你环境，但只有你能给予自己信念力量。',
	picList: [
		'../img/pic1.png',
		'../img/pic2.png',
		'../img/pic3.png'
	]
});

// 6
personData.push({
	head: '../img/head2.png',
	name: '潘青',
	nickName: '潘青',
	tag: '德勤审计合伙人',
	address: '上海黄浦区外滩中心',
	signature: '工作和生活从不对立，只要合理规划，就能双赢！德勤能给你环境，但只有你能给予自己信念力量。管理艺术的核心，是以人为本但不以标签作区分。德勤带给我的，我将继续传承。',
	picList: [
		'../img/pic7.png',
		'../img/pic25.png',
		'../img/pic26.png'
	]
});

// 7
personData.push({
	head: '../img/head6.png',
	name: 'Terrence',
	nickName: 'Terrence',
	tag: '风险管理部门合伙人',
	address: '上海黄浦区外滩中心',
	signature: '这里有完善而又富有针对性的培训，这里有幽默风趣的培训讲师。德勤，用心培养你。',
	picList: [
		'../img/pic17.png',
		'../img/pic24.png'
	]
});


var index = parseInt(GetQueryString('index'));
setInfo(personData[index]);

function setInfo(data){
	$('#p_head').prop('src', data.head);
	$('#p_name').html(data.name + '<i></i>');
	$('#p_nickname').html('昵称：' + data.nickName);
	$('#p_tag').html(data.tag);
	$('#p_address').html(data.address);
	$('#p_signature').html(data.signature);
	var imglist = [];
	for (var i = 0, list = data.picList, len = list.length, item; i < len; i++) {
		item = list[i];
		imglist.push('<img src="', item,'" class="img"/>');
	}
	$('#p_picList').html(imglist.join(''));
}








function GetQueryString(name)  { 
	var  reg  =  new  RegExp("(^|&)" +  name  + "=([^&]*)(&|$)"); 
	var  r  =  window.location.search.substr(1).match(reg); 
	if  (r != null)  return  unescape(r[2]); 
	return  null;
}