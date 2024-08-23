
let count = 0;
let btn = document.getElementById("btn");
let disp = document.getElementById("display")


$(document).ready(function() {

  
  //  playMySong("audio/Waitingsoundeffect.mp3");


});

btn.onclick = function () {
    count++;
    if ( count === 1){
        playSound();
    }
}


$("#btn").click(function(){
    setTimeout(function () {
        $("h3").addClass("showanswer");
    }, 1000);
 
   
});




function playSound() {
    var soundEffect = new Audio("audio/Joke Sound Effect (Ba dum tss!).mp3" );
    var drumRoll = new Audio("audio/Drumwaitingsoundeffect.mp3" );


    setTimeout(function () {
        soundEffect.play();
    }, 3000);
}

function playMySong(url)
{
    var audio = document.createElement('audio');
    audio.hidden=true;
    audio.src= url;
    audio.autostart=true;
    audio.autoplay= true;
    audio.loop = true;
    document.body.appendChild(audio);
}


