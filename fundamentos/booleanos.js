let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Mata a primeira esclamação, no caso volta ao valor original, isso fazer uma conversão
console.log(!isAtivo) // Negação


console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || 'epa'))  // O simbolo || é a mnesma coisa que um 'ou'. Um ou outro. 



let nome = ''
console.log(nome || 'Desconhecido')











