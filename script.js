var game = [[0,0,0],[0,0,0],[0,0,0]];
var vez = "x";
var vez2 = "o";

var div = document.getElementById("jogo");
div.addEventListener("click",listener);


function listener(event) {
	if(event.target.id[0] != 'c'){return}
	var i1 = event.target.id[2];
	var i2 = event.target.id[4];
	if(game[i1][i2] == 0){
		game[i1][i2] = vez;
		console.log(game);
		var f = event.target;
		var s = "imgs/"+vez+".jpg";
		colocaImg(f,s,200,200);
		vez = vez == "x" ? "o" : "x";
	}
}
if(win()){
	alert("FIM DE JOGO");
}
function win() {
	if(game[0][0] == game[0][1] && game[0][0] == game[0][2]){
		return game[0][0];
	}else if (game[1][0] == game[1][1] && game[1][0] == game[1][2]) {
		return game [1][0];
	}else if (game[2][0] == game[2][1] && game[2][0] == game[2][2]) {
		return game [2][0];		
	}else if (game[0][0] == game[1][0] && game[0][0] == game[2][0]) {
		return game [0][0];
	}else if (game[1][0] == game[1][1] && game[1][0] == game[1][2]) {
		return game [0][0];
	}else if (game[2][0] == game[2][1] && game[2][0] == game[2][2]) {
		return game [0][0];
	}else if (game[0][2] == game[1][1] && game[0][2] == game[2][0]) {
		return game [0][0];
	}else if (game[0][0] == game[1][1] && game[0][0] == game[2][2]) {
		return game [0][0];
	}
	}		

function colocaImg(father,src,h,w){
	var oImg = document.createElement("img");
	oImg.setAttribute('src', src);
	oImg.setAttribute('alt', 'na');
	oImg.setAttribute('height', h);
	oImg.setAttribute('width', w);
	father.appendChild(oImg);
}