class Quiz{
    constructor(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
        })
    
    }

    update(state){
        database.ref('/').update({
        gameState: state
        });
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
          var playerCountRef = await database.ref('contestantCount').once("value");
          if(playerCountRef.exists()){
                question = new Question
          }
        quiz = new Quiz()
        quiz.display();
        }
    }
}