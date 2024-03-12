var songFailure=new Audio('audio/Aye-Le-O-Ibosi-O.mp3')
var songPassE= new Audio ('audio/Apostle-Would-Hear-Of-This.mp3')
var soundPassD= new Audio('audio/70-years-old-man.mp3')
var soundCredit= new Audio('audio/This-is-playing.mp3')
var songB= new Audio('audio/E-shock-you-broda-shaggi.mp3')
var songA= new Audio('audio/No-be-juju-be-that.mp3')
var soundMumu= new Audio('audio/mumu-2-much.mp3')




function checkScore(){
    var userScore = Number(score.value)
    if (userScore >= 0 && userScore < 40){
        show.innerHTML = "F - Fail"
        songFailure.play()
    } else if(userScore >= 40 && userScore < 46){
        show.innerHTML= 'E - Pass'
        songPassE.play()
    } else if(userScore >= 46 && userScore < 50){
        show.innerHTML= 'D - Pass'
        soundPassD.play()
    } else if(userScore >= 50 && userScore < 60) {
        show.innerHTML= 'C - Credit'
        soundCredit.play()
    } else if(userScore >= 60 && userScore < 70) {
        show.innerHTML= 'B - Very Good'
        songB.play()
    } else if(userScore >= 70 && userScore <= 100) {
        show.innerHTML= 'A - Excellent'
        songA.play()
    } else {
        show.innerHTML= 'INVALID INPUT'
        soundMumu.play()
    }
}