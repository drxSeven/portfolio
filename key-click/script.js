var score = 0;
var keyPower = 1;

var keyCost = 15;
var keys = 0;

var stabCost = 30;
var stabs = 0;

function buyStabs() {
    if (score >= stabCost){
        score = score - stabCost;
        stabs++;

        document.getElementById("score").innerHTML = score;
        document.getElementById("stabCost").innerHTML = stabCost;
        document.getElementById("stabs").innerHTML = stabs;
        updateSpS();
    }
}

function buyKey() {
    if (score >= keyCost){
        score = score - keyCost;
        keys++;

        document.getElementById("score").innerHTML = score;
        document.getElementById("keyCost").innerHTML = keyCost;
        document.getElementById("keys").innerHTML = keys;
        updateSpS();
    }
}

function play() {
    var audio = document.getElementById("audio");
  }

function key_Click(amount){
    score = score + amount;
    document.getElementById("score").innerHTML = score;
    // audio.play();
}

function updateSpS(){
    sPs = keys + stabs * 2;
    document.getElementById("sPs").innerHTML = sPs; 
}

setInterval (function() {
    score = score + keys;
    score = score + stabs * 2;
    document.getElementById("score").innerHTML = score;

    document.title = score + " keyPoints";
}, 1000);