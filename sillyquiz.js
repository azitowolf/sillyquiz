// ask the user the questions and store the answer

var ans1 = prompt("Who is the greatest kung fu fighter? a.Jackie Chan b.Bruce Lee c. Chuck Norris");
var ans2 = prompt("Who is the fairest of them all? a. Cinderella b. Snow White c. Eugene");
var ans3 = prompt("Who is the strongest? a. a bear b. a great white shark c. A puma");
var ans4 = prompt("Who is the sneakiest? a. cats b. Spiders c. snakes");
var ans5 = prompt("Who has the most junk in the proverbial trunk? a. fergie b. sasquatch c. alex zw");

var numcorrect = 0;

//set up the evaluation of how many answers are right. run a check for each possible state, 

if (ans1 ==="a"){
  numcorrect += 1;
}

if (ans2 === "c"){
  numcorrect +=1;
}

if (ans3 === "b"){
  numcorrect += 1;
}

if (ans4 === "a"){
  numcorrect += 1;
}

if (ans5 === "c"){
  numcorrect += 1;
}

/// display appropriate messaging

if (numcorrect === 0){
  alert("0 answers correct, you get no crowns. <br> Answers: Best Kungfu is Jackie Chan, fairest of them all is Eugene, the strongest is a great white, cats are te sneakiest ever, and alex zw has a bundle of junk in the trunk");
} else if (numcorrect === 1) {
  alert("1 answer correct.You get a bronze crown. answers: Best Kungfu is Jackie Chan, fairest of them all is Eugene, the strongest is a great white, cats are te sneakiest ever, and alex zw has a bundle of junk in the trunk");
} else if (numcorrect === 2 || numcorrect === 3 || numcorrect === 4) {
  alert("2-4 answers correct, You get a Silver Crown. answers: Best Kungfu is Jackie Chan, fairest of them all is Eugene, the strongest is a great white, cats are te sneakiest ever, and alex zw has a bundle of junk in the trunk");