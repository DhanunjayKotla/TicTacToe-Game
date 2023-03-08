var playerTurn = "";
var winarr = [['1','2','3'], ['4','5','6'], ['7','8','9'], ['1','4','7'], ['2','5','8'], ['3','6','9'], ['1','5','9'], ['3','5','7']];
var player1 = []
var player2 = []
var gamebox = document.querySelector(".gamebox");
var rgv1 = document.querySelector(".aab");
var rgv2 = document.querySelector(".aacb");
var overdis = document.querySelector(".a"); 
var dispwinner = document.querySelector(".aaba p");
var platurn = document.querySelector(".fa p");
var xscoring = document.querySelector(".bb p");
var yscoring = document.querySelector(".db p");
var tiescoring = document.querySelector(".cb p");
var xscore = 0;
var yscore = 0;
var tiescore = 0;

const arr = document.querySelectorAll(".gamebox div");
arr.forEach((a) => {
    a.onclick = (event) => {
        playerTurn = playerTurn==="X"?"O":"X";

        if(playerTurn === "X"){
            event.target.style.color = "rgb(64,224,208)"
        } else{
            event.target.style.color = "rgb(255,165,0)"
        }

        event.target.innerHTML = playerTurn;

        platurn.innerHTML = playerTurn==="X"?"O":"X";

        var p = playerTurn==="X"?player1:player2;
        p.push(event.target.id)

        event.target.style.pointerEvents = "none"

        checkWin(playerTurn); 

    }
})

function checkWin(w){
    var hey = w==="X"?player1:player2;
    winarr.forEach(x => {
        if(x.every(val => hey.includes(val))){
            dispwinner.innerHTML = w==="X"?"X":"O";

            if(w==="X"){
                rgv1.style.color = "rgb(64,224,208)"
                rgv2.style.backgroundColor = "rgb(255,165,0)"
                xscore++;
                xscoring.innerHTML = xscore;
            } else if(w === "O"){
                rgv1.style.color = "rgb(255,165,0)"
                rgv2.style.backgroundColor = "rgb(64,224,208)"
                yscore++;
                yscoring.innerHTML = yscore;
            }
            overdis.style.display = "flex";
            hey = 0;
            return;
        }
    })
    if((player1.length + player2.length) === 9 && hey !== 0){
        rgv1.style.color = "rgb(248,248,255)"
        dispwinner.innerHTML = "No one";
        overdis.style.display = "flex";
        tiescore++;
        tiescoring.innerHTML = tiescore;
    }
}

document.querySelector(".aacb").onclick = nextround;
function nextround(){
    overdis.style.display = "none";
    arr.forEach((a) => {
        a.innerHTML = "";
        a.style.pointerEvents = "auto";
    });
    player1 = [];
    player2 = [];
    playerTurn = "";
}
document.querySelector(".aaca").onclick = () => {
    xscore = 0;yscore = 0;tiescore = 0;
    xscoring.innerHTML = xscore;
    yscoring.innerHTML = yscore;
    tiescoring.innerHTML = tiescore;
    nextround();
}

