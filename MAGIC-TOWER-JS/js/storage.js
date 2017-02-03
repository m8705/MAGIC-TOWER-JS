/*负责游戏的存档管理*/

function replay(){//bug
	if(confirm("重玩不仅会让让游戏回到原点，而且会清除存储的档案，确定继续吗？")){
		localStorage.clear();
		location.reload(true);
	}
}

function saveData(){
	localStorage.player = JSON.stringify(player);
	localStorage.floor = JSON.stringify(floor);
	localStorage.role = JSON.stringify(role);
	localStorage.item = JSON.stringify(item);
	alertify.success("存档完毕！");
}

function loadData(){
	if(!localStorage.player){
		alertify.error("未发现存档！");
	}
	else{
		player = JSON.parse(localStorage.player);
		floor = JSON.parse(localStorage.floor);
		role = JSON.parse(localStorage.role);
		item = JSON.parse(localStorage.item);
		alertify.success("读档完毕！");
	}
}