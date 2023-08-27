const count = document.querySelector('.rounded');
const btn1 = document.querySelector('.btn-success')
const btn2 = document.querySelector('.btn-primary')
const resetbtn = document.querySelector('.btn-danger')
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
let winningScore = 5;
count.addEventListener('change', () => {
    winningScore = parseInt(count.value);
    reset();
})
let player1 = 0;
let player2 = 0;
let isGameOver = false;
btn1.addEventListener('click', () => {
    if (!isGameOver) {
        player1 += 1;
        if (player1 === winningScore) {
            isGameOver = true;
        }
        p1.innerText = player1;
        if (player1 === winningScore) {
            p1.classList.add('winner');
            p2.classList.add('loser');
        }
    }
})
btn2.addEventListener('click', () => {
    if (!isGameOver) {
        player2 += 1;
        if (player2 === winningScore) {
            isGameOver = true;
            p2.classList.add('winner');
            p1.classList.add('loser');
        }
        p2.innerText = player2;
        if (player2 === winningScore) {
        }
    }
})
resetbtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    player1 = 0;
    player2 = 0;
    p1.innerText = 0;
    p1.classList.remove('winner', 'loser');
    p2.classList.remove('winner', 'loser');
    p2.innerText = 0;
}