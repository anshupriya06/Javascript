
let a = prompt("enter name")
console.log(a)
alert("this is my website .... don't try to hack it")

const favMovie = 'Stree';
let guess = prompt('Guess my favourite movie.');

while((guess!= favMovie) && (guess!= 'quit')){
    guess = prompt("Wrong guess. Please try again");
}

if(guess == favMovie){
    console.log("congrats!!");
}else{
    console.log("you quit!!");   
}