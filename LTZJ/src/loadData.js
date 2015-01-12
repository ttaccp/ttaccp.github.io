

var LoadData = cc.Layer.extend({
	_param: null,
	_msgbox_model: null,
	_msgbox_scaleX: 0.1,
	ctor: function(param){
		this._super();
		
		this._param = param;
	},
	onEnter:function () {
		
        this._super();
        this.init();
    },
    init: function(){
    	
    	var self = this,
    		center = cc.visibleRect.center,
    		param = self._param;
    	
    	var bg = new cc.LayerColor(cc.color(0, 0, 0, 100));
    	bg.setPosition(cc.visibleRect.bottomLeft);
    	self.addChild(bg);
    	
    	var msgbox = self._msgbox = new cc.Sprite(res.popup_bg_mini);
    	msgbox.attr({
    		x: center.x,
    		y: center.y,
    		scaleX: 0
    	});
    	self.addChild(msgbox);
    	
    	if(!cc.isUndefined(param) && !cc.isUndefined(param.txt)){
    		var txt = new cc.LabelTTF(param.txt, '微软雅黑', 30);
    		txt.attr(cc.p(msgbox.width / 2, msgbox.height / 2));
    		msgbox.addChild(txt, 1);
    	}
    	
    	self.schedule(self.update, 0.01);
    	self._msgbox_model = 'show';
    	
    	
    	if(!cc.isUndefined(param) && !cc.isUndefined(param.autoHide) && param.autoHide == true){
    		setTimeout(function(){
    			self._msgbox_model = 'hide';
    		}, 2000);
    	}
    },
    update: function(){
    	
    	var msgbox = this._msgbox,
			scaleX = msgbox.getScaleX();
    	if(this._msgbox_model == 'show'){
			msgbox.attr({
	    		scaleX: Math.min(scaleX + this._msgbox_scaleX, 1)
	    	});
    	} else if(this._msgbox_model == 'hide'){
    		msgbox.attr({
	    		scaleX: Math.max(scaleX - this._msgbox_scaleX, 0)
	    	});
	    	if(scaleX - this._msgbox_scaleX <= 0){
	    		LoadData.hide();
	    	}
    	}
    },
    show: function(){
    	var msgbox = this._msgbox,
    		scaleX = msgbox.getScaleX();
    		
    	msgbox.attr({
    		scaleX: scaleX + this._msgbox_scaleX 
    	});
    },
    hide: function(){
    	var msgbox = this._msgbox,
    		scaleX = msgbox.getScaleX();
    		
    	msgbox.attr({
    		scaleX: scaleX - this._msgbox_scaleX 
    	});
    	
    }
});
LoadData.show = function(parent, param){
	
	this._parent = parent;
	cc.eventManager.pauseTarget(parent, true);
	var load = this._load = new LoadData(param);
	parent.addChild(load, 999);
}
LoadData.hide = function(){
	
	if(!cc.isUndefined(this._parent)){
		this._parent.removeChild(this._load);
		cc.eventManager.resumeTarget(this._parent, true);
	}
}
LoadData.post = function(parent, param, callback){
	
	var self = this;
	
	self.show(parent, param);
	// 发 post
}
