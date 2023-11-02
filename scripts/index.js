// Enum de resultado da partida
const Resultado = {
    GANHOU: 0,
    PERDEU: 1,
    EMPATOU: 2
}

// Placar do Jogador e da Máquina
let placarJogador = 0
let placarMaquina = 0

function jogar(jogada) {
    
    // Obter a jogada da máquina
    let jogadaMaquina = obterJogadaMaquina()

    // Obter o resultado da partida
    let resultado = obterResultado(jogada, jogadaMaquina)

    // Exibir a jogada do jogador no placar
    exibirJogadaJogador(jogada, resultado)
    
    // Exibir a jogada da máquina no placar
    exibirJogadaMaquina(jogadaMaquina)

    // Exibir o resultado
    exibirResultado(resultado)

    // Calcular o placar
    atualizarPlacar(resultado)

    // Atualizar o placar
    exibirPlacar()

    adicionarAnimacao(resultado)

    alternarLayouts()
}

function exibirPlacar() {
    let placarJogadorText = document.getElementById('placar-jogador-text')
    let placarMaquinaText = document.getElementById('placar-maquina-text')

    placarJogadorText.innerText = placarJogador
    placarMaquinaText.innerText = placarMaquina
}

function atualizarPlacar(resultado) {
    if (resultado === Resultado.GANHOU) {
        // Contar ponto para o Jogador
        placarJogador++
    } else if (resultado === Resultado.PERDEU) {
        // Contar ponto para a Máquina
        placarMaquina++
    }
}

function exibirResultado(resultado) {
    // Recuperar a imagem do HTML
    let img = document.getElementById('resultado-img')
    let text = document.getElementById('resultado-text')
    let textColor = ''

    switch(resultado) {
        case Resultado.GANHOU:
            img.src = `/assets/guaxinim.png`
            text.innerText = 'GANHOU'
            textColor = '--ganhou-color'
            break
        case Resultado.PERDEU:
            img.src = `/assets/morte.png`
            text.innerText = 'PERDEU'
            textColor = '--red-color'
            break
        default:
            img.src = `/assets/dino.png`
            text.innerText = 'EMPATE'
            textColor = '--empate-color'
            break
    }

    // Alterar a cor do texto
    text.style.color = getComputedStyle(document.documentElement).getPropertyValue(textColor)
}

function exibirJogadaMaquina(jogada) {
    // Recuperar o elemento de img do HTML
    let img = document.getElementById('jogada-maquina-img')
    
    // Alterar a imagem do componente
    img.src = `/assets/${jogada}-gray.png`
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
    let score = getScoreElement()

    home.classList.toggle('hidden')
    score.classList.toggle('hidden')
}

function getScoreElement() {
    return document.getElementsByClassName('score')[0]
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
    alternarLayouts()
}

function zerarPlacar() {
    // Zerar as variáveis
    placarJogador = 0
    placarMaquina = 0

    alternarLayouts()
}

function adicionarAnimacao(resultado) {
    let score = getScoreElement()
    if (resultado === Resultado.PERDEU) {
        score.classList.add('animate__shakeX')
    } else {
        score.classList.add('animate__fadeIn')
    }
    // Remover as animações sempre que as mesmas terminarem
    score.addEventListener('animationend', () => {
        score.classList.remove('animate__shakeX', 'animate__fadeIn')
    })
}