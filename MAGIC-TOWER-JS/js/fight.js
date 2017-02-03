/*负责游戏的对战行为*/

function fight(enm){//尝试与敌人对战
	var d;//damage
	var c;//get coin
	
	if(player.att > enm.def){//玩家可以攻击敌人
	
		if(enm.id===24){//只要玩家攻击大于150，即可秒杀双手剑士
			if(player.att>=150){
				player.coin += (player.item.indexOf(12)>=0)?110:55;
				return true;
			}
		}
		
		if( player.hp > (enm.att-player.def) ){//玩家可以抵抗攻击
			
			if(enm.id===8){
				if(player.item.indexOf(19)>=0){//有十字架，攻击力加倍
					player.att *= 2;
					d = (enm.att-player.def)<0?0:(enm.att-player.def);
					player.hp -= d;
					player.att /= 2;
				}
			}
			
			else if(enm.id===32){
				if(player.item.indexOf(21)>=0){//有屠龙剑，攻击力加倍
					player.att *= 2;
					d = (enm.att-player.def)<0?0:(enm.att-player.def);
					player.hp -= d;
					player.att /= 2;
				}
			}
			
			else{
				d = (enm.att-player.def)<0?0:(enm.att-player.def);
				player.hp -= d;
			}
				
				
			if(player.item.indexOf(12)>=0){//有幸运金币,获得的金币加倍
				c = (enm.coin*2);
				player.coin += c;
			}
			else{
				c = enm.coin;
				player.coin += c;
			}
			
			return true;
		}
		else{//血量不够,无法攻击
			return false;
		}
	}
	else{//攻击不够,无法攻击
		return false;
	}
}

function getFightInfo(enm){//查看怪物书时，用来获取与敌人对战的信息
	var d;//damage
	var c;//get coin
	
	if(player.att > enm.def){//玩家可以攻击敌人
	
		if(enm.id===24){//只要玩家攻击大于150，即可秒杀双手剑士
			if(player.att>=150){
				return {
					name:enm.name,
					hp:enm.hp,
					att:enm.att,
					def:enm.def,
					damage:0,
					coin:(player.item.indexOf(12)>=0)?110:55
				};
			}
		}
		
		if(player.hp > (enm.att-player.def)){//玩家可以抵抗攻击
			
			if(enm.id===8){
				if(player.item.indexOf(19)>=0){//有十字架，攻击力加倍
					d = (enm.att-player.def)<0?0:(enm.att-player.def);
				}
			}
			
			else if(enm.id===32){
				if(player.item.indexOf(21)>=0){//有屠龙剑，攻击力加倍
					d = (enm.att-player.def)<0?0:(enm.att-player.def);
				}
			}
			
			else{
				d = (enm.att-player.def)<0?0:(enm.att-player.def);
			}
				
				
			if(player.item.indexOf(12)>=0){//有幸运金币,获得的金币加倍
				c = (enm.coin*2);
			}
			else{
				c = enm.coin;
			}
			
			return {
				name:enm.name,
				hp:enm.hp,
				att:enm.att,
				def:enm.def,
				damage:d,
				coin:c
			};
		}
		else{//血量不够,无法攻击
			return {
				name:enm.name,
				hp:enm.hp,
				att:enm.att,
				def:enm.def
			};
		}
	}
	else{//攻击不够,无法攻击
		return {
			name:enm.name,
			hp:enm.hp,
			att:enm.att,
			def:enm.def
		};
	}
}