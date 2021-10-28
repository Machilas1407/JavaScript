const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar ATRIBUTOS COM ESPAÇO    

console.log(prod1)


const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    definicao: {
        marca: 'Master',
        modelo: 'Padão',
        porducao: {
            pais: 'China'
        }
    }
}

'{ "nome": "Camisa Polo","preco": 79.90,}' // Formato em JSON, JSON é a forma escrita do objeto

console.log(prod2)