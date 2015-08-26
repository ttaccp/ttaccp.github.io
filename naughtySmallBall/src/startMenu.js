var StartMenu = cc.Layer.extend({
	
    onEnter:function () {
        this._super();
        this.init();
    },
    init:function () {
        
        var self = this,
        	visibleRect = cc.visibleRect,
        	center = visibleRect.center,
        	size = cc.winSize;
        
		var direction = cc.p(cc.randomMinus1To1(), cc.randomMinus1To1());
		cc.pNormalize(direction);
		
		var dot = new cc.DrawNode();
		dot.drawDot(cc.p(0, 0), 20, cc.color(255, 255, 255, 255));
		this.addChild(dot);
		dot.setPosition(center);
		
		var speed = 30;
		
		this.schedule(function(f){
			
			var p = dot.getPosition();
			
			if(p.x < 0 || p.x > size.width){
				direction.x *= -1;
			} else if(p.y < 0 || p.y > size.height){
				direction.y *= -1;
			}
			
			dot.setPositionX(p.x + direction.x * speed);
			dot.setPositionY(p.y + direction.y * speed);
			
		});
		
        return true;
    }
});
