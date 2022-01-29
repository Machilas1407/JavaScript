var numero = 1 //var tem escopo global e de função
{
    let numero = 2// let tem escopo global, função e de bloco
    console.log('dentro =', numero)
}
console.log('fora =', numero)