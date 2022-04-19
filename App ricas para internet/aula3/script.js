let audio = document.getElementById("myVideo");
let meter = document.getElementById("meter");


function playAudio(){
    audio.play();
}
function pauseAudio(){
    audio.pause();
}
audio.onloadedmetadata = function(){
    console.log('audio.duration', audio.duration);
    meter.max = audio.duration;
}
function tempo(){
    meter.value = audio.currentTime;
}