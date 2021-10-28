//Armazenar uma funcão em uma variavel
const ImprimirSoma = function (a, b) {
    console.log(a + b);
}
ImprimirSoma(2, 3)

//Armazenar uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(2, 4)


//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(4, 2))