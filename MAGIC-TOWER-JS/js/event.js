/*负责游戏的事件处理*/

function setEvent(){
	$(document).keydown(function(e){//注册键盘事件
		if(player.isTalking){//退出对话状态
			player.isTalking = 0;
			draw();
		}
		
		if(player.isTalkingToTrader){//退出在商人处购买状态
			player.isTalkingToTrader = 0;
			draw();
		}
		
		if(player.isBuying){//退出在商店处购买状态
			player.isBuying = 0;
			draw();
		}
		
		if(player.isLookingBook){//退出阅读怪物书状态
			player.isLookingBook = 0;
			draw();
		}
		
		if(player.isLookingNoteBook){//退出阅读记事本状态
			player.isLookingNoteBook = 0;
			draw();
		}
		
		if(player.isLookingHelp && e.keyCode!==70){//退出阅读帮助状态
			player.isLookingHelp = 0;
		}
		
	
		switch(e.keyCode){
			case 33://pageup
				if(floor[player.floor+1]){
					player.floor++;
					draw();
				}
				break;
				
			case 34://pagedown
				if(floor[player.floor-1]){
					player.floor--;
					draw();
				}
				break;
			
			case 37://向左
				if(player.x > 1){
					player.x--;
					checkFloor(37);
					checkRole(37);
					checkItem();
					checkEvent();
				}
				player.face = 2;
				draw();
				break;
				
			case 38://向上
				if(player.y > 1){
					player.y--;
					checkFloor(38);
					checkRole(38);
					checkItem();
					checkEvent();
					
				}
				player.face = 4;	
				draw();
				break;
				
			case 39://向右
				if(player.x < 11){
					player.x++;
					checkFloor(39);
					checkRole(39);
					checkItem();
					checkEvent();
					
				}
				player.face = 3;
				draw();
				break;
				
			case 40://向下
				if(player.y < 11){
					player.y++;
					checkFloor(40);
					checkRole(40);
					checkItem();
					checkEvent();
					
				}
				player.face = 1;
				draw();
				break;
			case 70://F
				if(player.isLookingHelp){
					player.isLookingHelp = 0;
				}
				else{
					player.isLookingHelp = 1;
				}
				draw();
				break;
			case 76://L
				loadData();
				break;
			case 82://R
				replay();
				break;
			case 83://S
				saveData();
				break;
		}
	});
	
	
	$("#canvas").mousemove(function(e){//鼠标移动时改变鼠标光标  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!bug
		var mouse = getMousePos( $("#canvas")[0], e);
		//alert((player.isTalkingToTrader && mouse.x>271 && mouse.x<331 && mouse.y>248 && mouse.y<280)||player.isTalkingToTrader && mouse.x>341 && mouse.x<401 && mouse.y>248 && mouse.y<280);
		
		if(player.isTalkingToTrader && mouse.x>271 && mouse.x<331 && mouse.y>248 && mouse.y<280){//商人确定
			$("#canvas").css("cursor","pointer");
		}
		
		if(player.isTalkingToTrader && mouse.x>341 && mouse.x<401 && mouse.y>248 && mouse.y<280){//商人取消
			$("#canvas").css("cursor","pointer");
		}
		
		if(player.isBuying && mouse.x>276 && mouse.x<396 && mouse.y>186 && mouse.y<218){//商店增加生命
			$("#canvas").css("cursor","pointer");
		}
		
		else if(player.isBuying && mouse.x>276 && mouse.x<396 && mouse.y>228 && mouse.y<260){//商店增加攻击
			$("#canvas").css("cursor","pointer");
		}
		
		else if(player.isBuying && mouse.x>276 && mouse.x<396 && mouse.y>270 && mouse.y<302){//商店增加防御
			$("#canvas").css("cursor","pointer");
		}
		
		else if(mouse.x>528 && mouse.x<560 && mouse.y>144 && mouse.y<176){//怪物书
			$("#canvas").css("cursor","pointer");
		}
		
		else if(mouse.x>560 && mouse.x<592 && mouse.y>144 && mouse.y<176){//楼层传送器
			$("#canvas").css("cursor","pointer");
		}
		
		else if(mouse.x>592 && mouse.x<624 && mouse.y>144 && mouse.y<176){//记事本
			$("#canvas").css("cursor","pointer");
		}
		
		else if(mouse.x>528 && mouse.x<560 && mouse.y>176 && mouse.y<208){//雪花
			$("#canvas").css("cursor","pointer");
		}
		
		else if(mouse.x>528 && mouse.x<560 && mouse.y>228 && mouse.y<260){//圣水
			$("#canvas").css("cursor","pointer");
		}
		
		else if(mouse.x>560 && mouse.x<592 && mouse.y>228 && mouse.y<260){//金钥匙
			$("#canvas").css("cursor","pointer");
		}
		
		else if(mouse.x>528 && mouse.x<560 && mouse.y>260 && mouse.y<292){//铁锹
			$("#canvas").css("cursor","pointer");
		}
		
		else if(mouse.x>560 && mouse.x<592 && mouse.y>260 && mouse.y<292){//地震卷轴
			$("#canvas").css("cursor","pointer");
		}
		
		else if(mouse.x>592 && mouse.x<624 && mouse.y>260 && mouse.y<292){//炸药
			$("#canvas").css("cursor","pointer");
		}
		
		else if(mouse.x>528 && mouse.x<560 && mouse.y>292 && mouse.y<324){//向上飞行器
			$("#canvas").css("cursor","pointer");
		}
		
		else if(mouse.x>560 && mouse.x<592 && mouse.y>292 && mouse.y<324){//向下飞行器
			$("#canvas").css("cursor","pointer");
		}
		
		else if(mouse.x>592 && mouse.x<624 && mouse.y>292 && mouse.y<324){//对称飞行器
			$("#canvas").css("cursor","pointer");
		}
		
		else{
			$("#canvas").css("cursor","default");
		}
	});
	
	$("#canvas").mousedown(function(e){//鼠标单击时绘制边框,并处理使用道具
		var mouse = getMousePos( $("#canvas")[0], e);
		var n = player.buyTimes;
		
		if(player.isBuying && mouse.x>276 && mouse.x<396 && mouse.y>186 && mouse.y<218){//商店增加生命
			if(player.coin >= (10*n*(n-1)+20)){
				player.coin -= (10*n*(n-1)+20);
				player.hp += 100 * ( Math.floor(player.floor / 10) + 1);
				player.buyTimes++;
				draw();
			}
		}
		
		if(player.isBuying && mouse.x>276 && mouse.x<396 && mouse.y>228 && mouse.y<260){//商店增加攻击
			if(player.coin >= (10*n*(n-1)+20)){
				player.coin -= (10*n*(n-1)+20);
				player.att += 2 * ( Math.floor(player.floor / 10) + 1);
				player.buyTimes++;
				draw();
			}
		}
		
		if(player.isBuying && mouse.x>276 && mouse.x<396 && mouse.y>270 && mouse.y<302){//商店增加防御
			if(player.coin >= (10*n*(n-1)+20)){
				player.coin -= (10*n*(n-1)+20);
				player.def += 4 * ( Math.floor(player.floor / 10) + 1);
				player.buyTimes++;
				draw();
			}
		}
		
		
		
		if(mouse.x>528 && mouse.x<560 && mouse.y>144 && mouse.y<176){//怪物书
			if(player.item.indexOf(10)>=0){
				use(10);
			}
			rect(528,144,32,32);
		}
		
		if(mouse.x>560 && mouse.x<592 && mouse.y>144 && mouse.y<176){//楼层传送器
			if(player.item.indexOf(32)>=0){
				use(32);
			}
			if(player.item.indexOf(32)<0){
				rect(560,144,32,32);
			}
		}
		
		if(mouse.x>592 && mouse.x<624 && mouse.y>144 && mouse.y<176){//记事本
			if(player.item.indexOf(11)>=0){
				use(11);
			}
			rect(592,144,32,32);
		}
		
		if(mouse.x>528 && mouse.x<560 && mouse.y>176 && mouse.y<208){//雪花
			if(player.item.indexOf(14)>=0){
				use(14);
			}
			rect(528,176,32,32);
		}
		
		if(mouse.x>528 && mouse.x<560 && mouse.y>228 && mouse.y<260){//圣水
			
			if(player.item.indexOf(5)>=0){
				use(5);
			}
			rect(528,228,32,32);
		}
		
		if(mouse.x>560 && mouse.x<592 && mouse.y>228 && mouse.y<260){//金钥匙
			if(player.item.indexOf(9)>=0){
				use(9);
			}
			rect(560,228,32,32);
		}
		
		if(mouse.x>528 && mouse.x<560 && mouse.y>260 && mouse.y<292){//铁锹
			if(player.item.indexOf(13)>=0){
				use(13);
			}
			rect(528,260,32,32);
		}
		
		if(mouse.x>560 && mouse.x<592 && mouse.y>260 && mouse.y<292){//地震卷轴
			if(player.item.indexOf(15)>=0){
				use(15);
			}
			rect(560,260,32,32);
		}
		
		if(mouse.x>592 && mouse.x<624 && mouse.y>260 && mouse.y<292){//炸药
			if(player.item.indexOf(20)>=0){
				use(20);
			}
			rect(592,260,32,32);
		}
		
		if(mouse.x>528 && mouse.x<560 && mouse.y>292 && mouse.y<324){//向上飞行器
			if(player.item.indexOf(18)>=0){
				use(18);
			}
			rect(528,292,32,32);
		}
		
		if(mouse.x>560 && mouse.x<592 && mouse.y>292 && mouse.y<324){//向下飞行器
			if(player.item.indexOf(17)>=0){
				use(17);
			}
			rect(560,292,32,32);
		}
		
		if(mouse.x>592 && mouse.x<624 && mouse.y>292 && mouse.y<324){//对称飞行器
			if(player.item.indexOf(16)>=0){
				use(16);
			}
			rect(592,292,32,32);
		}
	});
}

