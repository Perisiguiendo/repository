var POSSIBLE_WORDS=["today","window","computer","text","test","html","javascript","hangman","zte","library","update"];
var MAX_GUESSES = 7;
//quan ju bian liang
var word ="?";
var guesses="";
var guessCount = MAX_GUESSES;
function newGame() {
    //随机 选择单词
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word=POSSIBLE_WORDS[randomIndex];
    guessCount=MAX_GUESSES;
    guesses="";
    updatePage();
}
function guessLetter() {
    var input=document.getElementById("guess");
    var clue=document.getElementById("clue");
    var letter=input.value;
    if(guessCount==0||clue.innerHTML.indexOf("_")<0||guesses.indexOf(letter)>=0){
        return;//game over
    }
    guesses += letter;
    if(word.indexOf(letter)<0){
        guessCount--;
    }
    updatePage();
}
function updatePage() {
    var clueString="";
    for (var i=0;i<word.length;i++){
        var letter = word.charAt(i);
        if(guesses.indexOf(letter)>=0){
            clueString += letter+" ";
        }
        else {clueString +="_ ";}
    }
    var clue=document.getElementById("clue");
    clue.innerHTML=clueString;
    //显示猜测
    var guessArea =document.getElementById("guesses");
    if (guessCount==0){
        guessArea.innerHTML="你输了(灬ꈍ ꈍ灬)";
    }
    else if (clueString.indexOf("_")<0){
        guessArea.innerHTML="你赢了(*^▽^*))";
    }
    else {
        guessArea.innerHTML="猜过的字母:"+guesses;
    }
    //更新小人
    var image=document.getElementById("hangmanpic");
    image.src="hangman"+guessCount+".gif";
}
