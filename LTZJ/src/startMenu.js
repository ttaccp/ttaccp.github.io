
var StartMenu = cc.Layer.extend({
	_container: null,
	_logo: null,
	_logo_flash: null,
	_logo_flash_seep: 10,
	_logo_flash_timer: Utils.getCurrentTime(),
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
        var bg = new cc.Sprite(res.cover1);
        bg.attr({
        	anchorX: 0,
        	anchorY: 0,
        	x: 0,
        	y: 0
        });
        container.addChild(bg, 0, 'bg');
        
        
        // logo
        var logo = self._logo = new cc.Sprite(res.cover_logo);
        logo.attr({
        	x: center.x,
        	y: size.height - logo.height / 2 - 25
        });
        container.addChild(logo, 10);
        // 闪动的光
        var logo_flash = self._logo_flash = new cc.Sprite(res.cover_logo02);
        logo_flash.attr({
        	anchorX: 0,
        	anchorY: 0,
        	x: -32,
        	y: -80,
        	opacity: 0
        });
        logo.addChild(logo_flash);
		self.schedule(self.update, 0.01, cc.RepeatForever, 3);
        
        
        // 游客模式
        var txt1 = new cc.Sprite(res.guests, cc.rect(32, 10, 143, 40));
		var txt2 = new cc.Sprite(res.guests, cc.rect(32, 76, 143, 40));
        var newGame1 = new cc.Sprite(res.button_yellow, cc.rect(0, 1, 209, 62));
        var newGame2 = new cc.Sprite(res.button_yellow, cc.rect(0, 66, 209, 62));
        txt1.attr({
        	x: newGame1.width / 2,
        	y: newGame1.height / 2 + 2
        });
        txt2.attr({
        	x: newGame2.width / 2,
        	y: newGame2.height / 2 + 2
        });
        newGame1.addChild(txt1);
        newGame2.addChild(txt2);
        
        var newGameBtn1 = new cc.MenuItemSprite(newGame1, newGame2, null, function(){
        	cc.log('游客模式');
        	this.playEffect();
        	debugger
        	Tips.show(this._container, {txt: '暂不支持 游客模式!'});
        	
        }.bind(self));
        newGameBtn1.setPosition(center.x, center.y / 2);
        
        
        // QQ好友
        var txt3 = new cc.Sprite(res.button_qq, cc.rect(6, 5, 198, 50));
		var txt4 = new cc.Sprite(res.button_qq, cc.rect(6, 72, 198, 50));
        var newGame3 = new cc.Sprite(res.button_blue, cc.rect(0, 1, 209, 62));
        var newGame4 = new cc.Sprite(res.button_blue, cc.rect(0, 66, 209, 62));
        txt3.attr({
        	x: newGame3.width / 2,
        	y: newGame3.height / 2 + 2
        });
        txt4.attr({
        	x: newGame4.width / 2,
        	y: newGame4.height / 2 + 2
        });
        newGame3.addChild(txt3);
        newGame4.addChild(txt4);
        
        var newGameBtn2 = new cc.MenuItemSprite(newGame3, newGame4, null, function(){
        	cc.log('QQ好友');
        	this.playEffect();
        }.bind(self));
        newGameBtn2.setPosition(size.width / 4 * 3, newGameBtn1.y - newGame2.height - 40);
        
        
        // 微信好友
        var txt5 = new cc.Sprite(res.button_wechat, cc.rect(6, 5, 198, 50));
		var txt6 = new cc.Sprite(res.button_wechat, cc.rect(6, 72, 198, 50));
        var newGame5 = new cc.Sprite(res.button_green, cc.rect(0, 1, 209, 62));
        var newGame6 = new cc.Sprite(res.button_green, cc.rect(0, 66, 209, 62));
        txt5.attr({
        	x: newGame5.width / 2,
        	y: newGame5.height / 2 + 2
        });
        txt6.attr({
        	x: newGame6.width / 2,
        	y: newGame6.height / 2 + 2
        });
        newGame5.addChild(txt5);
        newGame6.addChild(txt6);
        
        var newGameBtn3 = new cc.MenuItemSprite(newGame5, newGame6, null, function(_self){
        	cc.log('微信好友');
        	this.playEffect();
        }.bind(self));
        newGameBtn3.setPosition(center.x / 2, newGameBtn1.y - newGame2.height - 40);
        
        
        var menu = new cc.Menu(newGameBtn1, newGameBtn2, newGameBtn3);
        menu.attr({
        	anchorX: 0,
        	anchorY: 0,
        	x: 0,
        	y: 0
        });
        
        container.addChild(menu, 10);
        
        // 背景音效
        if(GC.SOUND){
	        cc.audioEngine.setMusicVolume(1);
	        cc.audioEngine.playMusic(res.bgMusic_mp3, true);
        }
        
        // author
        if(GC.AUTHOR){
        	var author = new cc.LabelTTF('Author: 1003696235', 'Arial', 16);
        	author.attr({
        		anchorX: 0,
        		anchorY: 0,
        		x: 0,
        		y: size.height - author.height
        	});
        	container.addChild(author, 10);
        }
        
        return true;
    },
    update: function(){
    	
    	var curTime = Utils.getCurrentTime(),
    		self = this;
    		
    	switch(self._logo_flash.opacity){
    		case 0:
    			if(curTime - self._logo_flash_timer > 3000){
    				self._logo_flash_seep = Math.abs(self._logo_flash_seep);
    				self._logo_flash_timer = curTime;
    			}
    		break;
    		case 225:
    			self._logo_flash_seep = -self._logo_flash_seep;
    		break;
    	}
    	
    	self._logo_flash.setOpacity(Math.min(Math.max(self._logo_flash.opacity + self._logo_flash_seep, 0), 225));
    },
    playEffect: function(){
    	if(GC.SOUND){
    		cc.audioEngine.playEffect(res.touch_mp3);	
    	}
    },
    loading: function(){
    	
//  	LoadData.show(this._container, {
//  		txt: '暂不支持 游客模式',
//  		autoHide: true
//  	});
    }
});