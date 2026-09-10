// formas de tipar
// forma 1
let idade:number;
// forma2
const nome = 'seu zezo';
// forma 3 não recomendado por ser redundante
const sobrenome:string = 'da Silva';
// tipagem especiais
type usuario = {'nick':string, 'age':number }
// Chamado type novo
let jogador:usuario ={nick: 'Ricardo' , age:18};

let jogadorVelho:usuario = {nick: 'Toin' , age:76};

function verificarIdade(usuarioAtual: usuario){
    if (usuarioAtual.age>=21) {
        console.log(`✅ Acesso liberado: O jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} e pode jogar nosso joguinho muito massa de pei pei,`)
    } else {
        console.log(`EI ${usuarioAtual.nick}
        É de menor pode ta pei pei não tem só
        ${usuarioAtual.age} anos um bebê😊`);
        
    }
}

verificarIdade (jogador)
verificarIdade (jogadorVelho)

type brinquedo = {
    nome:string,
    tipo:string,
    marca:string
}

let bola: brinquedo = {
    nome: 'bola',
    tipo: 'futebol',
    marca: 'estrela'
}