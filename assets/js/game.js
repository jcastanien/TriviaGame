
//start screen click start to play

//timer appears and starts on click of start button. (30 seconds)
//(number of questions) questions appear under with radio button options. (you can only provide one answer per questions)

//when timer hits zeros all done screen apears showing correct answers, incorrect answer, and unanswered.

window.onload = function() {

  var correctanswers = 0;
  var incorrectanswers = 0;
  var unanswered = 0;
  var time = 30;
  var intervalId;

   function start() {
   intervalId = setInterval(count, 1000);
 }

$("#startbutton").on("click", function(){
  start();
  $("#startbutton").hide();
  $("#display").html("00:30");
  gameListQuestions();
});

   function start() {
   intervalId = setInterval(count, 1000);
 }

  function stop() {

   console.log("stopping");
   if ($('.Jurassic_park').is(':checked')){
    correctanswers++
    console.log(correctanswers + "question 1");

} else{
    incorrectanswers++
    console.log(incorrectanswers + "question 1")
};

   if ($('.The_lion_king').is(':checked')){
    correctanswers++
    console.log(correctanswers + "question 2")

} else{
    incorrectanswers++
    console.log(incorrectanswers + "question 2")
};

   if ($('.Toy_Story').is(':checked')){
    correctanswers++
    console.log(correctanswers + "question 3")

} else{
    incorrectanswers++
    console.log(incorrectanswers + "question 3")
};

console.log(incorrectanswers);
console.log(correctanswers);

   clearInterval(intervalId);
   $("#container").empty();

var statement1 = $("<div>");
statement1.addClass("questionclass");
statement1.text("Times up!");
$("#container").append(statement1);

var statement2 = $("<div>");
statement2.addClass("howdidyoudo");
statement2.text("Lets see how you did!");
$("#container").append(statement2);

var statement3 = $("<div>");
statement3.addClass("correct");
statement3.text("You got " + correctanswers + " correct!");
$("#container").append(statement3);

var statement4 = $("<div>");
statement4.addClass("incorrect");
statement4.text("You got " + incorrectanswers + " incorrect!");
$("#container").append(statement4);
}

 function count() {
   time--;
   var converted = timeConverter(time);
   $("#display").html(converted);

   if(time === 0)
    stop();
 }

 function timeConverter(t) {
   var minutes = Math.floor(t / 60);
   var seconds = t - (minutes * 60);

   if (seconds < 10) {
     seconds = "0" + seconds;
   }

   if (minutes === 0) {
     minutes = "00";
   }
   else if (minutes < 10) {
     minutes = "0" + minutes;
   }

   return minutes + ":" + seconds;
 }

 function gameListQuestions (){
  
  var questionList = ["What was the top grossing film of 1993?", "What was the top grossing film of 1994?", "What was the top grossing film of 1995?"]
  var answer1 = ["The_Fugitive", "Mrs_doubtfire", "Jurassic_park", "The Firm"]
  var answer2 = ["Forrest_Gump", "The_lion_king", "True Lies", "The_mask"]
  var answer3 = ["Toy_Story", "Batman_Forever", "Apollo_13", "Pocahontas"]

function answerArray (inputvar){
  for (var i = 0; i < inputvar.length; i++) {
  var lineOne =inputvar[i]
  var radioBtn = inputvar[i]
  var newdiv = $("<div>");
  var radioBtn = $('<input type="radio"/>');
  radioBtn.attr("name", inputvar);
  radioBtn.attr("class", inputvar[i])
  newdiv.addClass("divclass");
  radioBtn.addClass('radioclass');
  newdiv.text(lineOne);
  $("#container").append(newdiv);
  newdiv.append(radioBtn);
  }
}

function questionArray (inputvar){

  var newdiv = $("<div>");
  newdiv.addClass("openclass");
  newdiv.text(inputvar);
  $("#container").append(newdiv);
  }

questionArray(questionList[0]);
answerArray(answer1);
questionArray(questionList[1]);
answerArray(answer2);
questionArray(questionList[2]);
answerArray(answer3);
}

};
