function jogar(jogada) {
    
    let jogadaMaquina = obterJogadaMaquina()
    console.log(`${jogada} vs ${jogadaMaquina}`)

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
}

function zerarPlacar() {
    console.log("Zerar placar")
}