function rect(x, y, h, w){//绘制边框
	var c = $("#canvas")[0].getContext("2d");
	c.strokeStyle = "#00ffcc";
	c.lineWidth = 2;
	c.lineCap = "square";
	c.beginPath();
	c.moveTo(x, y);
	c.lineTo(x + w, y);
	c.moveTo(x, y);
	c.lineTo(x, y + h);
	c.moveTo(x + w, y);
	c.lineTo(x + w, y + h);
	c.moveTo(x, y + h);
	c.lineTo(x + w, y + h);
	c.closePath();
	c.stroke();	
}

function getMousePos(canvas, e){//获取鼠标坐标 
	var rect = canvas.getBoundingClientRect(); 
	return{ 
		x: e.clientX - rect.left * (canvas.width / rect.width),
		y: e.clientY - rect.top * (canvas.height / rect.height)
	}
}

function checkFloor(n){
	
	var f = floor[player.floor];
	var p;//将要判断的数组位置
	
	switch(n){
		case 37://左
			p = f[(player.y-1)*11+player.x-2];
			//console.log("///////////////////////////");
			//console.log("玩家的在数组中的位置"+((player.y-1)*11+player.x-1));
			//console.log("("+player.x+","+player.y+")");
			//console.log("左边位置是"+p);
			
			switch(f[((player.y-1)*11+player.x-1)]){
				case 1:
				case 2:
				case 5:
				case 10:
					player.x++;
					break;
					
				case 3:
					if(floor[player.floor]){//如果楼层存在，则下一层楼
						player.floor--;
						if(player.wentFloor.indexOf(player.floor)<0){
							player.wentFloor.push(player.floor);
						}
					}
					break;
				case 4:
					if(floor[player.floor+1]){//如果楼层存在，则上一层楼
						player.floor++;
						if(player.wentFloor.indexOf(player.floor)<0){
							player.wentFloor.push(player.floor);
						}
					}
					break;
				case 7:
					if(player.yellowKey){//有黄钥匙，开黄门
						floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将门清除
						player.yellowKey--;
					}
					else{
						player.x++;
					}
					break;
				case 8:
					if(player.blueKey){//有蓝钥匙，开蓝门
						floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将门清除
						player.blueKey--;
					}
					else{
						player.x++;
					}
					break;
				case 9:
					if(player.redKey){//有红钥匙，开红门
						floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将门清除
						player.redKey--;
					}
					else{
						player.x++;
					}
					break;
				case 11:
					floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将假墙清除
					player.x++;
					break;
			}
			
			break;
			
		case 38://上
			p = f[(player.y-2)*11+player.x-1];
			//console.log("玩家的在数组中的位置"+((player.y-1)*11+player.x-1));
			//console.log("("+player.x+","+player.y+")");
			//console.log("上面位置是"+p);
			
			
			switch(f[((player.y-1)*11+player.x-1)]){
				case 1:
				case 2:
				case 5:
				case 10:
					player.y++;
					break;
					
				case 3:
					if(floor[player.floor-1]){//如果楼层存在，则下一层楼
						player.floor--;
						if(player.wentFloor.indexOf(player.floor)<0){
							player.wentFloor.push(player.floor);
						}
					}
					break;
				case 4:
					if(floor[player.floor+1]){//如果楼层存在，则上一层楼
						player.floor++;
						if(player.wentFloor.indexOf(player.floor)<0){
							player.wentFloor.push(player.floor);
						}
					}
					break;
				case 7:
					if(player.yellowKey){//有黄钥匙，开黄门
						floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将门清除
						player.yellowKey--;
					}
					else{
						player.y++;
					}
					break;
				case 8:
					if(player.blueKey){//有蓝钥匙，开蓝门
						floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将门清除
						player.blueKey--;
					}
					else{
						player.y++;
					}
					break;
				case 9:
					if(player.redKey){//有红钥匙，开红门
						floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将门清除
						player.redKey--;
					}
					else{
						player.y++;
					}
					break;
				case 11:
					floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将假墙清除
					player.y++;
					break;
			}
			
			break;
			
		case 39://右
			p = f[(player.y-1)*11+player.x];
			//console.log("玩家的在数组中的位置"+((player.y-1)*11+player.x-1));
			//console.log("("+player.x+","+player.y+")");
			//console.log("右边位置是"+p);
			
			switch(f[((player.y-1)*11+player.x-1)]){
				case 1:
				case 2:
				case 5:
				case 10:
					player.x--;
					break;
					
				case 3:
					if(floor[player.floor-1]){//如果楼层存在，则下一层楼
						player.floor--;
						if(player.wentFloor.indexOf(player.floor)<0){
							player.wentFloor.push(player.floor);
						}
					}
					break;
				case 4:
					if(floor[player.floor+1]){//如果楼层存在，则上一层楼
						player.floor++;
						if(player.wentFloor.indexOf(player.floor)<0){
							player.wentFloor.push(player.floor);
						}
					}
					break;
				case 7:
					if(player.yellowKey){//有黄钥匙，开黄门
						floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将门清除
						player.yellowKey--;
					}
					else{
						player.x--;
					}
					break;
				case 8:
					if(player.blueKey){//有蓝钥匙，开蓝门
						floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将门清除
						player.blueKey--;	
					}
					else{
						player.x--;
					}
					break;
				case 9:
					if(player.redKey){//有红钥匙，开红门
						floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将门清除
						player.redKey--;	
					}
					else{
						player.x--;
					}
					break;
				case 11:
					floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将假墙清除
					player.x--;
					break;
			}
			
			break;

		case 40://下
			p = f[(player.y)*11+player.x-1];
			//console.log("玩家的在数组中的位置"+((player.y-1)*11+player.x-1));
			//console.log("("+player.x+","+player.y+")");
			//console.log("下面位置是"+p+"\n");
			
			switch(f[((player.y-1)*11+player.x-1)]){
				case 1:
				case 2:
				case 5:
				case 10:
					player.y--;
					break;
				
				case 3:
					if(floor[player.floor-1]){//如果楼层存在，则下一层楼
						player.floor--;
						if(player.wentFloor.indexOf(player.floor)<0){
							player.wentFloor.push(player.floor);
						}
					}
					break;
				case 4:
					if(floor[player.floor+1]){//如果楼层存在，则上一层楼
						player.floor++;
						if(player.wentFloor.indexOf(player.floor)<0){
							player.wentFloor.push(player.floor);
						}
					}
					break;
				case 7:
					if(player.yellowKey){//有黄钥匙，开黄门
						floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将门清除
						player.yellowKey--;
					}
					else{
						player.y--;
					}
					break;
				case 8:
					if(player.blueKey){//有蓝钥匙，开蓝门
						floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将门清除
						player.blueKey--;	
					}
					else{
						player.y--;
					}
					break;
				case 9:
					if(player.redKey){//有红钥匙，开红门
						floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将门清除
						player.redKey--;	
					}
					else{
						player.y--;
					}
					break;
				case 11:
					floor[player.floor][((player.y-1)*11+player.x-1)] = 0;//将假墙清除
					player.y--;
					break;
			}
			
			break;
			
	}
	
	
	
}

