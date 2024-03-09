function checkScore(){
    var userScore = Number(score.value)
    if (userScore >= 0 && userScore < 40){
        show.innerHTML = "F - Fail"
    }
}