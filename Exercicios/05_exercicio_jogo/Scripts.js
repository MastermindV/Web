var vitorias = 0;
var derrotas = 0;
function jogada(opcaoJogador) {
    var imagemEscolhida;
    switch (opcaoJogador) {
        case 0: imagemEscolhida = 'pedra.png';
            break;
        case 1: imagemEscolhida = 'papel.png';
            break;
        case 2: imagemEscolhida = 'tesoura.png';
            break;
    }
    var imgJogador = document.getElementById('jogador');
    imgJogador.src = imagemEscolhida;
    var sorteio = Math.floor(Math.random() * 3);
    var imagem;
    switch (sorteio) {
        case 0: imagem = 'pedra.png';
            break;
        case 1: imagem = 'papel.png';
            break;
        case 2: imagem = 'tesoura.png';
            break;
    }
    var imgComputador = document.getElementById('computador');
    imgComputador.src = imagem;

    var resultado;
    if (opcaoJogador == 0) {
        switch (sorteio) {
            case 0: resultado = 'Empatou';
                break;
            case 1: resultado = 'Perdeu'; derrotas++
                break;
            case 2: resultado = 'Venceu'; vitorias++;
                break;
        }
    }
    if (opcaoJogador == 1) {
        switch (sorteio) {
            case 0: resultado = 'Venceu'; vitorias++;
                break;
            case 1: resultado = 'Empatou';
                break;
            case 2: resultado = 'Perdeu'; derrotas++
                break;
        }
    }
    if (opcaoJogador == 2) {
        switch (sorteio) {
            case 0: resultado = 'Perdeu'; derrotas++
                break;
            case 1: resultado = 'Venceu'; vitorias++;
                break;
            case 2: resultado = 'Empatou';
                break;
        }
    }
    var resultadoFinal = document.getElementById('resultado');
    resultadoFinal.innerHTML = resultado;
    var textoVitorias = document.getElementById('vitorias');
    textoVitorias.innerHTML = 'Vitorias: ' +vitorias;
    var textoDerrotas = document.getElementById('derrotas');
    textoDerrotas.innerHTML = 'Derrotas: ' +derrotas;
}