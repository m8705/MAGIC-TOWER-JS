/*负责游戏的启动和初始化*/

//var isPicLoaded = 0; 实际上，图片加载的问题已经不再重要，除非你快速刷新，不然真的看不出来，因此也不再需要 isPicLoaded
var picState = 0;

$(document).ready(function(){
		
	$("#canvas").fadeIn("slow");//过场，拖延时间
	initialize();
	
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

