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
            case 0: resultado = 'empate';
                break;
            case 1: resultado = 'perdeu';
                break;
            case 2: resultado = 'venceu';
                break;
        }
    }
    if (opcaoJogador == 1) {
        switch (sorteio) {
            case 0: resultado = 'venceu';
                break;
            case 1: resultado = 'empatou';
                break;
            case 2: resultado = 'perdeu';
                break;
        }
    }
    if (opcaoJogador == 2) {
        switch (sorteio) {
            case 0: resultado = 'perdeu';
                break;
            case 1: resultado = 'venceu';
                break;
            case 2: resultado = 'empatou';
                break;
        }
    }
    var resultadoFinal = document.getElementById('resultado');
    resultadoFinal.innerHTML = resultado;
}