const zone = document.querySelector('.wrapper-play-area')
let move = 0
const result = ''

zone.addEventListener('click', e => {
if(e.target.className === 'tic-tac-item') {
    move % 2 === 0 ? e.target.innerHTML = 'x' : e.target.innerHTML = '0'
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
}