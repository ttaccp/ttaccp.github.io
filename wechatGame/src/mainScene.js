
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
        
        var author = new cc.LabelTTF('开始', 'Arial', 30);
    	author.attr({
    		anchorX: 0,
    		anchorY: 0,
    		x: size.width / 2 - author.width / 2,
    		y: size.height / 2 - author.height / 2
    	});
    	container.addChild(author, 10);
        return true;
    }
});

