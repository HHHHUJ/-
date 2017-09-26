//游戏引擎
var engine={
	gameStatus:false,
	score:0,
	life:3,
	backg:document.getElementById('game'),
	bullet:{},
	enemy:{},
	//初始化
	init:function(){
		this.playGame();
	},
	playGame:function(){
		var _this=this;
		this.backg.onclick=function(){
			if(!_this.gameStatus){
				_this.gameStatus=true;
				_this.bgMove();
				_this.createPlane();
			}
		}
	},
	bgMove:function(){
		var _this=this;
		var y=0;
		setInterval(function(){
			y+=2;
			_this.backg.style["background-position-y"]=y+'px';
		},30)
	},
	createPlane:function(){
		hero.init();
	}
}
engine.init();