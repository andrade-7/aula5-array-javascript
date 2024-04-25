let total = 0

for(let i = 1; i<=500; i++){
    // total = total + i
    total += i
}

console.log(total);


// FAÇA UM PROGRAMA QUE PEDE PARA O USUÁRIO DIGITAR 5 NÚMEROS E NO FINAL MOSTRE QUAL FOI:
// O MAIOR NÚMERO
// O MENOR NÚMERO
// A SOMA DOS NÚMEROS
// A MÉDIA DOS NÚMEROS

let soma = 0
let maior = Number.NEGATIVE_INFINITY
let menor = Number.POSITIVE_INFINITY

for(let i = 1; i<=5; i++){
    const numero = Number(prompt("Digite um número: "))
    soma += numero
    if(numero > maior){
        maior = numero
    }
    if(numero < menor){
        menor = numero
    }
}
const media = soma / 5
console.log(`A soma dos números: ${soma}`);
console.log(`A média dos números: ${media}`);
console.log(`O maior número: ${maior}`);
console.log(`O menor número: ${menor}`);




// FAÇA UM PROGRAMA QUE PEDE PARA O USUÁRIO DIGITAR UMA PALAVRA E MOSTRE NO CONSOLE:
// A QUANTIDADE DE CARACTERES DA PALAVRA
// A QUANTIDADE DE VOGAIS
// A QUANTIDADE DE CONSOANTES

const palavra = prompt("Digite uma palavra: ")
let contador_vogal  = 0
let contador_consoante = 0
const vogais = "aeiouáàãâäéêíóôõúü"
const consoantes = "bcdfghjklmnpqrstvxywz"

for(let letra_da_vez of palavra.toLowerCase()){
    if(vogais.includes(letra_da_vez)){
        contador_vogal ++
    }else if(consoantes.includes(letra_da_vez)){
        contador_consoante++
    }
}
console.log(`Total de caracteres ${palavra.length}`)
console.log(`Total de vogais ${contador_vogal}`)
console.log(`Total de consoantes ${contador_consoante}`)







// ARRAYS
// const nome = "João"
// const idade = 30
// const altura = 1.85
// const casado = true

const pessoa = ["João", 30, 1.85, true]
const numeros = [2,6,10,25,3,8]
const frutas = ["Abacaxi", "Melancia", "Uva"]
const habilitados = [true,false,false,true,true]

console.log(pessoa)
console.log(numeros)
console.log(frutas)
console.log(habilitados)
console.log(frutas[1])

frutas[0] = "Laranja"
console.log(frutas)




// ADICIONANDO ITENS
const frutas = ["Abacaxi", "Melancia", "Uva"]

console.log("Primeira versão",frutas)

frutas.push("Limão") //ADICIONA NO FINAL DA LISTA
frutas.unshift("Laranja") // ADICIONA NO COMEÇO DA LISTA

console.log("Segunda versão", frutas)




// REMOVENDO ITENS
const frutas = ["Abacaxi", "Melancia", "Uva", "Acerola", "Maça"]

console.log("Primeira versão",frutas)

frutas.pop() //REMOVE O ULTIMO ITEM
frutas.shift() //REMOVE O PRIMEIRO ITEM

console.log("Segunda versão", frutas)



// SPLICE
const frutas = ["Abacaxi", "Melancia", "Uva", "Acerola", "Maça"]

console.log("Primeira versão",frutas)

frutas.splice(2,2, "Laranja", "Limão", "Goiaba")

console.log("Segunda versão", frutas)





const frutas = ["Abacaxi", "Melancia", "Uva", "Acerola", "Maça"]

console.log("Primeira versão",frutas)

frutas.splice(2,0, "Laranja", "Limão")

console.log("Segunda versão", frutas)





const frutas = ["Abacaxi", "Melancia", "Uva", "Acerola", "Maça"]

console.log("Primeira versão",frutas)

frutas.splice(1,1)

console.log("Segunda versão", frutas)




// DADO A LISTA DE PESSOAS
["João", "Maria", "Pedro", "Ana", "Abel"]
// ADICIONE "Amanda" no final da lista
// REMOVA O "João"
// ADICIONE "Raimundo" NO COMEÇO DA LISTA
// REMOVA "Pedro" e "Ana" E ADICIONE "Thais" e "Vitória"
// REMOVA "Maria

const pessoas = ["João", "Maria", "Pedro", "Ana", "Abel"]
pessoas.push("Amanda") // ADICIONANDO NO FINAL DA LISTA
pessoas.shift() //ESTÁ REMOVENDO O JOÃO
pessoas.unshift("Raimundo") //ADICIONANDO NO COMEÇO
pessoas.splice(2,2, "Taís", "Victória") //TIRA PEDRO E ANA E ADICIONA TAÍS E VICTÓRIA
pessoas.splice(1,1) //REMOVE A MARIA

console.log(pessoas)




// SORT
const pessoas = ["João", "Maria", "Pedro", "Ana", "Abel"]
pessoas.sort() // ORDENA EM ORDEM ALFABETICA OU DO MENOR PARA O MAIOR
console.log(pessoas)


// REVERSE
const pessoas = ["João", "Maria", "Pedro", "Ana", "Abel"]
console.log("Antes", pessoas)
pessoas.reverse()  //ESPELHA O ARRAY, DEIXA ELE AO CONTRÁRIO
console.log("Depois", pessoas)



const pessoas = ["João", "Maria", "Pedro", "Ana", "Abel"]
console.log("Versão Original", pessoas)

pessoas.sort() 
console.log("Versão Ordenada", pessoas)

pessoas.reverse() 
console.log("Versão Final", pessoas)



// INDEXOF
const pessoas = ["João", "Maria", "Pedro", "Ana", "Abel"]
console.log(pessoas.indexOf("Pedro"))





// ITERAR UM ARRAY
const pessoas = ["João", "Maria", "Pedro", "Ana", "Abel"]

for(let pessoa_da_vez of pessoas){
    if(pessoa_da_vez === "Abel"){
        console.log("ó u abel")
    }
}



const todos_os_numeros = []
const numeros_pares = []
const numeros_impares = []

for(let i = 1; i<= 20; i++){
    const numero = Number(prompt("Digite um número: "))
    // const numero = Math.floor(Math.random() * 100 + 1)
    todos_os_numeros.push(numero)
    if(numero % 2 === 0){
        numeros_pares.push(numero)
    }else{
        numeros_impares.push(numero)
    }
}
console.log("Todos: ", todos_os_numeros)
console.log("Pares: ", numeros_pares)
console.log("Impares: ", numeros_impares)

