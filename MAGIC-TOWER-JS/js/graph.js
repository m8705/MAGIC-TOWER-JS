/*负责游戏中的绘制任务*/

function draw(){
	var c = $("canvas")[0].getContext("2d");
	
	for(var a = 1; a<= 11; a++){//绘制两侧的信息栏，这个还可以简化一下
		for(var b = 1; b <= 4; b++){
			c.drawImage(pic(8), 0, 0, 32, 32, 32 * b, 32 * a, 32, 32);
			c.drawImage(pic(8), 0, 0, 32, 32, 32 * b + 480, 32 * a, 32, 32);
		}
	}
	
	for(var a = 1; a<= 11; a++){//绘制地板
		for(var b = 1; b <= 11; b++){
			c.drawImage(pic(13),32 * b + 128, 32 * a);
		}
	}
	
	var theItem = item[player.floor];
	for(var a = 1; a <= 11; a++){//绘制物品
		for(var b = 1; b <= 11; b++){
			switch(theItem[(a-1) * 11 + b - 1]){//(a-1) * 11 + b - 1是当前的数字在数组中的位置
				case 1: //绘制红宝石
					c.drawImage(pic(2), 0, 0, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 2: //绘制蓝宝石
					c.drawImage(pic(2), 32, 0, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 3: //绘制红药水
					c.drawImage(pic(2), 0, 32, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 4: //绘制蓝药水
					c.drawImage(pic(2), 32, 32, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 5: //绘制圣水
					c.drawImage(pic(2), 96, 96, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 6: //绘制黄钥匙
					c.drawImage(pic(2), 0, 128, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 7: //绘制蓝钥匙
					c.drawImage(pic(2), 32, 128, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 8: //绘制红钥匙
					c.drawImage(pic(2), 64, 128, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 9: //绘制金钥匙
					c.drawImage(pic(2), 64, 160, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 10: //绘制怪物书
					c.drawImage(pic(2), 0, 224, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 11: //绘制记事本
					c.drawImage(pic(2), 32, 224, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 12: //绘制大金币
					c.drawImage(pic(2), 96, 224, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 13: //绘制铁锹
					c.drawImage(pic(2), 0, 256, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 14: //绘制雪花
					c.drawImage(pic(2), 64, 256, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 15: //绘制地震卷轴
					c.drawImage(pic(2), 96, 256, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 16: //绘制对称飞行器
					c.drawImage(pic(2), 0, 288, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 17: //绘制向下飞行器
					c.drawImage(pic(2), 32, 288, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 18: //绘制向上飞行器
					c.drawImage(pic(2), 64, 288, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 19: //绘制十字架
					c.drawImage(pic(2), 96, 288, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 20: //绘制炸药
					c.drawImage(pic(2), 0, 320, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 21: //绘制屠龙剑
					c.drawImage(pic(2), 64, 320, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 22: //绘制铁剑
					c.drawImage(pic(2), 0, 384, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 23: //绘制银剑
					c.drawImage(pic(2), 32, 384, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 24: //绘制骑士剑
					c.drawImage(pic(2), 64, 384, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 25: //绘制圣剑
					c.drawImage(pic(2), 96, 384, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 26: //绘制神圣剑
					c.drawImage(pic(2), 0, 416, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 27: //绘制铁盾
					c.drawImage(pic(2), 0, 448, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 28: //绘制银盾
					c.drawImage(pic(2), 32, 448, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 29: //绘制骑士盾
					c.drawImage(pic(2), 64, 448, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 30: //绘制圣盾
					c.drawImage(pic(2), 96, 448, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 31: //绘制神圣盾
					c.drawImage(pic(2), 0, 480, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 32: //绘制楼层传送器
					c.drawImage(pic(16),32 * b + 128, 32 * a);
					break;
			}
		}
	}
	
	var theFloor = floor[player.floor];
	for(var a = 1; a <= 11; a++){//绘制底层
		for(var b = 1; b <= 11; b++){
			switch(theFloor[(a-1) * 11 + b - 1]){//(a-1) * 11 + b - 1是当前的数字在数组中的位置
				case 1: //绘制墙
					c.drawImage(pic(14) ,32 * b + 128, 32 * a);
					break;
				case 2: //绘制牢门
					c.drawImage(pic(8), 96, 0, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 3: //绘制下楼梯
					c.drawImage(pic(6),32 * b + 128, 32 * a);
					break;
				case 4: //绘制上楼梯
					c.drawImage(pic(7), 32 * b + 128, 32 * a);
					break;
				case 5: //绘制岩浆
					c.drawImage(pic(9), 32 * picState, 0, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 6: //绘制星际空间
					c.drawImage(pic(9), 32 * picState, 64, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 7: //绘制黄门
					c.drawImage(pic(5), 0, 0, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 8: //绘制蓝门
					c.drawImage(pic(5), 32, 0, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 9: //绘制红门
					c.drawImage(pic(5), 64, 0, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 10: //绘制自动门
					c.drawImage(pic(5), 96, 0, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 11: //绘制假墙
					c.drawImage(pic(8), 32, 0, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
			}
		}
	}
	
	var theRole = role[player.floor];
	for(var a = 1; a <= 11; a++){//绘制角色
		for(var b = 1; b <= 11; b++){
			switch(theRole[(a-1) * 11 + b - 1]){//(a-1) * 11 + b - 1是当前的数字在数组中的位置
				case 1: //绘制骷髅人
					c.drawImage(pic(3), 32 * picState, 0, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 2: //绘制骷髅士兵
					c.drawImage(pic(3), 32 * picState, 32, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 3: //绘制骷髅队长
					c.drawImage(pic(3), 32 * picState, 64, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 4: //绘制鬼战士
					c.drawImage(pic(3), 32 * picState, 96, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 5: //绘制小蝙蝠
					c.drawImage(pic(3), 32 * picState, 128, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 6: //绘制大蝙蝠
					c.drawImage(pic(3), 32 * picState, 160, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 7: //绘制吸血蝙蝠
					c.drawImage(pic(3), 32 * picState, 192, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 8: //绘制吸血鬼
					c.drawImage(pic(3), 32 * picState, 224, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 9: //绘制绿史莱姆
					c.drawImage(pic(3), 32 * picState, 256, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 10: //绘制红史莱姆
					c.drawImage(pic(3), 32 * picState, 288, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 11: //绘制大史莱姆
					c.drawImage(pic(3), 32 * picState, 320, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 12: //绘制史莱姆王
					c.drawImage(pic(3), 32 * picState, 352, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 13: //绘制初级法师
					c.drawImage(pic(3), 32 * picState, 384, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 14: //绘制高级法师
					c.drawImage(pic(3), 32 * picState, 416, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 15: //绘制初级巫师
					c.drawImage(pic(3), 32 * picState, 448, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 16: //绘制高级巫师
					c.drawImage(pic(3), 32 * picState, 480, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 17: //绘制兽人
					c.drawImage(pic(3), 32 * picState, 512, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 18: //绘制兽人武士
					c.drawImage(pic(3), 32 * picState, 544, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 19: //绘制石头人
					c.drawImage(pic(3), 32 * picState, 576, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 20: //绘制幽灵
					c.drawImage(pic(3), 32 * picState, 608, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 21: //绘制初级卫兵
					c.drawImage(pic(3), 32 * picState, 640, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 22: //绘制中级卫兵
					c.drawImage(pic(3), 32 * picState, 672, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 23: //绘制高级卫兵
					c.drawImage(pic(3), 32 * picState, 704, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 24: //绘制双手剑士
					c.drawImage(pic(3), 32 * picState, 736, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 25: //绘制魔王
					c.drawImage(pic(3), 32 * picState, 1664, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 26: //绘制魔法警卫
					c.drawImage(pic(3), 32 * picState, 1696, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 27: //绘制大法师
					c.drawImage(pic(3), 32 * picState, 1728, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 28: //绘制战士
					c.drawImage(pic(3), 32 * picState, 1792, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 29: //绘制骑士队长
					c.drawImage(pic(3), 32 * picState, 1824, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 30: //绘制骑士
					c.drawImage(pic(3), 32 * picState, 1856, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 31: //绘制黑暗骑士
					c.drawImage(pic(3), 32 * picState, 1888, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 32: //绘制智慧老人
					c.drawImage(pic(10), 32 * picState, 0, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 33: //绘制商人
					c.drawImage(pic(10), 32 * picState, 32, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 34: //绘制小偷
					c.drawImage(pic(10), 32 * picState, 64, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 35: //绘制仙子
					c.drawImage(pic(10), 32 * picState, 96, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 36: //绘制公主
					c.drawImage(pic(11), 32 * picState, 96, 32, 32, 32 * b + 128, 32 * a, 32, 32);
					break;
				case 37: //绘制魔龙
					c.drawImage(pic(4), 96 * picState, 0, 96, 96, 32 * (b-1) + 128, 32 * (a-1), 96, 96);
					break;
				case 38: //绘制大乌贼
					c.drawImage(pic(4), 96 * picState, 96, 96, 96, 32 * (b-1) + 128, 32 * (a-1), 96, 96);
					break;
				case 39: //绘制商店
					c.drawImage(pic(12), 32 * (b-1) + 128, 32 * a);
					break;
			}
		}
	}
	
	c.drawImage(pic(1), 0, (player.face-1) * 32, 32, 32, 32 * player.x + 128, 32 * player.y, 32, 32);//绘制主角
	
	//绘制各种信息
	
	c.fillStyle = "#999999";
	c.fillRect(45,45,100,30);
	
	c.font = "25px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText("第" + player.floor + "层",60,60);
	
	c.fillStyle = "#999999";
	c.fillRect(45,85,100,90);
	
	c.font = "10px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText("生命  "+player.hp,60,100);
	c.fillText("攻击  "+player.att,60,120);
	c.fillText("防御  "+player.def,60,140);
	c.fillText("金币  "+player.coin,60,160);
	
	c.fillStyle = "#999999";
	c.fillRect(45,185,100,96);
	
	c.drawImage(pic(2), 0, 128, 32, 32, 45, 185, 32, 32);//黄钥匙
	c.drawImage(pic(2), 32, 128, 32, 32, 45, 217, 32, 32);//蓝钥匙
	c.drawImage(pic(2), 64, 128, 32, 32, 45, 249, 32, 32);//红钥匙
	
	c.font = "10px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText(player.yellowKey+"  把",90,202);
	c.fillText(player.blueKey+"  把",90,234);
	c.fillText(player.redKey+"  把",90,266);
	
	c.fillStyle = "#999999";
	c.fillRect(45,291,100,80);
	
	c.font = "10px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText("F帮助",60,310);
	c.fillText("R重玩",100,310);
	c.fillText("S存档",60,350);
	c.fillText("L读档",100,350);
	
	c.fillStyle = "#999999";
	c.fillRect(525,45,100,64);
	
	c.font = "10px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	
	if(player.sword){
		switch(player.sword){
			case 1: //绘制铁剑
				c.drawImage(pic(2), 0, 384, 32, 32, 525, 45, 32, 32);
				c.fillText("铁剑",565,60);
				break;
			case 2: //绘制银剑
				c.drawImage(pic(2), 32, 384, 32, 32, 525, 45, 32, 32);
				c.fillText("银剑",565,60);
				break;
			case 3: //绘制骑士剑
				c.drawImage(pic(2), 64, 384, 32, 32, 525, 45, 32, 32);
				c.fillText("骑士剑",565,60);
				break;
			case 4: //绘制圣剑
				c.drawImage(pic(2), 96, 384, 32, 32, 525, 45, 32, 32);
				c.fillText("圣剑",565,60);
				break;
			case 5: //绘制神圣剑
				c.drawImage(pic(2), 0, 416, 32, 32, 525, 45, 32, 32);
				c.fillText("神圣剑",565,60);
				break;
		}
	}
	else{
		c.fillText("无武器",555,60);
	}
	
	if(player.shield){
		switch(player.shield){
			case 1: //绘制铁盾
				c.drawImage(pic(2), 0, 448, 32, 32, 525, 77, 32, 32);
				c.fillText("铁盾",565,92);
				break;
			case 2: //绘制银盾
				c.drawImage(pic(2), 32, 448, 32, 32, 525, 77, 32, 32);
				c.fillText("银盾",565,92);
				break;
			case 3: //绘制骑士盾
				c.drawImage(pic(2), 64, 448, 32, 32, 525, 77, 32, 32);
				c.fillText("骑士盾",565,92);
				break;
			case 4: //绘制圣盾
				c.drawImage(pic(2), 96, 448, 32, 32, 525, 77, 32, 32);
				c.fillText("圣盾",565,92);
				break;
			case 5: //绘制神圣盾
				c.drawImage(pic(2), 0, 480, 32, 32, 525, 77, 32, 32);
				c.fillText("神圣盾",565,92);
				break;
		}
	}
	else{
		c.fillText("无防具",555,92);
	}
	
	c.fillStyle = "#999999";
	c.fillRect(525,119,100,252);
	
	c.font = "10px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText("永久使用宝物",540,134);
	c.fillText("一次使用宝物",540,218);
	c.fillText("自动使用宝物",540,329);
	
	if(player.item.indexOf(5)>=0){//绘制圣水
		c.drawImage(pic(2), 96, 96, 32, 32, 528, 228, 32, 32);
	}
	
	if(player.item.indexOf(9)>=0){//绘制金钥匙
		c.drawImage(pic(2), 64, 160, 32, 32, 560, 228, 32, 32);
	}
	
	if(player.item.indexOf(10)>=0){//绘制怪物书
		c.drawImage(pic(2), 0, 224, 32, 32, 528, 144, 32, 32);
	}
	
	if(player.item.indexOf(11)>=0){//绘制记事本
		c.drawImage(pic(2), 32, 224, 32, 32, 592, 144, 32, 32);
	}
	
	if(player.item.indexOf(12)>=0){//绘制大金币
		c.drawImage(pic(2), 96, 224, 32, 32, 592, 339, 32, 32);
	}
	
	if(player.item.indexOf(13)>=0){//绘制铁锹
		c.drawImage(pic(2), 0, 256, 32, 32, 528, 260, 32, 32);
	}
	
	if(player.item.indexOf(14)>=0){//绘制雪花
		c.drawImage(pic(2), 64, 256, 32, 32, 528, 176, 32, 32);
	}
	
	if(player.item.indexOf(15)>=0){//绘制地震卷轴
		c.drawImage(pic(2), 96, 256, 32, 32, 560, 260, 32, 32);
	}
	
	if(player.item.indexOf(16)>=0){//绘制对称飞行器
		c.drawImage(pic(2), 0, 288, 32, 32, 592, 292, 32, 32);
	}
	
	if(player.item.indexOf(17)>=0){//绘制向下飞行器
		c.drawImage(pic(2), 32, 288, 32, 32, 560, 292, 32, 32);
	}
	
	if(player.item.indexOf(18)>=0){//绘制向上飞行器
		c.drawImage(pic(2), 64, 288, 32, 32, 528, 292, 32, 32);
	}
	
	if(player.item.indexOf(19)>=0){//绘制十字架
		c.drawImage(pic(2), 96, 288, 32, 32, 528, 339, 32, 32);
	}
	
	if(player.item.indexOf(20)>=0){//绘制炸药
		c.drawImage(pic(2), 0, 320, 32, 32, 592, 260, 32, 32);
	}
	
	if(player.item.indexOf(21)>=0){//绘制绘制屠龙剑
		c.drawImage(pic(2), 64, 320, 32, 32, 560, 339, 32, 32);
	}
	
	if(player.item.indexOf(32)>=0){//绘制楼层传送器
		c.drawImage(pic(16),560, 144);
	}
	
	
	
	
	
	
	
	
	if(player.isTalking){
		drawTaking();
	}
	else if(player.isTalkingToTrader){
		drawTalkingToTrader();
	}
	else if(player.isBuying){
		drawBuying();
	}
	else if(player.isLookingBook){
		drawLookingBook();
	}
	else if(player.isLookingNoteBook){
		drawLookingNoteBook();	
	}
	else if(player.isLookingHelp){
		drawLookingHelp();	
	}
}

function drawTaking(){//绘制聊天状态
	var c = $("canvas")[0].getContext("2d");
	c.fillStyle = "#666666";
	c.fillRect(160,128,352,160);
	
	drawText(player.hearing,165,146);
	
	c.font = "8px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText("按任意键继续",300, 280);
}



function drawBuying(){//绘制在商店处购买状态
	var c = $("canvas")[0].getContext("2d");
	var n = player.buyTimes;
	c.fillStyle = "#666666";
	c.fillRect(160,96,352,224);
		
	c.font = "20px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText("商店",316,116);
	
	c.font = "20px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText("给我"+(10*n*(n-1)+20)+"个金币",276,146);
	c.fillText("我就提升你以下一种能力",226,166);
	
	c.fillStyle = "#555555";
	c.fillRect(276,186,120,32);
	c.fillRect(276,228,120,32);
	c.fillRect(276,270,120,32);
	
	c.font = "20px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText("生命 + " + 100 * ( Math.floor(player.floor / 10) + 1),286,201);
	c.fillText("攻击 + " + 2 * ( Math.floor(player.floor / 10) + 1),286,243);
	c.fillText("防御 + " + 4 * ( Math.floor(player.floor / 10) + 1),286,285);
}

function drawTalkingToTrader(){//绘制在商人处购买状态
	var c = $("canvas")[0].getContext("2d");
	c.fillStyle = "#666666";
	c.fillRect(160,128,352,160);
	
	drawText(player.hearing,165,146);
	
	c.font = "8px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	
	c.fillStyle = "#555555";
	c.fillRect(271,248,60,32);
	c.fillRect(341,248,60,32);
	
	c.font = "20px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText("确定",281,263);
	c.fillText("取消",351,263);
}

function drawLookingBook(){//绘制阅读怪物书状态
	var c = $("canvas")[0].getContext("2d");
	c.fillStyle = "#666666";
	c.fillRect(160,32,352,352);
		
	c.font = "20px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText("怪物书",306,52);
	
	var enermey = [];
	var r = role[player.floor]
	for(var a = 0; a < 120; a++){
		if(enermey.indexOf(r[a])<0){
			if(r[a] !== 0 && ((r[a]<32)||(r[a]===37||r[a]===38)) ){
				enermey.push(r[a]);
			}
		}
	}
	
	c.font = "8px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	
	if(enermey.length===0){
		c.fillText("这层楼没有怪物！",288, 72);
	}
	
	var result;
	
	if(enermey.length <= 10){
		
	}
	
	for(var b = 0; b < enermey.length; b++){
		result = getFightInfo( getEnermey( enermey[b] ) );
		
		if(enermey[b]>=25 && enermey[b]<=27){
			c.drawImage(pic(3), 32 * picState, 32 * (enermey[b]-1) + 896, 32, 32, 192, 32 * (b+2), 32, 32);
		}
		else if(enermey[b]>=28 && enermey[b]<=31){
			c.drawImage(pic(3), 32 * picState, 32 * (enermey[b]-1) + 928, 32, 32, 192, 32 * (b+2), 32, 32);
		}
		else if(enermey[b]===37){
			c.drawImage(pic(4), 96 * picState,  0, 96, 96, 192, 32 * (b+2), 32, 32);
		}
		else if(enermey[b]===38){
			c.drawImage(pic(4), 96 * picState, 96, 96, 96, 192, 32 * (b+2), 32, 32);
		}
		else{
			c.drawImage(pic(3), 32 * picState, 32 * (enermey[b]-1), 32, 32, 192, 32 * (b+2), 32, 32);
		}
		
		if(result.damage===0){
			c.fillStyle = "#33CC33";
			c.fillText("你不会受到任何损害，  收获【"+result.coin+"】金币",224, 32 * (b+2)+8);
		}
		else if(result.damage){
			c.fillStyle = "#33CC33";
			c.fillText("你将损害【" + result.damage + "】生命，  收获【"+result.coin+"】金币",224, 32 * (b+2)+8);
		}
		else{
			c.fillStyle = "#FF0033";
			c.fillText("你无法攻击！",224, 32 * (b+2)+8);
		}
		c.fillStyle = "white";
		c.fillText(result.name + "：生命" + result.hp + "，攻击" + result.att + "，防御" + result.def + "，金币" + getEnermey(enermey[b]).coin,224, 32 * (b+2)+24);
		
	}
	c.font = "8px Arial";
	c.fillText("按任意键继续",300, 376);
}

function drawLookingNoteBook(){//绘制阅读记事本状态
	var c = $("canvas")[0].getContext("2d");
	c.fillStyle = "#666666";
	c.fillRect(160,32,352,352);
		
	c.font = "20px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText("记事本",306,52);
	
	c.font = "8px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	
	var heardWiseWord = player.heard.wiser[player.floor];//某一楼层所有智慧老人讲过的话
	var heardNpcWord = player.heard.npc[player.floor];//某一楼层所有npc讲过的话
	
	var content;//某一楼层所有智慧老人和npc讲过的话
	
	if(heardWiseWord || heardNpcWord){
		
		if(!heardWiseWord){
			content = heardNpcWord;
		}
		else if(!heardNpcWord){
			content = heardWiseWord;
		}
		else{
			content = heardWiseWord.concat(heardNpcWord);
		}
		
		for(var i = 0;i < content.length;i++){
			drawText(content[i],165,82+64*i,0,8);
		}
	}
	else{
		c.fillText("这层楼没有谈话！",288, 72);
	}
	c.font = "8px Arial";
	c.fillText("按任意键继续",300, 376);
}


function drawLookingHelp(){//绘制阅读帮助状态
	var c = $("canvas")[0].getContext("2d");
	var c = $("canvas")[0].getContext("2d");
	c.fillStyle = "#666666";
	c.fillRect(160,32,352,352);
		
	c.font = "20px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	c.fillText("帮助",316,52);
	var help = "很久很久以前，在未知的国度里，有一位小公主，长得美丽动人，深得国王宠爱。" +
				"有一天，妖风大作，一群妖怪将她抓走了，国王非常着急上火。" +
				"国王找人打听到，公主被魔王抓到远方的一座魔塔里，于是国王向全国的勇士发出号令，只要谁先救出小公主，就把小公主许配给谁。" +
				"可是所有去救公主的勇士都是有去无回......" +
				"而你现在误打误撞进入了魔塔，并不要什么小公主，只想赶紧开溜，请你想个办法，靠着键盘方向键尽快逃命。你只有一次存档机会，祝你好运！";
	drawText(help,165,82);
	c.font = "8px Arial";
	c.fillText("按任意键继续",300, 376);
}

/****绘制自适应的字符串****/
function drawText(t,x,y,w,s){
	w = w || 330;//文字的限定宽度
	s = s || 20;//文字的字体大小
	
	var c = $("canvas")[0].getContext("2d");
	var chr = t.split("");//将文本拆分成一个个字符
	var temp = "";
	var row = [];//行
	
	c.font = s + "px Arial";
	c.fillStyle = "white";
	c.textBaseline = "middle";
	
	for(var a = 0; a < chr.length; a++){
		if(c.measureText(temp).width < w){
			;
		}
		else{
			row.push(temp);
			temp = "";
		}
		temp += chr[a];
	}
	row.push(temp);
	
	for(var b = 0; b < row.length; b++){
		c.fillText(row[b],x,y+(b+1)*20);
	}
}