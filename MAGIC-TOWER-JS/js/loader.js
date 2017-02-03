/*负责加载图片资源*/

var picture = [];
for(var n = 1; n <= 16; n++){
	picture[n-1] = new Image();
	picture[n-1].src = "image/" + n + ".png";
}

function pic(n){
	return picture[n-1];
}

pic(picture.length).onload = function(){//最后一张图片加载完成
	isPicLoaded  = 1;
}

