/*
 * 信息提示
 */

var Tips = cc.Layer.extend({
	_parent: null,
	_param: null,
	_msgbox: null,
	_delayHideTime: 2000,
	ctor: function(parent, param){
		
		this._super();
		this._parent = parent;
		this._param = param;
	},
	onEnter:function () {
		
        this._super();
        this.init();
    },
    init: function(){
    	debugger
    	var self = this,
    		center = cc.visibleRect.center;	
    	var container = new cc.Layer();
    	container.setPosition(visibleRect.bottomLeft);
        self.addChild(container);
        
        // 背景容器
    	var bg = new cc.LayerColor(cc.color(0, 0, 0, 100));
    	bg.setPosition(cc.visibleRect.bottomLeft);
    	container.addChild(bg);
    	
    	// 消息框
    	var msgbox = self._msgbox = new cc.Sprite(res.popup_bg_mini);
    	msgbox.attr(center);
    	self.addChild(msgbox);
    	
    	// 文字
    	if(!cc.isUndefined(param) && !cc.isUndefined(param.txt)){
    		var txt = new cc.LabelTTF(param.txt, '微软雅黑', 30);
    		txt.attr(cc.p(msgbox.width / 2, msgbox.height / 2));
    		msgbox.addChild(txt, 1);
    	}
    	
    	setTimeout(function(){
    		debugger
    		this._parent.removeChild(Tips._curTips);
    	}.bind(self), self._delayHideTime);
    }
});

Tips.show = function(parent, param){
	debugger
	cc.eventManager.pauseTarget(parent, true);
	var load = this._curTips = new LoadData(parent, param);
	parent.addChild(load, 999, 'curTips');
}
