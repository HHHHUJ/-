var hero={
	self:null,
	top:0,
	left:0,
	life:3,
	imgs:["image/hero.gif","image/hero-bang.gif"],
	init:function(){
		var img = document.createElement('img');
		img.src=this.imgs[0];
		engine.backg.appendChild(img);
		this.self=img;
		this.heroMove();
	},
	heroMove:function(){
		var _this=this;
		document.onmousemove=function(e){
			var e=e||event;
			var l=e.clientX-engine.backg.offsetLeft-_this.self.offsetWidth/2;
			var t=e.clientY-engine.backg.offsetTop-_this.self.offsetHeight/2;
			l=(l<0)?0:(l>engine.backg.offsetWidth-_this.self.offsetWidth?engine.backg.offsetWidth-_this.self.offsetWidth:l);
			t=(t<0)?0:(t>engine.backg.offsetHeight-_this.self.offsetHeight?engine.backg.offsetHeight-_this.self.offsetHeight:t);
			_this.self.style.left=l+'px';
			_this.self.style.top=t+'px';
		}
	}
}