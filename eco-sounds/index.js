
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
    button.classList.toggle('pause')
 }
 button.addEventListener('click', toggleBtn)
 
 
const navButton = document.querySelector('.solovei')
const playerImage = document.querySelector('.image-audio-player')
navButton.addEventListener('click', () => {
playAudio()
playerImage.src = "./assets/img/solovey.jpg"
});
navButton.addEventListener('click', toggleBtn)

const navButton1 = document.querySelector('.drozd')
navButton1.addEventListener('click', () => {
playerImage.src = "./assets/img/drozd.jpg"
});
navButton1.addEventListener('click', toggleBtn)

const navButton2 = document.querySelector('.zarynka')
navButton2.addEventListener('click', () => {
playerImage.src = "./assets/img/zarynka.jpg"
});
navButton2.addEventListener('click', toggleBtn)

const navButton3 = document.querySelector('.javoronok')
navButton3.addEventListener('click', () => { 
playerImage.src = "./assets/img/javoronok.jpg"
});
navButton3.addEventListener('click', toggleBtn)

const navButton4 = document.querySelector('.slavka')
navButton4.addEventListener('click', () => { 
playerImage.src = "./assets/img/slavka.jpg"
});
navButton4.addEventListener('click', toggleBtn)

const buttonLogo = document.querySelector('.logo')
buttonLogo.addEventListener('click', () => {
playAudio()
playerImage.src = "./assets/img/forest.jpg"
});
buttonLogo.addEventListener('click', toggleBtn)