var readlineSync = require('readline-sync')
var userName = readlineSync.question("What is your name? ");

var list =
[{ques:"How many medals has India won at tokyo Olympics 2020?",
a:"a:5",
b:"b:7",
c:"c:9",
d:"d:8",
correctAnswer:"b"},
 
{ques:"Who won the first olympic medal for India in 2020? ",
a:"a:Neeraj Chopra",
b:"b:P.V Sindhu",
c:"c:Sushil Kumar",
d:"d:Abhinav Bindra",
correctAnswer:"a"},

{ques:"At what rank India finished its position in tokyo olympics 2020?",
a:"a:45",
b:"b:50",
c:"c:48",
d:"d:47",
correctAnswer:"c"},

{ques:"Who will be the flag bearer of India in closing ceremony of the Tokyo olympics 2020?",
a:"a:Neeraj Chopra",
b:"b:Bajrang Punia",
c:"c:Vinesh Phogat",
d:"d:Mary Kom",
correctAnswer:"b"},

{ques:"Which sports is returning in Tokyo olympics 2020?",
a:"a:Judo",
b:"b:Fencing",
c:"c:Golf",
d:"d:Baseball",
correctAnswer:"d"}]

var score = 0;
function play(correctAnswer,answer){

  if (answer === correctAnswer){
    console.log("Right!")
    score++
  } 
  else {
    console.log("Wrong!")
  
}
console.log("\n")
}

for (var i=0; i<list.length; i++) {
    console.log(list[i].ques);
    console.log(list[i].a);
    console.log(list[i].b);
    console.log(list[i].c);
    console.log(list[i].d);
  
    var answer = readlineSync.question("Please Enter Your Answer: ");
    play (list[i].correctAnswer,answer);
  }
  
  console.log("Final score is", score);
  
  