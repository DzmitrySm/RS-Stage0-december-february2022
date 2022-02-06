
 const buttonSound = document.querySelector('.player-go')
 const audio = new Audio()

let isPlay = false;

function playAudio() {
    if (!isPlay) {
        audio.src = './assets/audio/assets_audio_solovey.mp3'; 
        audio.currentTime = 0;
        audio.play();
        isPlay = true  
    } else if(isPlay) {
        audio.pause()
        isPlay = false
    } 
    
       
}
buttonSound.addEventListener('click', playAudio)

 const button = document.querySelector('button');
 function toggleBtn() {
    button.classList.toggle('pause');
 }
 button.addEventListener('click', toggleBtn)
 


