var King = {
	classes: "King",
	char: "K",
	points: 5,
}
var Queen = {
	classes: "Queen",
	char: "Q",
	points: 5,
}

var Cavalry = {
	classes: "Cavalry",
	char: "C",
	points: 5,
}
var Assassin = {
	classes: "Assassin",
	char: "A",
	points: 5,
}
var Sniper = {
	classes: "Sniper",
	char: "S",
	points: 35,
}
var Pawn = {
	classes: "Pawn",
	char: "P",
	points: 1,
}
var Rebel = {
	classes: "Rebel",
	char: "R",
	points: 1,
}
var Bomber = {
	classes: "Bomber",
	char: "B",
	points: 0,
}


function countScore(tes, index) {
	console.log(index);
	var nameInput = document.getElementById('myInput'+index);
	index++;
	console.log(index);
	var nameInput2 = document.getElementById('myInput'+index);
	var countPawn = 0;
    var countPawn2 = 0;
    var score1 = 0;
	var score2 = 0;
	var chars = ["K","Q","C","P","S","C","B","A"]
	var x = chars.indexOf(chars)
	for (var i = 0; i < nameInput.value.length; i++) {
		if(nameInput.value[i] == "B" ){
			if(nameInput2.length >= 3&& x>=0){
				Bomber.points = 200
				score1 += Bomber.points
			} else {
				Bomber.points = -1000
				score2 += Bomber.points
			}
		}
		if (nameInput.value[i] == "K" || nameInput.value[i] == "Q" ) {
			King.points = 15
			Queen.points = 15
            var royaltyPoints = King.points + Queen.points
			score1 += royaltyPoints
			console.log(royaltyPoints)
		} 
		else if(nameInput.value[i] == "S"){
			score1 += Sniper.points
			console.log(Sniper.points)
		} 
		else if (nameInput.value == "PPPP") {
            Pawn.points = 40
			score1 += Pawn.points
			console.log(Pawn.points)
		} else if (nameInput.value[i] == "A" && nameInput.value[i] !== "K" && nameInput.value[i] !== "Q" && 
		nameInput.value[i] !== "C" && nameInput.value[i] !== "B" && nameInput.value[i] !== "R" && nameInput.value[i] !== "P" 
		&&nameInput.value[i] !== "S") {
            Assassin.points = 35.5
            score1 += Assassin.points
			console.log(Assassin.points)
		} else if(nameInput.value[i] == "P"){
			score1 += Pawn.points
		}

		for (var a = 0; a < nameInput.value.length; a++) {
			if (nameInput.value[a] == "P") {
				countPawn++;
			}
			if (nameInput2.value[a] == "P") {
				countPawn2++;
			}
			if (nameInput.value[a] == "C") {
                Cavalry.points = 10 * countPawn2
				score1 += Cavalry.points
				console.log(Cavalry.points)
			}
			 else if (countPawn >= 2 && nameInput.value[a] == "R") {
				if (nameInput2.value[a] == "K" || nameInput2.value[a] == "Q") {
					if(x<0){
                    Rebel.points = 1000
                    score1 += Rebel.points
					console.log(Rebel.points)
					}
				}

			}

		}

	}
	for (var j = 0; j < nameInput2.value.length; j++) {
		if(nameInput2.value[j] == "B" ){
			if(nameInput.length >= 3&& x>0){
				Bomber.points = 200
				score2 += Bomber.points
			} else {
				Bomber.points = -1000
				score1 += Bomber.points
			}
		}
		if (nameInput2.value[j] == "K" || nameInput2.value[j] == "Q") {
			King.points = 15
			Queen.points = 15
            var royaltyPoints = King.points + Queen.points
            score2 += royaltyPoints
			console.log(royaltyPoints)
		}else if(nameInput2.value[j] == "S"){
			score2 += Sniper.points
		}  else if (nameInput2.value == "PPPP") {
            Pawn.points = 40
            score2 += Pawn.points
			console.log(Pawn.points)
		} else if (nameInput2.value[j] == "A" && nameInput2.value[j] !== "K" && nameInput2.value[j] !== "Q" && nameInput2.value[j] !== "C" &&nameInput2.value[j] !== "B"&& nameInput2.value[j] !== "R" &&nameInput2.value[j] !== "P" &&nameInput2.value[j] !== "S") {
            Assassin.points = 35.5
            score2 += Assassin.points
			console.log(Assassin.points)
		}else if(nameInput2.value[j] == "P"){
			score2 += Pawn.points
		}
		for (var b = 0; b < nameInput2.value.length; b++) {
			if (nameInput.value[b] == "P") {
				countPawn++;
			} else if (nameInput2.value[b] == "P") {
				countPawn2++;
			}
			if (nameInput2.value[b] == "C") {
                Cavalry.points = 10 * countPawn
                score2 += Cavalry.points
				console.log(Cavalry.points)
			} else if (countPawn2 >= 2 && nameInput2.value[b] == "R") {
				if (nameInput.value[b] == "K" || nameInput.value[b] == "Q") {
				if(x<0){
                    Rebel.points = 1000
                    score2 += Rebel.points
					console.log(Rebel.points)
				 }
				}

			}

		}

	}
    if(score1> score2){
        document.getElementById("result"+index).value = "P1 WIN"  
    } else if(score2 > score1) {
        document.getElementById("result"+index).value = "P2 WIN"     
    } else if(score1 == score2){
        document.getElementById("result"+index).value = "DRAW"
    }
	console.log(score1)
	console.log(score2)
}
function reset(){
    location.reload()
}

$(document).ready(function() {
	jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 1000  
  });

function myFunction(index) {
	var x = document.getElementById("myInput"+index);
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}