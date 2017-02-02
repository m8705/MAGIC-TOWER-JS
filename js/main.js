/*负责游戏的启动和初始化*/

var isPicLoaded = 0;
var picState = 0;

$(document).ready(function(){
	
		var past = Date.now();
		while(!isPicLoaded){//等待图片加载完毕
			if(isPicLoaded){
				break;
			}
			else if( (Date.now()-past)/1000 > 1 ){//防止等待时间过长
				break;
			}
		}
		
		$("#canvas").fadeIn("slow");//过场，拖延时间
		
		if(!isPicLoaded){//快速多次刷新就可能出现这种情况
			var c = $("canvas")[0].getContext("2d");
			c.font = "24px Arial";
			c.fillStyle = "black";
			c.textBaseline = "middle";
			var str = "图片资源加载出错，请刷新页面:3";
			var width = c.measureText(str).width;
			c.fillText(str, ($("canvas")[0].width-width)/2, ($("canvas")[0].height/2)-12 );//居中显示提示文本
		}
		else{
			initialize();
		}
	
});



function initialize(){//初始化
	
	showTitle();
	setEvent();
	draw();
	setInterval(function(){//启动动画
		if(picState === 3){
			picState = 1;
			draw();
		}
		else{
			picState++;
			draw();
		}
	},200);
}

function showTitle(){
	var canvas = $("canvas")[0];
	var c = canvas.getContext("2d");
	c.font = "15px Arial";
	c.fillStyle = "black";
	c.textBaseline = "middle";
	c.fillText("魔塔",canvas.width/2-15,10);
}

