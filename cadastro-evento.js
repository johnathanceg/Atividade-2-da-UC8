// Cadastro de Eventos

const entrada = require("readline-sync");

let dataEvento = entrada.question("Digite a Data do Evento");
let idade = entrada.question("Por Gentileza coloque sua idade");
let participantes = 16
let maiorIdade = 18
let dataEvanto = 30

if (dataEvento <= 30) {
    console.log("Data correta vc pode ser cadastrar para o Evento");

} else {
    console.log("Data de Evento invalida!!");
}

if (idade >= 18) {
    console.log("Idade Confirmada, você pode se cadastrar");

} else {
    console.log("Idade não permitida para o evento!!");
}

if (participantes < 100) {
    console.log("ainda temos lugares disponiveis.");

} else {
    console.log("Ddesculpe, o evento ja esta cheio!!");
}


{console.log("LISTA DE PESSOAAS CADDASTRADAS");


console.log("Joao");
console.log("Maria");
console.log("Michelle");
console.log("Eduardo");
console.log("Miguel");
console.log("Thiago");
console.log("Rafael");
console.log("Franklim");
console.log("Marconi");
console.log("Silvia");
console.log("Franciely");
console.log("Ageu");
console.log("Everton");
console.log("Vinicios");
console.log("Geovan");
console.log("Marcelo");
}