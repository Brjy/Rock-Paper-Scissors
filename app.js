let userScore_span = document.getElementById("user-score")
let compScore_span = document.getElementById("comp-score")
let userScore=0
let compScore=0
let message = document.getElementById("message")
let winner = document.getElementById("winner")
let rock_icon = document.getElementById("rock")
let paper_icon = document.getElementById("paper")
let scissors_icon = document.getElementById("scissors")

rock_icon.addEventListener('click', function(){
choice("rock")})
paper_icon.addEventListener('click',function(){
    choice("paper")})
scissors_icon.addEventListener('click',function(){
    choice("scissors")} )

function choice(userChoice){
    const compChoice = getCompChoice()
    switch(userChoice + compChoice){
        case"rockscissors":
        case"paperrock":
        case"scissorspaper":
        youWin()
        break
        case"rockpaper":
        case"paperscissors":
        case"scissorsrock":
        youLose()
        break
        case"rockrock":
        case"paperpaper":
        case"scissorsscissors":
       draw()
    }
    message.textContent = "User: "+userChoice+" VS "+"Comp: "+compChoice
}
function getCompChoice(){
    let hands = ["rock","paper","scissors"]
    let random = Math.floor(Math.random()*3)
    return hands[random]
}

function youWin(){
    userScore++
    winner.textContent="YOU WIN!"
    winner.style.color="#43a047"
    userScore_span.textContent=userScore
}
function youLose(){
    compScore++
    winner.textContent="YOU LOSE!"
    winner.style.color="#f44336"
    compScore_span.textContent=compScore
}
function draw(){
    winner.style.color="#fff"
    winner.textContent="DRAW"
}