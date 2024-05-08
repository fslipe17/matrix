
const numero = Math.floor(Math.random() * 10) + 1;

console.log(numero)

function Verifica(){
    var input = document.getElementById('chute').value;
    var chute = parseInt(input);
    
    var tentativas = 0;

    tentativas + 1
    if(chute == numero){
        document.getElementById('resultado').textContent = `Acertou em cheio!!`;
    }
    else if(chute > numero){
        document.getElementById('resultado').textContent = `Ops você errou.. Tente um numero menor`;
    }else{
        document.getElementById('resultado').textContent = `Ops você errou.. Tente um numero maior`;
    }
}