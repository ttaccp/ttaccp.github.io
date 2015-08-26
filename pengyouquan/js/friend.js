
// 更多按钮
$('[name="moreBtn"]').click(function(){
	
	var self = $(this),
		menu = self.siblings('.menu-box').find('.menu');
		
	menu.toggleClass('show');
});


// 赞
$('[name="praise"]').click(function(){
	var self = $(this),
		id = self.attr('_id'),
		text = self.attr('_text'),
		praisebox = $('#praisebox' + id);
		
	if(text == undefined){
		self.attr('_text', praisebox.text());
		text = praisebox.text();
	}
	if(text != praisebox.text()){
		praisebox.html(text);
		self.text('赞');
	} else {
		praisebox.append(' ， ' + userInfo.name);
		self.text('取消');
	}
	
});

// 评论
$('[name="comment"]').click(function(){
	var self = $(this),
		id = self.attr('_id'),
		commentbox = $('#commentbox' + id);
		
	commentbox.append(['<div class="comment-line">',
						'<span class="s">', userInfo.name,'：</span><input type="text" class="txt" />',
					'</div>'].join(''))
	commentbox.find('.txt:last').focus();
});

$('.comment-line input.txt').live('blur', function(){
	var self = $(this),
		val = self.val();
	self.replaceWith('<span class="txt">' + val + '</span>');
});

// 预览图片
$('.img-list .img').click(function(){
	var self = $(this),
		src = self.attr('src'),
		img = self.parent('.img-list').find('.img'),
		imglist = [];
	
	img.each(function(){
		imglist.push($(this).attr('src'));
	});
	
	wx.previewImage({
	    current: src, // 当前显示图片的http链接
	    urls: imglist // 需要预览的图片http链接列表
	});

});





