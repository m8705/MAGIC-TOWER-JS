/*负责玩家的道具使用，谈话和购买行为*/

function use(n){
	switch(n){
		case 5://圣水
			player.hp *= 2;
			draw();
			break;
			
		case 9://金钥匙
			for(var a = 1;a <= 121;a++){
				if(floor[player.floor][a-1]===7){
					floor[player.floor][a-1]=0;
				}
			}
			draw();
			break;
			
		case 10://怪物书
			if(player.isLookingBook){
				player.isLookingBook = 0;
			}
			else{
				player.isLookingNoteBook = 0;
				player.isLookingBook = 1;
			}
			
			break;
			
		case 11://记事本
			if(player.isLookingNoteBook){
				player.isLookingNoteBook = 0;
			}
			else{
				player.isLookingBook = 0;
				player.isLookingNoteBook = 1;
			}
			
			break;
			
		case 13://铁锹
			var pos = (player.y-1)*11+player.x-1;
			var fl = floor[player.floor];
			if(player.x===1){//靠左边
				if(fl[pos+1]===1){//挖掉右边的墙
					fl[pos+1] = 0;
				}
			}
			else if(player.x===11){//靠右边
				if(fl[pos-1]===1){//挖掉左边的墙
					fl[pos-1] = 0;
				}
			}
			else{//两边都不靠
				if(fl[pos+1]===1){//挖掉右边的墙
					fl[pos+1] = 0;
				}
				if(fl[pos-1]===1){//挖掉左边的墙
					fl[pos-1] = 0;
				}
				
			}
			if(fl[pos+11]===1){//挖掉下方的墙
					fl[pos+11] = 0;
			}
			if(fl[pos-11]===1){//挖掉上方的墙
				fl[pos-11] = 0;
			}
			draw();
			break;
			
		case 14://雪花
			for(var a = 1;a <= 121;a++){//将本层楼每个岩浆清除
				if(floor[player.floor][a-1]===5){
					floor[player.floor][a-1]=0;
				}
			}
			break;
			
		case 15://地震卷轴
			for(var a = 1;a <= 121;a++){//将本层楼每堵真墙清除
				if(floor[player.floor][a-1]===1){
					floor[player.floor][a-1]=0;
				}
			}
			draw();
			break;
			
		case 16://对称飞行器
			var pos = (player.y-1)*11+player.x-1;
			if(floor[player.floor][120-pos]===0){//对称点无障碍
				if(role[player.floor][120-pos]===0){//对称点无角色
					if(item[player.floor][120-pos]===0){//对称点无道具
						player.x = 12 - player.x;
						player.y = 12 - player.y;
						draw();
					}
				}
			}
			break;
			
		case 17://向下飞行器
			if(floor[player.floor-1]){
				player.floor--;
			}
			draw();
			break;
			
		case 18://向上飞行器
			if(floor[player.floor+1]){
				player.floor++;
			}
			draw();
			break;
			
		case 20://炸药
			var pos = (player.y-1)*11+player.x-1;
			var ro = role[player.floor];
			
			function canUseBomb(a){
				if(a>=32||a===3||a===8||a===25||a===27||a===29){
					return false;//不能使用炸药
				}
				return true;//可以使用炸药
			}
			
			if(player.x===1){
				if( canUseBomb(ro[pos+1]) ){//边缘情况，防止误炸上一层最后一个
					ro[pos+1] = 0;
				}
			}
			else if(player.x===11){//边缘情况，防止误炸下一层第一个
				if( canUseBomb(ro[pos-1]) ){
					ro[pos-1] = 0;
				}
			}
			else{//正常情况，先炸左右
				if( canUseBomb(ro[pos+1]) ){
					ro[pos+1] = 0;
				}
				if( canUseBomb(ro[pos-1]) ){
					ro[pos-1] = 0;
				}
			}
			//再炸上下
			if( canUseBomb(ro[pos+11]) ){
					ro[pos+11] = 0;
			}
			if( canUseBomb(ro[pos-11]) ){
				ro[pos-11] = 0;
			}
				
			
			draw();
			break;
			
		case 32://楼层传送器
			var a = prompt("请输入想去的楼层(1-49)","");
			a = Math.round(a);
			if(a>=1 && a<=49){
				if(player.wentFloor.indexOf(a)>=0){
					player.floor = a;
					draw();
				}
				else{
					alert("您还没有到过第" + a + "层哦!");
				}
			}
			else if(a===0){
					;
			}
			else{
				alert("您输入的楼层超出允许范围了!");
			}
			break;
	}
	checkEvent();
}

