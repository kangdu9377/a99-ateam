const square = document.querySelectorAll('.square')
const blue_devil = querySelectorAll('.blue_devil')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('blue_devil')
    })
    
    let randomPosition = square[Math.random() * 9]
    randomPosition.add('blue_devil')

    //assin the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id

    square.forEach(id => {
        id.addEventListener('mouseup', () => {
            result++
            score.textContent = result
        })
    })
}

function moveDevil() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveDevil()
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)

    }
}

let timerId = setInterval(countDown, 1000)
