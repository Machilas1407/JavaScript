// Evitar uso de var, pois ele pode alterar o resultado sempre
var a = 3

a = 10
a = 30

console.log(a)

// Preferencial usar let, pois ele tem uma definição melhor do valor 
let b = 4
// b = 40  isso vai gerar erro
console.log(b)


// Ver e Let são variáveis

// Constantes não podem ser alteradas depois do valor ser declarado
const c = 5
console.log(c)
