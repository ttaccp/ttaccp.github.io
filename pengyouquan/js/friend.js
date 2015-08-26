
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

$('#clickTip').click(function(){
	$('#clickTipBtn').click();
});

// 评论
$('[name="comment"]').click(function(){
	var self = $(this),
		id = self.attr('_id'),
		commentbox = $('#commentbox' + id);
		
	commentbox.append(['<div class="comment-line">',
						'<span class="s">', userInfo.name,'：</span><input type="text" class="txt" _id="', id,'" />',
					'</div>'].join(''))
	commentbox.find('.txt:last').focus();
});

$('.comment-line input.txt').live('blur', function(){
	var self = $(this),
		val = self.val(),
		id = self.attr('_id');
		
	self.replaceWith('<span class="txt">' + val + '</span>');
	if(id == '9'){
		$('#commentbox' + id).append(['<div class="comment-line">',
										'<span class="s">HR姐姐：</span>你的问题HR姐姐已经收到啦！想知道你的问题会不会在现场被回复？让我们一起锁定831空中宣讲！',
									'</div>']);
	}
});

// 预览图片
$('.img-list .img').click(function(){
	var self = $(this),
		src = self.attr('src'),
		img = self.parent('.img-list').find('.img'),
		imglist = [];
	
	img.each(function(){
		imglist.push($(this).attr('_src'));
	});
	
	wx.previewImage({
	    current: src, // 当前显示图片的http链接
	    urls: imglist // 需要预览的图片http链接列表
	});

});

var QrCode = (function(){
	
	function fn_init(){
		$('#qrcode').click(function(){
			self.hide();
		});
	}
	
	var _init = false; 
	var self = {
		show: function(){
			if(!_init){
				_init = true;
				fn_init();
			}
			$('#qrcode').show()
		},
		hide: function(){
			$('#qrcode').hide()
		}
	}
	
	return self;
})();

var MyVideo = (function(){
	
	function fn_init(){
		$('#videobox .bg').click(function(){
			self.hide();
		});
	}
	
	var _init = false; 
	var self = {
		show: function(){
			if(!_init){
				_init = true;
				fn_init();
			}
			$('#videobox').show();
			QrCode.hide()
		},
		hide: function(){
			$('#videobox').hide();
			$('#videoDom')[0].pause();
		}
	}
	
	return self;
})();

var Share = (function(){
	
	function fn_init(){
		$('#sharebox').click(function(){
			self.hide();
		});
	}
	
	var _init = false; 
	var self = {
		show: function(){
			if(!_init){
				_init = true;
				fn_init();
			}
			$('#sharebox').show()
		},
		hide: function(){
			$('#sharebox').hide()
		}
	}
	
	return self;
})();
