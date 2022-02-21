const zone = document.querySelector('.wrapper-play-area')
let move = 0
let result = ''
const content = document.querySelector('.content')
const modalWindow = document.querySelector('.modal-wrapper')
const buttonCloseModalWindow = document.querySelector('.button')
const voiceOfWin = document.querySelector('audio')

zone.addEventListener('click', e => {
if(e.target.className === 'tic-tac-item') {
    move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0'
    move++
    check ()
}
})

const check = () => {
    const boxes = document.querySelectorAll('.tic-tac-item')
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]


    for (let i = 0; i < arr.length; i++) {
    if (boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
        result = 'Crosses'
        whoWins(result)
    }
    else if (boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0') {
       result = 'Zeros'
       whoWins(result)
    }
    }
    
    if (move === 9 && result != 'Crosses' && result != 'Zeros') {
        result = 'Draw'
        whoWins(result)
    }
}

const whoWins = winner => {
    if (result === 'Zeros' || result === 'Crosses') {
        content.innerHTML = `${winner} won! It took ${move} moves`
        localStorage.setItem('count of moves', move)
        playAudio()  
    } else {
        content.innerHTML = `${winner}, try again! It took ${move} moves`
        localStorage.setItem('count of moves', move)
        playAudio() 
    }
    modalWindow.classList.add('active')

}

buttonCloseModalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active')
    location.reload()
})

function playAudio() {
    voiceOfWin.currentTime = 0;
    voiceOfWin.play()
}




