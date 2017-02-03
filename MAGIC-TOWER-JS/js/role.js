/*负责敌人信息的管理*/

function getEnermey(num){
	switch(num){
		case 1:
			return e1;
			break;
		case 2:
			return e2;
			break;
		case 3:
			return e3;
			break;
		case 4:
			return e4;
			break;
		case 5:
			return e5;
			break;
		case 6:
			return e6;
			break;
		case 7:
			return e7;
			break;
		case 8:
			return e8;
			break;
		case 9:
			return e9;
			break;
		case 10:
			return e10;
			break;
		case 11:
			return e11;
			break;
		case 12:
			return e12;
			break;
		case 13:
			return e13;
			break;
		case 14:
			return e14;
			break;
		case 15:
			return e15;
			break;
		case 16:
			return e16;
			break;
		case 17:
			return e17;
			break;
		case 18:
			return e18;
			break;
		case 19:
			return e19;
			break;
		case 20:
			return e20;
			break;
		case 21:
			return e21;
			break;
		case 22:
			return e22;
			break;
		case 23:
			return e23;
			break;
		case 24:
			return e24;
			break;
		case 25:
			return e25;
			break;
		case 26:
			return e26;
			break;
		case 27:
			return e27;
			break;
		case 28:
			return e28;
			break;
		case 29:
			return e29;
			break;
		case 30:
			return e30;
			break;
		case 31:
			return e31;
			break;	
		case 37://魔龙
			return e32;
			break;
		case 38://大乌贼
			return e33;
			break;
	}
}


var e1 = {//骷髅人
	name:"骷髅人",
	id:1,
	hp:50,
	att:42,
	def:6,
	coin:6
};

var e2 = {//骷髅士兵
	name:"骷髅士兵",
	id:2,
	hp:55,
	att:52,
	def:12,
	coin:8
};

var e3= {//骷髅队长
	name:"骷髅队长",
	id:3,
	hp:100,
	att:65,
	def:15,
	coin:30
};

var e4 = {//鬼战士
	name:"鬼战士",
	id:4,
	hp:220,
	att:180,
	def:30,
	coin:35
};

var e5 = {//小蝙蝠
	name:"小蝙蝠",
	id:5,
	hp:35,
	att:38,
	def:3,
	coin:3
};

var e6 = {//大蝙蝠
	name:"大蝙蝠",
	id:6,
	hp:60,
	att:100,
	def:8,
	coin:12
};

var e7 = {//吸血蝙蝠
	name:"吸血蝙蝠",
	id:7,
	hp:200,
	att:390,
	def:90,
	coin:50
};

var e8 = {//吸血鬼
	name:"吸血鬼",
	id:8,
	hp:444,
	att:199,
	def:66,
	coin:144
};

var e9 = {//绿史莱姆
	name:"绿史莱姆",
	id:9,
	hp:35,
	att:18,
	def:1,
	coin:1
};

var e10 = {//红史莱姆
	name:"红史莱姆",
	id:10,
	hp:45,
	att:20,
	def:2,
	coin:2
};

var e11 = {//大史莱姆
	name:"大史莱姆",
	id:11,
	hp:130,
	att:60,
	def:3,
	coin:8
};

var e12 = {//史莱姆王
	name:"史莱姆王",
	id:12,
	hp:360,
	att:310,
	def:20,
	coin:40
};

var e13 = {//初级法师
	name:"初级法师",
	id:13,
	hp:60,
	att:32,
	def:8,
	coin:5
};

var e14 = {//高级法师
	name:"高级法师",
	id:14,
	hp:100,
	att:95,
	def:30,
	coin:22
};

var e15 = {//初级巫师
	name:"初级巫师",
	id:15,
	hp:220,
	att:370,
	def:110,
	coin:80
};

var e16 = {//高级巫师
	name:"高级巫师",
	id:16,
	hp:200,
	att:380,
	def:130,
	coin:90
};

var e17 = {//兽人
	name:"兽人",
	id:17,
	hp:260,
	att:85,
	def:5,
	coin:18
};

var e18 = {//兽人武士
	name:"兽人武士",
	id:18,
	hp:320,
	att:120,
	def:15,
	coin:30
};

var e19 = {//石头人
	name:"石头人",
	id:19,
	hp:20,
	att:100,
	def:68,
	coin:28
};

var e20 = {//幽灵
	name:"幽灵",
	id:20,
	hp:320,
	att:140,
	def:20,
	coin:30
};

var e21 = {//初级卫兵
	name:"初级卫兵",
	id:21,
	hp:50,
	att:48,
	def:22,
	coin:12
};

var e22 = {//中级卫兵
	name:"中级卫兵",
	id:22,
	hp:100,
	att:180,
	def:110,
	coin:50
};

var e23 = {//高级卫兵
	name:"高级卫兵",
	id:23,
	hp:180,
	att:460,
	def:360,
	coin:200
};

var e24 = {//双手剑士
	name:"双手剑士",
	id:24,
	hp:100,
	att:680,
	def:50,
	coin:55
};

var e25 = {//魔王
	name:"魔王",
	id:25,
	hp:8000,
	att:5000,
	def:1000,
	coin:5000
};

var e26 = {//魔法警卫
	name:"魔法警卫",
	id:26,
	hp:230,
	att:450,
	def:100,
	coin:100
};

var e27 = {//大法师
	name:"大法师",
	id:27,
	hp:4500,
	att:560,
	def:310,
	coin:1000
};

var e28 = {//战士
	name:"战士",
	id:28,
	hp:210,
	att:200,
	def:65,
	coin:45
};

var e29 = {//骑士队长
	name:"骑士队长",
	id:29,
	hp:120,
	att:150,
	def:50,
	coin:100
};

var e30 = {//骑士
	name:"骑士",
	id:30,
	hp:160,
	att:230,
	def:105,
	coin:65
};

var e31 = {//黑暗骑士
	name:"黑暗骑士",
	id:31,
	hp:180,
	att:430,
	def:210,
	coin:120
};

var e32 = {//魔龙
	name:"魔龙",
	id:32,
	hp:1500,
	att:600,
	def:250,
	coin:800
};

var e33 = {//大乌贼
	name:"大乌贼",
	id:33,
	hp:1200,
	att:180,
	def:20,
	coin:100
};