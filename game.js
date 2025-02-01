
let playerName = '';
const buttons = document.querySelectorAll('.battle-button');
const battleText = document.querySelector('.battle-text');
const computerHP = document.querySelector('.hp-bar-top .hp-bar-fill');
const playerHP = document.querySelector('.hp-bar-bottom .hp-bar-fill');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        determineWinner(e.target.textContent);
    });
});
function startGame() {
    buttons.forEach(button => button.disabled = true);
    playerName = prompt('Enter your name to start the battle:') || 'Player';
    document.querySelector('.box-bottom-right h2').textContent = playerName;
    buttons.forEach(button => button.disabled = false);
    battleText.textContent = `What will you choose, ${playerName}?`;
}
function determineWinner(playerChoice) {
    const choices = ['Grass', 'Fire', 'Water'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let damage = 20;
    if (
        (playerChoice === 'Grass' && computerChoice === 'Water') ||

        (playerChoice === 'Water' && computerChoice === 'Fire') ||

        (playerChoice === 'Fire' && computerChoice === 'Grass')
    ) {
        const currentWidth = parseInt(computerHP.style.width) || 100;
        computerHP.style.width = `${currentWidth - damage}%`;
        battleText.textContent = `${playerName}'s ${playerChoice} beats ${computerChoice}!`;
        if (currentWidth - damage <= 0) {
            setTimeout(() => {
                alert(`Congrats ${playerName}! you Won! 🎉`);
                resetGame();
            }, 500);
        }
    } else if (playerChoice === computerChoice) {
        battleText.textContent = "It's a tie!";
    } else {
        const currentWidth = parseInt(playerHP.style.width) || 100;
        playerHP.style.width = `${currentWidth - damage}%`;
        battleText.textContent = `Computer's ${computerChoice} beats ${playerName}'s ${playerChoice}!`;
        if (currentWidth - damage <= 0) {
            setTimeout(() => {
                alert(`Sorry ${playerName}, Computer Won! 😢`);
                resetGame();
            }, 500);
        }
    }
}
function resetGame() {
    computerHP.style.width = '100%';
    playerHP.style.width = '100%';
    battleText.textContent = `What will you choose, ${playerName}?`;
}
window.addEventListener('load', startGame);