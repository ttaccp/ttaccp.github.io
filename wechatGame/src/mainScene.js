
var MainScene = cc.Layer.extend({
	
    onEnter:function () {
        this._super();
        this.init();
    },
    init:function () {
        
        var self = this,
        	visibleRect = cc.visibleRect,
        	center = visibleRect.center,
        	size = cc.winSize;
        
        var container = self._container = new cc.Layer();
        container.setPosition(visibleRect.bottomLeft);
        self.addChild(container);
        
        // 背景图
        var bg = self.bg = new cc.Sprite(res.bg);
        bg.attr({
        	anchorX: 0,
        	anchorY: 0,
        	x: 0,
        	y: 0
        });
        container.addChild(bg, 0, 'bg');
        
        // ready
        var ready = self.ready = new cc.Sprite(res.ready, cc.rect(0, 0, 620, 130));
        ready.attr({
        	anchorX: 0,
        	anchorY: 0,
        	x: size.width / 2 - ready.width / 2,
        	y: size.height / 2 - ready.height / 4
        });
        ready.setVisible(false);
        container.addChild(ready, 0, 'ready');
        
        
        
        
        // 显示ready
        Utils.delayExec(self.showReady.bind(self), GC.time_showReady);
        
        return true;
    },
    showReady: function(){
    	Utils.show(this.ready);
    }
});

