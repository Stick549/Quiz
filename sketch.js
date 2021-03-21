var canvas, contestant, contestantCount, gameState, database, quiz, question;

function setup(){
  quiz = new Quiz()
  quiz.getState()
  quiz.start()
  canvas = createCanvas(850,400);
  database = firebase.database();
}


function draw(){
  background("pink");

  
}
