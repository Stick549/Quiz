class Question {

    constructor() {
      this.input = createInput("Name");
      this.input2 = createInput("Answer");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.q = createElement('h2');
      this.title = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.input2.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Quiz");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.input2.position(displayWidth/2 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("A: Brazil, B: US, C: China, D: India")
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        this.q.html("What country produces the most coffee?")
        this.q.position(displayWidth/2 - 70, displayHeight/4-80);
      });
    }
  }
  