class Form {
constructor() {
}

display (){
var tittle =createElement('h2');
tittle.html("car racing game");
tittle.position(130,0);

var input = createInput("name");
var button = createButton("play");

var greeting = createElement('h3');

input.position(130,160);
button.position(250,200);

button.mousePressed(function(){
input.hide();
button.hide();
var name = input.value();
playerCount+=  1;
player.update(name);
player.updatecount(playerCount);

greeting.html("hello"+name);
greeting.position(130,160);
  
})

}

}














