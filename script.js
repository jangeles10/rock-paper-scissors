/* Función para que la máquina genere aleatoriamente piedra, papel o tijera */


function getComputerChoice() {
    let piedraPapelTijera = ["Piedra", "Papel", "Tijera"];
    let aleatorio = Math.floor(Math.random() * piedraPapelTijera.length);

    return piedraPapelTijera[aleatorio];
}


/* Función para que el jugador escoja piedra, papel o tijera. */

function getHumanChoice() {
    let eleccionUsuario = prompt("¿Qué escogerás?");
    return eleccionUsuario;
}


/* Función para jugar 5 rondas y ver quien gana la partida */

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // 1. Normalizamos la entrada
        const human = humanChoice.toLowerCase();
        const computer = computerChoice.toLowerCase();

        // 2. Lógica de comparación (Divide y vencerás)
        if (human === "piedra" && computer === "tijera") {
            humanScore++;
            return "¡Ganaste! La piedra vence a la tijera";
        } else if (human === computer) {
            return "¡Empate!";
        } else {
            computerScore++;
            return "Perdiste esta ronda...";
        }
    }

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        console.log("Puntaje Humano: ", humanScore);
        console.log("Puntaje Computadora: ", computerScore);
    }

    if(humanScore > computerScore) {
        console.log("El ganador es el humano con " + humanScore + " puntos!!");
    } else {
        console.log("El ganador es la computadora con " + computerScore + " puntos!!");
    }
}

playGame();