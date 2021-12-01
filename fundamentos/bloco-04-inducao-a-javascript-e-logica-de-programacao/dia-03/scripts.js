/*  possiveis direcoes sao: 'centroBorda' ou 'inicioDireita' ou 'fimEsquerda' */
let direcao = 'direito';
let n = ['x', 'x', 'x', 'x', 'x']

    if (direcao == 'centroBorda') {
        let posicao = null;
        let esquerdo = null;
        let direito = null;
        if (n.length % 2 === 0) {
            posicao = n.length / 2;
            esquerdo = n.length / 2;
            direito = n.length / 2;
        }

        for (let contador = 0; contador < 5; contador +=1) {
            n[posicao] = '*';
            console.log(n);
            if (direito === n.length -1 || esquerdo === 0) {
                    break;
            }
            direito = direito + 1;
            esquerdo = esquerdo - 1;
            n[direito] = '*';
            n[esquerdo] = '*';
        }
    } else if (direcao == 'direito') {
        let posicao = 0;
        let direito = 0;
        for (let contador = 0; contador < n.length; contador +=1) {
            n[posicao] = '*';
            console.log(n)
            if (direito === n.length - 1) {
                break;
            } 
            direito = direito + 1;
            n[direito] = '*';
        }
    } else { 
        let posicao = n.length -1;
        let esquerdo = n.length -1;
        for (let contador = 0; contador < n.length; contador +=1) {
            n[posicao] = '*';
            console.log(n)
            if (esquerdo === 0) {
                break;
            } 
            esquerdo = esquerdo - 1;
            n[esquerdo] = '*';
        }
    }
    