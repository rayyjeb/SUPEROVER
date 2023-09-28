
// strike
var strikebutton = document.querySelector("#strike");
// reset
var resetbutton = document.querySelector("#reset");
// TEAM SCORE
var team1score_tag = document.getElementById("score-team1")
var team2score_tag = document.getElementById("score-team2")
// WICKET
var team1wicket_tag = document.getElementById("wicket-team1")
var team2wicket_tag = document.getElementById("wicket-team2")

// AUDIO VARIABLES
var strikeAudio = new Audio ("https://i1.faceprep.in/prograd-junior/bat%2Bhit%2Bball.mp3")
var gameOverAudio = new Audio ("https://i1.faceprep.in/prograd-junior/Ball%2BHit%2BCheer.mp3")

var team1score = 0
var team2score = 0
var team1Wickets = 0
var team2Wickets = 0
var team1BallsFaced = 0
var team2BallsFaced = 0
var turn = 1

var possibleOutcomes = [0,1,2,3,4,6,"W"]

// STRIKE ACTION
strikebutton.addEventListener("click",strikeButtonclicked);

    function strikeButtonclicked(){
    // Audio Play
    strikeAudio.pause() //Pause the previous playing audio
    strikeAudio.currentTime = 0; //bring the time to 0
    strikeAudio.play(); 
    
    // Choosing a Random Value
    
    // var randomness = math.random(); is generating a random decimal number between 0 and 1 
    var randomness = Math.random();
    // comment:- random1 will generate vlaues from 0 to less than the length of array-possibleOutcomes here 0 to 7
    
    var random1 = (randomness*possibleOutcomes.length);
    var randomIndex = Math.floor (random1);
    
    var randomValue = possibleOutcomes[randomIndex];
    
    
    
    
    // <==pakistan batting=>

    if(turn==2){
        team2BallsFaced++
        
        var ball2= document.querySelector(`#team2-superover div:nth-child(${team2BallsFaced})`)
    
        ball2.innerHTML=randomValue;
    
        if (randomValue=='W'){
            team2Wickets++;
        }else {
            team2score += randomValue;
        }
    
        if (team2score > team1score || team2Wickets == 2 || team2BallsFaced==6){
            turn=3;
            setTimeout(()=>{
            gameOver();
        },1000)
    }
    updateScore();
}
    // INDIA BATTING
    if (turn==1){
        team1BallsFaced++;
        
        var ball = document.querySelector(`#team1-superover div:nth-child(${team1BallsFaced})`)

        // <--- ` give tilde to write variable inside a string------>
        ball.innerHTML= randomValue;
        
        
        // <-----If random element is wicket then increase wicket count by 1 or just add that random value to total score of team 1 ----->


        if (randomValue=='W'){
            team1Wickets++;
            // <<----if it is a wicket the wicket bar should increase its number ------->
        }else{

            // <-----if any other number comes then team score increases from previous number---->
            team1score = team1score + randomValue
        }
        // --------<<max wicket =2>----
        if (team1BallsFaced==6 || team1Wickets == 2){
            turn=2;

        }
        // << called updatescore() since it's provided below --->  
        updateScore()
    }
};



// function
function updateScore(){
    team2score_tag.innerHTML = team2score
    team2wicket_tag.innerHTML= team2Wickets
    team1score_tag.innerHTML = team1score
    team1wicket_tag.innerHTML= team1Wickets
}

function gameOver(){
    if (team1score > team2score){
        alert("INDIA WINS");
    gameOverAudio.pause() //Pause the previous playing audio
    gameOverAudio.currentTime = 0; //bring the time to 0
    gameOverAudio.play(); 


    }else if (team1score < team2score){
        alert ("PAKISTAN WINS")
        gameOverAudio.pause() //Pause the previous playing audio
    gameOverAudio.currentTime = 0; //bring the time to 0
    gameOverAudio.play(); 
    } else {
        alert ("IT'S A TIE");
    }

    document.querySelectorAll(".ball").forEach(kalvium=>{
    if(kalvium.innerHTML==""){
        kalvium.innerHTML = "X"
        kalvium.style.backgroundColor = "Red"
        kalvium.style.color = "white"
    }

    })
}
resetbutton.addEventListener("click", resetFunction);
function resetFunction (){
    window.location.reload()
}