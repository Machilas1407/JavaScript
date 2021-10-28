const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Confirma se é number
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // O number apresenta duas casas decimáis
console.log(media.toString(2)) /* O toString converte o valor de number para uma string
e o número dois entre os () converte o número para binário*/
console.log(typeof media)