var wiserWord = [
	"",
	"勇士，我怎么会在这看到您？我也不知道怎么来到此处？我也不知道该怎么出去？我只知道铁剑在5楼，铁盾在9楼，你最好先取到它们。",
	[
		"谢谢你救了我，为感谢你的帮助，我将把你的攻击力和防御力各加10%。",
		"勇士，我们又见面了！谢谢你救了我。我可以帮你在魔龙前打开一条暗道，我现在就去35楼。"
	],
	"送你一本怪物书，它能预测出当前楼层各类怪物对你的伤害。",
	"有些门不能用钥匙打开，只有当你打败它的守卫后才会自动打开。",
	"记事本系统已开启，记事本将自动记录所有重要的谈话与提示。",
	"魔塔一共50层，每10层为一个区域。如果不打败此区域的头目就不能到更高的地方。",
	"在商店里你最好选择提升防御，只有在攻击力低于敌人的防御力时才提升攻击力。",
	"",
	"你是否注意到 5,9,14,16,18 楼有的墙与众不同？",
	"",
	"勇士，我探访得知银盾在11楼，银剑在17楼，这消息不知道对你是否有用。",
	"如果你持有十字架，面对兽人和吸血鬼时你的攻击力加倍。在没有十字架的情况下你不可能打败吸血鬼。十字架被藏在高于15楼的墙内。",
	"",
	"",
	"勇士，这大乌贼挡住了我前进的道路，现在暗道终于完工了,你现在最好也躲开它。",
	"我听说在塔内有2把隐藏的红钥匙。",
	"",
	"在这区域不多次提升攻击力，就不能打败石头人。切记前人教训！",
	"",
	"",
	"大法师住在25楼，他是魔塔的主人。以你现在的状态去攻击他简直就是自杀。 你应当在取得更高级别的道具后再去打败他。",
	"",
	"",
	"你不能直接到50楼，据说魔塔50层与24层有关联。",
	"",
	"",
	"如果你到27楼时状态为：生命1500，攻击80，防御98，拥有1蓝钥匙，5黄钥匙。那么祝贺你，你前期是比较成功的。",
	"",
	"勇士，我刚完成暗道。每次你都及时赶到，你真行！",
	"",
	"双手剑士的攻击力太高了，你最好到能对他一击必杀时再与他战斗。",
	"",
	"别匆忙，放慢速度。",
	"",
	"勇士，暗道已挖好，你可用它绕过魔龙。",
	"",
	"你需要用“地震卷轴”取出37楼仓库内的所有宝物。",
	"存放圣剑的房间的门坏了，你必须用铁锹破墙而入。",
	"谜题：在3点，密宝就会出现。",
	"",
	"“幸运金币”被藏在最底层，你只能用密宝才能飞达。",
	"巫师会用魔法攻击路过的人，在2个魔法警卫间通过会使你的生命减少一半。",
	"",
	"",
	"44楼被藏在异空间，你只能用密宝才能飞达。",
	"41楼事实上是左右对称的。",
	"如果要打败魔龙你需要 圣剑，圣盾，屠龙剑 或更高等级的装备。",
	"不破除49楼假魔王的封印魔法，你就绝对不可能打败它，封印魔法好象是“十”字魔法。",
	"",
	""
];

var traderWord = [
	"",
	"",
	"谢谢你救了我，为感谢你的帮助，我送给你1000金币。",
	"",
	"",
	"",
	"我有1把蓝钥匙，你出50个金币就卖给你。",
	"我有5把黄钥匙，你出50个金币就卖给你。",//7
	"",
	"",
	"",
	"",
	"我有1把红钥匙，你出800个金币就卖给你。",//12
	"",
	"",
	"我有1把蓝钥匙，你出200个金币就卖给你。",
	"",
	"",
	"",
	"",
	"",//20
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"我按100个金币1把的价格回收黄钥匙，你愿意出售吗？",
	"我有1把蓝钥匙，你出200个金币就卖给你。",//29
	"",
	"我有5把黄钥匙，你出1000个金币就卖给你。",
	"",
	"",
	"",
	"",
	"",
	"",
	"我有3把黄钥匙，你出200个金币就卖给你。",
	"我有3把蓝钥匙，你出2000个金币就卖给你。",
	"",
	"",
	"",
	"",//43
	"",
	"给我1000个金币，我就提升你生命2000点。",
	"",
	"我有地震卷轴，你出3000个金币就卖给你。",
	"",
	"",
	""
];

function talk(r,pos){//角色及其在地图数组中的位置
	switch(r){
		case 32:
			if(player.floor===2){//第二层有两个智慧老人
				if(pos===43){
					player.hearing = wiserWord[2][0];
				}
				else{
					player.hearing = wiserWord[2][1];
				}
			}
			else{
				player.hearing = wiserWord[player.floor];
			}
			player.hearing = "智慧老人：" + player.hearing;
			player.isTalking = 1;
			break;
		case 33:
			player.hearing = "商人：" + traderWord[player.floor];
			player.isTalkingToTrader = 1;
			break
		case 34:
			;
			player.isTalking = 1;
			break
		case 35:
			;
			player.isTalking = 1;
			break
		case 36://假公主
			player.hearing = "公主：......";
			player.isTalking = 1;
			break
	}
	if(!player.heard.npc[player.floor]){
		player.heard.npc[player.floor]=[player.hearing];
	}
	else{
		player.heard.npc[player.floor].push(player.hearing);
	}
	draw();
}

function buy(){
	player.isBuying = 1;
	draw();
}