function checkRole(n){
	var r = role[player.floor];
	var p;//将要判断的数组位置
	
	switch(n){
		case 37://左
			p = r[(player.y-1)*11+player.x-2];
			switch(r[((player.y-1)*11+player.x-1)]){
				case 1://骷髅人
					if(fight(e1)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 2://骷髅士兵
					if(fight(e2)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 3://骷髅队长
					if(fight(e3)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 4://鬼战士
					if(fight(e4)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 5://小蝙蝠
					if(fight(e5)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 6://大蝙蝠
					if(fight(e6)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 7://吸血蝙蝠
					if(fight(e7)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 8://吸血鬼
					if(fight(e8)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 9://绿史莱姆
					if(fight(e9)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 10://红史莱姆
					if(fight(e10)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 11://大史莱姆
					if(fight(e11)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 12://史莱姆王
					if(fight(e12)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 13://初级法师
					if(fight(e13)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 14://高级法师
					if(fight(e14)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 15://初级巫师
					if(fight(e15)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 16://高级巫师
					if(fight(e16)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 17://兽人
					if(fight(e17)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 18://兽人武士
					if(fight(e18)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 19://石头人
					if(fight(e19)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 20://幽灵
					if(fight(e20)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 21://初级卫兵
					if(fight(e21)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 22://中级卫兵
					if(fight(e22)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 23://高级卫兵
					if(fight(e23)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 24://双手剑士
					if(fight(e24)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 25://魔王
					if(fight(e25)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 26://魔法警卫
					if(fight(e26)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 27://大法师
					if(fight(e27)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 28://战士
					if(fight(e28)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 29://骑士队长
					if(fight(e29)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;;
					}
					break;
				case 30://骑士
					if(fight(e30)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 31://黑暗骑士
					if(fight(e31)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 32://智慧老人
					player.x++;
					talk(32,(player.y-1)*11+player.x-2);
					role[player.floor][(player.y-1)*11+player.x-2] = 0;
					break;
				case 33://商人
					player.x++;
					talk(33,(player.y-1)*11+player.x-2);
					break;
				case 34://小偷
					player.x++;
					talk(34,(player.y-1)*11+player.x-2);
					break;
				case 35://仙子
					player.x++;
					talk(35,(player.y-1)*11+player.x-2);
					break;
				case 36://公主
					player.x++;
					talk(36,(player.y-1)*11+player.x-2);
					break;
			}
			
			switch(p){
				case 38://大乌贼
					if(fight(e33)){
						role[player.floor][(player.y-1)*11+player.x-2] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 37://魔龙
					if(fight(e32)){
						role[player.floor][(player.y-1)*11+player.x-2] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 39://商店
					player.x++;
					break;
			}
			
			switch(r[((player.y-2)*11+player.x-2)]){
				case 38://大乌贼
					if(fight(e33)){
						role[player.floor][(player.y-2)*11+player.x-2] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 37://魔龙
					if(fight(e32)){
						role[player.floor][(player.y-2)*11+player.x-2] = 0;
					}
					else{
						player.x++;
					}
					break;
			}
			
			switch(r[((player.y)*11+player.x-2)]){
				case 38://大乌贼
					if(fight(e33)){
						role[player.floor][(player.y)*11+player.x-2] = 0;
					}
					else{
						player.x++;
					}
					break;
				case 37://魔龙
					if(fight(e32)){
						role[player.floor][(player.y)*11+player.x-2] = 0;
					}
					else{
						player.x++;
					}
					break;
			}
			
			if(r[((player.y-2)*11+player.x-1)] === 26 && r[((player.y)*11+player.x-1)]===26){//魔法警卫
				if(player.shield !== 5){
					if(player.hp > 1){
						player.hp /= 2;
						player.hp = Math.floor(player.hp);
					}
					else{
						player.x++;
					}
				}
			}
			
			if( (p===15 || r[(player.y-2)*11+player.x-1]===15 || r[(player.y)*11+player.x-1]===15) && (p*player.x !==15) ){//初级巫师
				if(player.shield !== 5){
					if(player.hp > 100){
						player.hp -= 100;
					}
					else{
						player.x++;
					}
				}
			}
			
			if( (p===16 || r[(player.y-2)*11+player.x-1]===16 || r[(player.y)*11+player.x-1]===16) && (p*player.x !==16) ){//高级巫师
				if(player.shield !== 5){
					if(player.hp > 200){
						player.hp -= 200;
					}
					else{
						player.x++;
					}
				}
			}
			
			break;
		case 38://上
			p = r[(player.y-2)*11+player.x-1];
			switch(r[(player.y-1)*11+player.x-1]){
				case 1://骷髅人
					if(fight(e1)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 2://骷髅士兵
					if(fight(e2)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 3://骷髅队长
					if(fight(e3)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 4://鬼战士
					if(fight(e4)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 5://小蝙蝠
					if(fight(e5)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 6://大蝙蝠
					if(fight(e6)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 7://吸血蝙蝠
					if(fight(e7)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 8://吸血鬼
					if(fight(e8)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 9://绿史莱姆
					if(fight(e9)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 10://红史莱姆
					if(fight(e10)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 11://大史莱姆
					if(fight(e11)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 12://史莱姆王
					if(fight(e12)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 13://初级法师
					if(fight(e13)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 14://高级法师
					if(fight(e14)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 15://初级巫师
					if(fight(e15)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 16://高级巫师
					if(fight(e16)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 17://兽人
					if(fight(e17)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 18://兽人武士
					if(fight(e18)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 19://石头人
					if(fight(e19)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 20://幽灵
					if(fight(e20)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 21://初级卫兵
					if(fight(e21)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 22://中级卫兵
					if(fight(e22)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 23://高级卫兵
					if(fight(e23)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 24://双手剑士
					if(fight(e24)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 25://魔王
					if(fight(e25)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 26://魔法警卫
					if(fight(e26)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 27://大法师
					if(fight(e27)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 28://战士
					if(fight(e28)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 29://骑士队长
					if(fight(e29)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 30://骑士
					if(fight(e30)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 31://黑暗骑士
					if(fight(e31)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 32://智慧老人
					player.y++;
					talk(32,(player.y-2)*11+player.x-1);
					role[player.floor][(player.y-2)*11+player.x-1] = 0;
					break;
				case 33://商人
					player.y++;
					talk(33,(player.y-2)*11+player.x-1);
					break;
				case 34://小偷
					player.y++;
					talk(34,(player.y-2)*11+player.x-1);
					break;
				case 35://仙子
					player.y++;
					talk(35,(player.y-2)*11+player.x-1);
					break;
				case 36://公主
					player.y++;
					talk(36,(player.y-2)*11+player.x-1);
					break;
				case 39://
					player.y++;
					buy();
					break;
			}
			
			switch(p){
				case 38://大乌贼
					if(fight(e33)){
						role[player.floor][(player.y-2)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 37://魔龙
					if(fight(e32)){
						role[player.floor][(player.y-2)*11+player.x-1] = 0;
					}
					else{
						player.y++;
					}
					break;
			}
			
			switch(r[(player.y-2)*11+player.x-2]){
				case 38://大乌贼
					if(fight(e33)){
						role[player.floor][(player.y-2)*11+player.x-2] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 37://魔龙
					if(fight(e32)){
						role[player.floor][(player.y-2)*11+player.x-2] = 0;
					}
					else{
						player.y++;
					}
					break;
			}
			
			switch(r[(player.y-2)*11+player.x]){
				case 38://大乌贼
					if(fight(e33)){
						role[player.floor][(player.y-2)*11+player.x] = 0;
					}
					else{
						player.y++;
					}
					break;
				case 37://魔龙
					if(fight(e32)){
						role[player.floor][(player.y-2)*11+player.x] = 0;
					}
					else{
						player.y++;
					}
					break;
			}
			
			if(r[(player.y-1)*11+player.x-2]===39 || r[(player.y-1)*11+player.x]===39){//商店
				player.y++;
			}
			
			if(r[(player.y-1)*11+player.x-2] === 26 && r[(player.y-1)*11+player.x]===26){//魔法警卫
				if(player.shield !== 5){
					if(player.hp > 1){
						player.hp /= 2;
						player.hp = Math.floor(player.hp);
					}
					else{
						player.y++;
					}
				}
			}
			
			if( (p===15 || r[(player.y-1)*11+player.x-2]===15 || r[(player.y-1)*11+player.x]===15) && ((r[(player.y-1)*11+player.x-2]*player.x!==15)&&(r[(player.y-1)*11+player.x]*player.x!==165)) ){//初级巫师
				if(player.shield !== 5){
					if(player.hp > 100){
						player.hp -= 100;
					}
					else{
						player.y++;
					}
				}
			}
			
			if( (p===16 || r[(player.y-1)*11+player.x-2]===16 || r[(player.y-1)*11+player.x]===16) && ((r[(player.y-1)*11+player.x-2]*player.x!==16)&&(r[(player.y-1)*11+player.x]*player.x!==176)) ){//高级巫师
				if(player.shield !== 5){
					if(player.hp > 200){
						player.hp -= 200;
					}
					else{
						player.y++;
					}
				}
			}
			
			break;
		case 39://右
			p = r[(player.y-1)*11+player.x];
			switch(r[((player.y-1)*11+player.x-1)]){
				case 1://骷髅人
					if(fight(e1)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 2://骷髅士兵
					if(fight(e2)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 3://骷髅队长
					if(fight(e3)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 4://鬼战士
					if(fight(e4)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 5://小蝙蝠
					if(fight(e5)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 6://大蝙蝠
					if(fight(e6)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 7://吸血蝙蝠
					if(fight(e7)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 8://吸血鬼
					if(fight(e8)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 9://绿史莱姆
					if(fight(e9)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 10://红史莱姆
					if(fight(e10)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 11://大史莱姆
					if(fight(e11)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 12://史莱姆王
					if(fight(e12)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 13://初级法师
					if(fight(e13)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 14://高级法师
					if(fight(e14)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 15://初级巫师
					if(fight(e15)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 16://高级巫师
					if(fight(e16)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 17://兽人
					if(fight(e17)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 18://兽人武士
					if(fight(e18)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 19://石头人
					if(fight(e19)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 20://幽灵
					if(fight(e20)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 21://初级卫兵
					if(fight(e21)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 22://中级卫兵
					if(fight(e22)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 23://高级卫兵
					if(fight(e23)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 24://双手剑士
					if(fight(e24)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 25://魔王
					if(fight(e25)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 26://魔法警卫
					if(fight(e26)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 27://大法师
					if(fight(e27)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 28://战士
					if(fight(e28)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 29://骑士队长
					if(fight(e29)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 30://骑士
					if(fight(e30)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 31://黑暗骑士
					if(fight(e31)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 32://智慧老人
					player.x--;
					talk(32,(player.y-1)*11+player.x);
					role[player.floor][(player.y-1)*11+player.x] = 0;
					break;
				case 33://商人
					player.x--;
					talk(33,(player.y-1)*11+player.x);
					break;
				case 34://小偷
					player.x--;
					talk(34,(player.y-1)*11+player.x);
					break;
				case 35://仙子
					player.x--;
					talk(35,(player.y-1)*11+player.x);
					break;
				case 36://公主
					player.x--;
					talk(36,(player.y-1)*11+player.x);
					break;
			}
			
			switch(p){
				case 38://大乌贼
					if(fight(e33)){
						role[player.floor][((player.y-1)*11+player.x)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 37://魔龙
					if(fight(e32)){
						role[player.floor][((player.y-1)*11+player.x)] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 39://商店
					player.x--;
					break;
			}
			
			switch(r[(player.y-2)*11+player.x]){
				case 38://大乌贼
					if(fight(e33)){
						role[player.floor][(player.y-2)*11+player.x] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 37://魔龙
					if(fight(e32)){
						role[player.floor][(player.y-2)*11+player.x] = 0;
					}
					else{
						player.x--;
					}
					break;
			}
			
			switch(r[(player.y)*11+player.x]){
				case 38://大乌贼
					if(fight(e33)){
						role[player.floor][(player.y)*11+player.x] = 0;
					}
					else{
						player.x--;
					}
					break;
				case 37://魔龙
					if(fight(e32)){
						role[player.floor][(player.y)*11+player.x] = 0;
					}
					else{
						player.x--;
					}
					break;
			}
			
			if(r[(player.y-2)*11+player.x-1] === 26 && r[(player.y)*11+player.x-1]===26){//魔法警卫
				if(player.shield !== 5){
					if(player.hp > 1){
						player.hp /= 2;
						player.hp = Math.floor(player.hp);
					}
					else{
						player.x--;
					}
				}
			}
			
			if( (p===15 || r[(player.y-2)*11+player.x-1]===15 || r[(player.y)*11+player.x-1]===15) && (p*player.x !==165) ){//初级巫师
				if(player.shield !== 5){
					if(player.hp > 100){
						player.hp -= 100;
					}
					else{
						player.x--;
					}
				}
			}
			
			if( (p===16 || r[(player.y-2)*11+player.x-1]===16 || r[(player.y)*11+player.x-1]===16) && (p*player.x !==176) ){//高级巫师
				if(player.shield !== 5){
					if(player.hp > 200){
						player.hp -= 200;
					}
					else{
						player.x--;
					}
				}
			}
			
			break;
		case 40://下
			p = r[(player.y)*11+player.x-1];
			switch(r[(player.y-1)*11+player.x-1]){
				case 1://骷髅人
					if(fight(e1)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 2://骷髅士兵
					if(fight(e2)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 3://骷髅队长
					if(fight(e3)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 4://鬼战士
					if(fight(e4)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 5://小蝙蝠
					if(fight(e5)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 6://大蝙蝠
					if(fight(e6)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 7://吸血蝙蝠
					if(fight(e7)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 8://吸血鬼
					if(fight(e8)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 9://绿史莱姆
					if(fight(e9)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 10://红史莱姆
					if(fight(e10)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 11://大史莱姆
					if(fight(e11)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 12://史莱姆王
					if(fight(e12)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 13://初级法师
					if(fight(e13)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 14://高级法师
					if(fight(e14)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 15://初级巫师
					if(fight(e15)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 16://高级巫师
					if(fight(e16)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 17://兽人
					if(fight(e17)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 18://兽人武士
					if(fight(e18)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 19://石头人
					if(fight(e19)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 20://幽灵
					if(fight(e20)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 21://初级卫兵
					if(fight(e21)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 22://中级卫兵
					if(fight(e22)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 23://高级卫兵
					if(fight(e23)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 24://双手剑士
					if(fight(e24)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 25://魔王
					if(fight(e25)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 26://魔法警卫
					if(fight(e26)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 27://大法师
					if(fight(e27)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 28://战士
					if(fight(e28)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 29://骑士队长
					if(fight(e29)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 30://骑士
					if(fight(e30)){
						role[player.floor][((player.y-1)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 31://黑暗骑士
					if(fight(e31)){
						role[player.floor][(player.y-1)*11+player.x-1] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 32://智慧老人
					player.y--;
					talk(32,(player.y)*11+player.x-1);
					role[player.floor][(player.y)*11+player.x-1] = 0;
					break;
				case 33://商人
					player.y--;
					talk(33,(player.y)*11+player.x-1);
					break;
				case 34://小偷
					player.y--;
					talk(34,(player.y)*11+player.x-1);
					break;
				case 35://仙子
					player.y--;
					talk(35,(player.y)*11+player.x-1);
					break;
				case 36://公主
					player.y--;
					talk(36,(player.y)*11+player.x-1);
					break;
				case 39://商店
					player.y--;
					break;
			}
			
			switch(p){
				case 38://大乌贼
					if(fight(e33)){
						role[player.floor][((player.y)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 37://魔龙
					if(fight(e32)){
						role[player.floor][((player.y)*11+player.x-1)] = 0;
					}
					else{
						player.y--;
					}
					break;
			}
			
			switch(r[(player.y)*11+player.x-2]){
				case 38://大乌贼
					if(fight(e33)){
						role[player.floor][(player.y)*11+player.x-2] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 37://魔龙
					if(fight(e32)){
						role[player.floor][(player.y)*11+player.x-2] = 0;
					}
					else{
						player.y--;
					}
					break;
			}
			
			switch(r[(player.y)*11+player.x]){
				case 38://大乌贼
					if(fight(e33)){
						role[player.floor][(player.y)*11+player.x] = 0;
					}
					else{
						player.y--;
					}
					break;
				case 37://魔龙
					if(fight(e32)){
						role[player.floor][(player.y)*11+player.x] = 0;
					}
					else{
						player.y--;
					}
					break;
			}
			
			if(r[(player.y-1)*11+player.x-2]===39 || r[(player.y-1)*11+player.x]===39){//商店
				player.y--;
			}
			
			if(r[(player.y-1)*11+player.x-2] === 26 && r[(player.y-1)*11+player.x]===26){//魔法警卫
				if(player.shield !== 5){
					if(player.hp > 1){
						player.hp /= 2;
						player.hp = Math.floor(player.hp);
					}
					else{
						player.y--;
					}
				}
			}
			
			if( (p===15 || r[(player.y-1)*11+player.x-2]===15 || r[(player.y-1)*11+player.x]===15) && ((r[(player.y-1)*11+player.x-2]*player.x!==15)&&(r[(player.y-1)*11+player.x]*player.x!==165)) ){//初级巫师
				if(player.shield !== 5){
					if(player.hp > 100){
						player.hp -= 100;
					}
					else{
						player.y--;
					}
				}
			}
			
			if( (p===16 || r[(player.y-1)*11+player.x-2]===16 || r[(player.y-1)*11+player.x]===16) && ((r[(player.y-1)*11+player.x-2]*player.x!==16)&&(r[(player.y-1)*11+player.x]*player.x!==176)) ){//高级巫师
				if(player.shield !== 5){
					if(player.hp > 200){
						player.hp -= 200;
					}
					else{
						player.y--;
					}
				}
			}
			
			break;
	}
}

function checkItem(){
	var i = item[player.floor];
	var pos = (player.y-1)*11+player.x-1;
	switch(i[pos]){
		case 1://红宝石
			player.att += 2;
			break;
		case 2://蓝宝石
			player.def += 2;
			break;
		case 3://红药水
			player.hp += 50;
			break;
		case 4://蓝药水
			player.hp += 200;
			break;
		case 5://圣水
			player.hp *= 2;
			break;
		case 6://黄钥匙
			player.yellowKey++;
			break;
		case 7://蓝钥匙
			player.blueKey++;
			break;
		case 8://红钥匙
			player.redKey++;
			break;
		case 9://金钥匙
			player.item.push(9);
			break;
		case 10://怪物书
			player.item.push(10);
			break;
		case 11://记事本
			player.item.push(11);
			break;
		case 12://大金币
			player.item.push(12);
			break;
		case 13://铁锹
			player.item.push(13);
			break;
		case 14://雪花
			player.item.push(14);
			break;
		case 15://地震卷轴
			player.item.push(15);
			break;
		case 16://对称飞行器
			player.item.push(16);
			break;
		case 17://向下飞行器
			player.item.push(17);
			break;
		case 18://向上飞行器
			player.item.push(18);
			break;
		case 19://十字架
			player.item.push(19);
			break;
		case 20://炸药
			player.item.push(20);
			break;
		case 21://屠龙剑
			player.item.push(21);
			break;
		case 22://铁剑
			player.sword = 1;
			player.att += 10;
			break;
		case 23://银剑
			player.sword = 2;
			player.att += 20;
			break;
		case 24://骑士剑
			player.sword = 3;
			player.att += 40;
			break;
		case 25://圣剑
			player.sword = 4;
			player.att += 50;
			break;
		case 26://神圣剑
			player.sword = 5;
			player.att += 100;
			break;
		case 27://铁盾
			player.shield = 1;
			player.def += 10;
			break;
		case 28://银盾
			player.shield = 2;
			player.def += 20;
			break;
		case 29://骑士盾
			player.shield = 3;
			player.def += 40;
			break;
		case 30://圣盾
			player.shield = 4;
			player.def += 50;
			break;
		case 31://神圣盾
			player.shield = 5;
			player.def += 100;
			break;
		case 32://楼层传送器
			player.item.push(32);
			break;
	}
	item[player.floor][pos] = 0;
}


var eventHappened = [
	0,
	0,
	0,
	0,
	0,//4
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	
];

function checkEvent(){
	var f = floor;
	var r = role;
	var i = item;
	
	if(!eventHappened[0]){
		if(r[2][16]===0 && r[2][18]===0){//2楼中级卫兵被打败，开牢门
			floor[2][48]=floor[2][81]=floor[2][114]=0;
			floor[2][52]=floor[2][85]=floor[2][118]=0;
			eventHappened[0] = 1;
		}
	}
	
	if(!eventHappened[1]){
		if(r[2][43]===0){//2楼智慧老人加10%攻击和防御
			player.att = Math.floor(player.att * 1.1);
			player.def = Math.floor(player.def * 1.1);
			eventHappened[1] = 1;
		}
	}
	
	if(!eventHappened[2]){
		if(r[2][109]===0){//2楼智慧老人去35楼开通道
			floor[35][102]=0;
			role[35][103]=32;
			eventHappened[2] = 1;
		}
	}
	
	if(!eventHappened[3]){
		if(r[3][43]===0){//3楼智慧老人给怪物书
			player.item.push(10);
			eventHappened[3] = 1;
		}
	}
	
	if(!eventHappened[4]){
		if(i[5][91]===0){//5楼记事本系统开启
			player.hearing = "记事本系统已开启，记事本将自动记录所有重要的谈话与提示。";
			eventHappened[4] = 1;
			player.isTalking = 1;
		}
	}
	
	if(!eventHappened[5]){
		if(r[8][52]===0 && r[8][54]===0){//8楼初级卫兵被打败，开自动门
			floor[8][42]=0;
			eventHappened[5] = 1;
		}
	}
	
	if(!eventHappened[5]){
		if(player.floor===10 && r[10][38]===3 && player.x === 6 && player.y === 6){//10楼进入陷阱
			player.y = 5;
			player.hearing = "哈哈，你上当了！";
			player.isTalking = 1;
			
			floor[10][27]=floor[10][71]=10;
			for(var k = 0; k<43; k++){
				role[10][k]=0;
			}
			
			role[10][16]=3;
			role[10][37]=role[10][39]=role[10][48]=role[10][50]=role[10][59]=role[10][61]=1;
			role[10][38]=role[10][60]=2;
			eventHappened[5] = 1;
		}
	}
	
	if(!eventHappened[6]){
		if(eventHappened[5] && (role[10][37]+role[10][38]+role[10][39]+role[10][48]+role[10][50]+role[10][59]+role[10][60]+role[10][61]) === 0){//10楼打败陷阱怪
			player.hearing = "不可能，你无法打败我！来吧！让我们一决高下！";
			player.isTalking = 1;
			floor[10][27]=0;
			eventHappened[6] = 1;
		}
	}
	
	if(!eventHappened[7]){
		if(eventHappened[6] && r[10][16]===0){//10楼骷髅队长被打败
			player.hearing = "啊！怎么可能！我居然被你打败了！别高兴得太早，后面还有更困难的在等着你！";
			player.isTalking = 1;
			eventHappened[7] = 1;
			
			floor[10][115]=4;
			floor[10][36]=floor[10][40]=floor[10][71]=0;
			
			
		}
	}
	
	
}


