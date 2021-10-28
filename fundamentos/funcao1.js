//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(4, 5)
imprimirSoma(4)
imprimirSoma(4, 7, 8, 9, 10, 12) // Ele vai pegar os dois primeiros valores associar aos paramettros
// e ignorar o resto
imprimirSoma()


//Função com retorno
function soma(a, b = 0) {
    return a + b
}


console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
