var plateList = ['g1jvs', '1 6uv', '6 54ndu', 'm40 jat', 'f1jk u', 'bs 54nou', 'nya 15', 'b4ss u']

var pb = document.getElementById('pb');
for (var i=0; i<plateList.length; i++) {
  var newPlate = document.createElement('div');
  newPlate.innerHTML = '<div id="plate">' +plateList[i]+ '</div>';
  pb.appendChild(newPlate);
}

// var createCards = function() {
// 	var gameBoard = document.getElementById('game-board');
// 		for (var i=0; i<4; i++) {
// 		  var newCard = document.createElement('div');
// 		  newCard.innerHTML = '<div class="card"></div>';
// 		  gameBoard.appendChild(newCard);
//   }
// }
