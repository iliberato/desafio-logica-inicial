const btnAmericaOpen = document.getElementById("btn-america");
const btnAranha = document.getElementById("btn-aranha");
const btnFerro = document.getElementById("btn-ferro");
const gameContainer = document.getElementById("game-container");
const body = document.querySelector("body");

const titleGame = document.getElementById("title-game");
const imageGame = document.getElementById("image-game");

let secretNumber = Math.floor(Math.random() * 10) + 1;
let score = 0;
let timeRemaining = 60;
let timer;
let nome, xp, nivel;

btnAmericaOpen.addEventListener("click", () => startGame("Capitão América", "https://www.1papacaio.com.br/images/pngs/super-herois/png-herois-capitao-america.jpg"));
btnAranha.addEventListener("click", () => startGame("Homem Aranha", "https://thegeekstation.wordpress.com/wp-content/uploads/2015/07/spider-man.jpg?w=772"));
btnFerro.addEventListener("click", () => startGame("Homem de Ferro", "https://www.1papacaio.com.br/images/pngs/super-herois/png-herois-homem-de-ferro.jpg"));

function startGame(characterName, image) {
    nome = characterName;
    titleGame.textContent = `Acerte o Número ${nome}!`;
    toggleGame();
    resetGame();
    imageGame.src = image;

}

function toggleGame() {
    gameContainer.classList.toggle("block");
    if (!timer) startTimer();
 
}

function startTimer() {
   
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            document.getElementById('timer').textContent = timeRemaining;
        } else {
            clearInterval(timer);
            alert('Tempo esgotado! Sua pontuação: ' + score);
            alert('Total de XP: ' + xp);
            alert('Nível alcançado: ' + nivel);
            resetGame();
        }
    }, 1000);
}

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let resultMessage = document.getElementById('resultMessage');
    let hintMessage = document.getElementById('hintMessage');
    


    if (userGuess === secretNumber) {
        resultMessage.textContent = 'Parabéns! Você acertou o número!';
        resultMessage.style.color = 'green';
        score += 10;
        updateXPAndLevel();
        resetGame();
    } else {
        resultMessage.textContent = 'Errado! Tente novamente.';
        resultMessage.style.color = 'red';

        imageGame.src = "https://media2.giphy.com/media/xUOxfgwY8Tvj1DY5y0/giphy.gif";  
        setTimeout(() => {
        }, 2000);

        hintMessage.textContent = userGuess > secretNumber ? 'O número secreto é menor.' : 'O número secreto é maior.';
        score -= 1;
        updateXPAndLevel();
    }
}

function updateXPAndLevel() {

    
    document.getElementById('score').textContent = score;
    document.getElementById('xp').textContent = xp;
    
    if (score > 0) {
        xp = score * 500; 
    }

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    document.getElementById('nivel').textContent = nivel;
}

function resetGame() {
    clearInterval(timer);
    timer = null;
    secretNumber = Math.floor(Math.random() * 10) + 1;
    timeRemaining = 60;
    document.getElementById('timer').textContent = timeRemaining;
    document.getElementById('guessInput').value = '';
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('hintMessage').textContent = '';
    document.getElementById('score').textContent = score;
    document.getElementById('xp').textContent = xp;
    document.getElementById('nivel').textContent = nivel;
}
