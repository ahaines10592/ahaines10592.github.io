function luckySevens(){

var initialBet = document.getElementById("initialBet").value;
var money = 0;
var dice1 = 0;
var dice2 = 0;
var die = 0;
var rollCount = 0;
var firstCounter = 0;
var money = initialBet;
var moneyEarned = [initialBet];
var win = 4;
var loss = 1;
var maxEarned = 0;
	
do{
		
	rollCount++;
	die1 = Math.floor(Math.random() * 6) + 1;
	die2 = Math.floor(Math.random() * 6) + 1;	
	dice = dice1+dice2;

			
	if (dice == 7){
	money = money+win; // 
	var last_element = moneyEarned[moneyEarned.length -1]; 
	var last_updated = last_element + win; 
	moneyEarned.push(last_updated);

			
	}else {
	money--;
	Counter++;
				
	var last_element = moneyEarned[moneyEarned.length -1];
	var last_updated = last_element - loss;
	moneyEarned.push(last_updated);
	rollCount = rollCount++;
	}


	}while(money>0);
	var totalMax = 0;

	totalMax = Math.max.apply(Math, moneyEarned); 
	numRolls = moneyEarned.indexOf(totalMax); 
	if(numRolls<1){
	numRolls = 0;
		}

	document.getElementById("p1").innerHTML=("<center><br><br><table style=\"width: 100% height: 100%;\"><th colspan=\"2\"; class=\"th1\">Results</th><tr><th class=\"th2\">Starting Bet</th><th class=\"th2\">$" + initialBet + ".00</th></tr><tr><td>Total Rolls Before Going Broke</td><td>"+ rollTally +"</td></tr><tr><td>Highes Amount Won</td><td>"+totalMax+"</td></tr><tr><td>Roll Count at Highest Amount Held</td><td>"+ numRolls + "</td></tr></table></center>");
	document.getElementById("p2").innerHTML="Play Again";

}
