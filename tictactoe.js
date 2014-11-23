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
		turnCounter = 0,
		cellVars = [a1D, a2D, a3D, b1D, b2D, b3D, c1D, c2D, c3D];

// Switch to next player
switchTurn = function() {
	turnCounter = turnCounter ^ 1;
	if (turnCounter % 2 === 0) {
		turn = "X";
	} else {
			turn = "O";
		}
}

// A - First Square Click
document.getElementById("a1").onclick = function() {
	switchTurn();
		if (a1D.innerHTML === "" && turn === "X") {
	a1D.innerHTML = xo[0];
		} else if (a1D.innerHTML === "" && turn === "O") {
				a1D.innerHTML = xo[1];
		}
	checkWinner();
}

// A - Second Square Click
document.getElementById("a2").onclick = function() {
	switchTurn();
		if (a2D.innerHTML === "" && turn === "X") {
	a2D.innerHTML = xo[0];
		} else if (a2D.innerHTML === "" && turn === "O") {
				a2D.innerHTML = xo[1];
		}
	checkWinner();
}

// A - Third Square Click
document.getElementById("a3").onclick = function() {
	switchTurn();
		if (a3D.innerHTML === "" && turn === "X") {
	a3D.innerHTML = xo[0];
		} else if (a3D.innerHTML === "" && turn === "O") {
				a3D.innerHTML = xo[1];
		}
	checkWinner();
}

// B - First Square Click
document.getElementById("b1").onclick = function() {
	switchTurn();
		if (b1D.innerHTML === "" && turn === "X") {
	b1D.innerHTML = xo[0];
		} else if (b1D.innerHTML === "" && turn === "O") {
				b1D.innerHTML = xo[1];
		}
	checkWinner();
}

// B - Second Square Click
document.getElementById("b2").onclick = function() {
	switchTurn();
		if (b2D.innerHTML === "" && turn === "X") {
	b2D.innerHTML = xo[0];
		} else if (b2D.innerHTML === "" && turn === "O") {
				b2D.innerHTML = xo[1];
		}
	checkWinner();
}

// B - Third Square Click
document.getElementById("b3").onclick = function() {
	switchTurn();
		if (b3D.innerHTML === "" && turn === "X") {
	b3D.innerHTML = xo[0];
		} else if (b3D.innerHTML === "" && turn === "O") {
				b3D.innerHTML = xo[1];
		}
	checkWinner();
}

// c - First Square Click
document.getElementById("c1").onclick = function() {
	switchTurn();
		if (c1D.innerHTML === "" && turn === "X") {
	c1D.innerHTML = xo[0];
		} else if (c1D.innerHTML === "" && turn === "O") {
				c1D.innerHTML = xo[1];
		}
	checkWinner();
}

// C - Second Square Click
document.getElementById("c2").onclick = function() {
	switchTurn();
		if (c2D.innerHTML === "" && turn === "X") {
	c2D.innerHTML = xo[0];
		} else if (c2D.innerHTML === "" && turn === "O") {
				c2D.innerHTML = xo[1];
		}
	checkWinner();
}

// C - Third Square Click
document.getElementById("c3").onclick = function() {
	switchTurn();
		if (c3D.innerHTML === "" && turn === "X") {
	c3D.innerHTML = xo[0];
		} else if (c3D.innerHTML === "" && turn === "O") {
				c3D.innerHTML = xo[1];
		}
	checkWinner();
}

// Reset Button Click
var resetFunction = function() {
	for (i=0; i<=8; i++) {
			cellVars[i].innerHTML = xo[2];
	}
}

document.getElementById("reset").onclick = function() {
	resetFunction();
}

// Check for winner
var checkWinner = function() {
	if (a1D.innerHTML === "X" && a1D.innerHTML === a2D.innerHTML && a2D.innerHTML === a3D.innerHTML || 
		b1D.innerHTML === "X" && b1D.innerHTML === b2D.innerHTML && b2D.innerHTML === b3D.innerHTML ||
		c1D.innerHTML === "X" && c1D.innerHTML === c2D.innerHTML && c2D.innerHTML === c3D.innerHTML ||
		a1D.innerHTML === "X" && a1D.innerHTML === b1D.innerHTML && b1D.innerHTML === c1D.innerHTML ||
		a2D.innerHTML === "X" && a2D.innerHTML === b2D.innerHTML && b2D.innerHTML === c2D.innerHTML ||
		a3D.innerHTML === "X" && a3D.innerHTML === b3D.innerHTML && b3D.innerHTML === c3D.innerHTML ||
		a1D.innerHTML === "X" && a1D.innerHTML === b2D.innerHTML && b2D.innerHTML === c3D.innerHTML ||
		a3D.innerHTML === "X" && a3D.innerHTML === b2D.innerHTML && b2D.innerHTML === c1D.innerHTML) {	
		alert("Player 'X' is the winner!");
		resetFunction();
	} else if (a1D.innerHTML === "O" && a1D.innerHTML === a2D.innerHTML && a2D.innerHTML === a3D.innerHTML || 
		b1D.innerHTML === "O" && b1D.innerHTML === b2D.innerHTML && b2D.innerHTML === b3D.innerHTML ||
		c1D.innerHTML === "O" && c1D.innerHTML === c2D.innerHTML && c2D.innerHTML === c3D.innerHTML ||
		a1D.innerHTML === "O" && a1D.innerHTML === b1D.innerHTML && b1D.innerHTML === c1D.innerHTML ||
		a2D.innerHTML === "O" && a2D.innerHTML === b2D.innerHTML && b2D.innerHTML === c2D.innerHTML ||
		a3D.innerHTML === "O" && a3D.innerHTML === b3D.innerHTML && b3D.innerHTML === c3D.innerHTML ||
		a1D.innerHTML === "O" && a1D.innerHTML === b2D.innerHTML && b2D.innerHTML === c3D.innerHTML ||
		a3D.innerHTML === "O" && a3D.innerHTML === b2D.innerHTML && b2D.innerHTML === c1D.innerHTML) {	
		alert("Player 'O' is the winner!");
		resetFunction();
	}
};