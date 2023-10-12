// Enum de resultado da partida
const Resultado = {
    GANHOU: 0,
    PERDEU: 1,
    EMPATOU: 2
}

function jogar(jogada) {
    
    // Obter a jogada da máquina
    let jogadaMaquina = obterJogadaMaquina()
    console.log(`${jogada} vs ${jogadaMaquina}`)

    // Obter o resultado da partida
    let resultado = obterResultado(jogada, jogadaMaquina)

    if (resultado === Resultado.EMPATOU) {
        console.log("EMPATE")
    } else if (resultado === Resultado.GANHOU) {
        console.log("GANHOU")
    } else if (resultado === Resultado.PERDEU) {
        console.log("PERDEU")
    }

    exibirJogadaJogador(jogada, resultado)

    alternarLayouts()
}

function exibirJogadaJogador(jogada, resultado) {
    // Recuperar o elemento img do HTML
    let img = document.getElementById('jogada-jogador-img')

    let color = 'gray'

    switch(resultado) {
        case Resultado.GANHOU:
            color = 'green'
            break
        case Resultado.PERDEU:
            color = 'red'
            break
        default:
            color = 'gray'
            break
    }
    
    img.src = `/assets/${jogada}-${color}.png`
}

function alternarLayouts() {
    let home = document.getElementsByClassName('home')[0]
    let score = document.getElementsByClassName('score')[0]

    home.classList.toggle('hidden')
    score.classList.toggle('hidden')
}

function obterResultado(jogada, jogadaMaquina) {
    // Pedra ganha da tesoura (amassando-a ou quebrando-a).
    // Tesoura ganha do papel (cortando-o).
    // Papel ganha da pedra (embrulhando-a).

    // Empate
    if (jogada === jogadaMaquina) {
        return Resultado.EMPATOU
    }
    // Ganhou
    else if (jogada === 'pedra' && jogadaMaquina === 'tesoura') {
        return Resultado.GANHOU
    } else if (jogada === 'tesoura' && jogadaMaquina === 'papel') {
        return Resultado.GANHOU
    } else if (jogada === 'papel' && jogadaMaquina === 'pedra') {
        return Resultado.GANHOU
    }
    // Perdeu
    else if (jogada === 'tesoura' && jogadaMaquina === 'pedra') {
        return Resultado.PERDEU
    } else if (jogada === 'papel' && jogadaMaquina === 'tesoura') {
        return Resultado.PERDEU
    } else if (jogada === 'pedra' && jogadaMaquina === 'papel') {
        return Resultado.PERDEU
    }

}

function obterJogadaMaquina() {
    // Criar um array com as opções disponíveis
    let opcoes = ['pedra', 'papel', 'tesoura']

    // Gerar número aleatório entre 0 e 3 (não incluindo)
    let position = getRandom(0, 3)

    // Retonar a jogada da máquina
    return opcoes[position]
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
  

function jogarNovamente() {
    console.log("Jogar novamente")

    alternarLayouts()
}

function zerarPlacar() {
    console.log("Zerar placar")

    alternarLayouts()
}