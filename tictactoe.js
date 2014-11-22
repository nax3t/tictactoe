// Initiliaze variables
var turn;
var xo = ["X", "O", ""],
		a1D = document.getElementById("a1"),
		a2D = document.getElementById("a2"),
		a3D = document.getElementById("a3"),
		b1D = document.getElementById("b1"),
		b2D = document.getElementById("b2"),
		b3D = document.getElementById("b3"),
		c1D = document.getElementById("c1"),
		c2D = document.getElementById("c2"),
		c3D = document.getElementById("c3"),
		turnCounter = 1,
		cellVars = [a1D, a2D, a3D, b1D, b2D, b3D, c1D, c2D, c3D];

// Switch to next player
switchTurn = function() {
	if (turnCounter % 2 === 0) {
		turn = "X";
	} else {
			turn = "O";
		}
}



// A - First Square Click
document.getElementById("a1").onclick = function() {
	turnCounter++;
	switchTurn();
		if (a1D.innerHTML === "" && turn === "X") {
	a1D.innerHTML = xo[0];
		} else if (a1D.innerHTML === "" && turn === "O") {
				a1D.innerHTML = xo[1];
		}
}

// A - Second Square Click
document.getElementById("a2").onclick = function() {
	turnCounter++;
	switchTurn();
	console.log(turnCounter);
		if (a2D.innerHTML === "" && turn === "X") {
	a2D.innerHTML = xo[0];
		} else if (a2D.innerHTML === "" && turn === "O") {
				a2D.innerHTML = xo[1];
		}
}

// A - Third Square Click
document.getElementById("a3").onclick = function() {
	turnCounter++;
	switchTurn();
	console.log(turnCounter);
		if (a3D.innerHTML === "" && turn === "X") {
	a3D.innerHTML = xo[0];
		} else if (a3D.innerHTML === "" && turn === "O") {
				a3D.innerHTML = xo[1];
		}
}

// B - First Square Click
document.getElementById("b1").onclick = function() {
	turnCounter++;
	switchTurn();
	console.log(turnCounter);
		if (b1D.innerHTML === "" && turn === "X") {
	b1D.innerHTML = xo[0];
		} else if (b1D.innerHTML === "" && turn === "O") {
				b1D.innerHTML = xo[1];
		}
}

// B - Second Square Click
document.getElementById("b2").onclick = function() {
	turnCounter++;
	switchTurn();
	console.log(turnCounter);
		if (b2D.innerHTML === "" && turn === "X") {
	b2D.innerHTML = xo[0];
		} else if (b2D.innerHTML === "" && turn === "O") {
				b2D.innerHTML = xo[1];
		}
}

// B - Third Square Click
document.getElementById("b3").onclick = function() {
	turnCounter++;
	switchTurn();
	console.log(turnCounter);
		if (b3D.innerHTML === "" && turn === "X") {
	b3D.innerHTML = xo[0];
		} else if (b3D.innerHTML === "" && turn === "O") {
				b3D.innerHTML = xo[1];
		}
}

// c - First Square Click
document.getElementById("c1").onclick = function() {
	turnCounter++;
	switchTurn();
	console.log(turnCounter);
		if (c1D.innerHTML === "" && turn === "X") {
	c1D.innerHTML = xo[0];
		} else if (c1D.innerHTML === "" && turn === "O") {
				c1D.innerHTML = xo[1];
		}
}

// C - Second Square Click
document.getElementById("c2").onclick = function() {
	turnCounter++;
	switchTurn();
	console.log(turnCounter);
		if (c2D.innerHTML === "" && turn === "X") {
	c2D.innerHTML = xo[0];
		} else if (c2D.innerHTML === "" && turn === "O") {
				c2D.innerHTML = xo[1];
		}
}

// C - Third Square Click
document.getElementById("c3").onclick = function() {
	turnCounter++;
	switchTurn();
	console.log(turnCounter);
		if (c3D.innerHTML === "" && turn === "X") {
	c3D.innerHTML = xo[0];
		} else if (c3D.innerHTML === "" && turn === "O") {
				c3D.innerHTML = xo[1];
		}
}

// Reset Button Click
document.getElementById("reset").onclick = function() {
	for (i=0; i<=8; i++) {
		cellVars[i].innerHTML = xo[2];
	}
}



// // Test loop

// // Assign Square Clicks
// var cellIds = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
// for (var i=0, length = cellIds.length; i<length-1; i++) {
// 	document.getElementById(cellIds[i]).onclick = function() {
// 		turnCounter++;
// 		switchTurn();
// 		console.log(turnCounter);
// 			if (cellVars[i].innerHTML === "" && turn === "X") {
// 		cellVars[i].innerHTML = xo[0];
// 			} else if (cellVars[i].innerHTML === "" && turn === "O") {
// 					cellVars[i].innerHTML = xo[1];
// 			}
// 	}
// }
