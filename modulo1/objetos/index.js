//                                 EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// //1 -  Leia o código abaixo

// //a) O que vai ser impresso no console?


// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) RESPOSTA  ("Matheus Nachtergaele") pois está na primeira posição do array.
// console.log(filme.elenco[filme.elenco.length - 1]) RESPOSTA ("Virginia Cavendish") Pois está na ultima posição do array.
// console.log(filme.transmissoesHoje[2]) RESPOSTA {canal: "Globo", horario: "14h"} Pois está na posição 2 do array.

//-------------------------------------------------------------------------------------------------------------------------

// //2.Leia o código abaixo
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// // a) O que vai ser impresso no console? 
// // RESPOSTA () {
// // 	nome: "Juca", 
// // 	idade: 3, 
// // 	raca: "SRD"
// // }
// // RESPOSTA ()const gato = {
// // 	nome: "Juba", 
// // 	idade: 3, 
// // 	raca: "SRD"
// // }
// // RESPOSTA ()const tartaruga =  {
// // 	nome: "Jubo", 
// // 	idade: 3, 
// // 	raca: "SRD"
// // }
// // b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// // Faz uma cópia das propriedades (obejos ou arrays inteiros) para podermos manipula-los.
// // EX: Nome:, idade:, raca:

// //3 - Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoaTeste = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoaTeste, "backender"))
// console.log(minhaFuncao(pessoaTeste, "altura"))

// //a) O que vai ser impresso no console? RESPOSTA false e undefined

// //b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// //console.log(minhaFuncao(pessoaTeste, "backender")) é 

// =============================================================================================================
//                      EXERCÍCIOS DE ESCRITA DE CÓDIGOS

// 1- Resolva os passos a seguir: 
/*a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e 
apelidos (um array que sempre terá exatamente três apelidos). Depois, 
escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:*/

const pessoa = {
    nome: "Karine",
    apelidos: ["katkat", "linda", "gatinha"],

}
    function imprimirMensagem(pessoa) {
        
        console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)
        
    }
    imprimirMensagem(pessoa)


/* b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando
como argumento o novo objeto.*/

const pessoaB ={
    ...pessoa,
    apelidos: ["manhosinha", "ka", "Katarine"]
}
imprimirMensagem(pessoaB)

//=====================================================================================================================

/* 2 - 2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.*/
    
    const pessoa2 ={
        nome: "Rosilda",
        idade: 55,
        profissao: "funcionaria publica"
    }

    const pessoa3={
        nome: "José Carlos",
        idade: 46,
        profissao: "Soldador" 
    }

    /*b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`*/

    function respostaQuestao2 (pessoa2,pessoa3){
        console.log(`${pessoa2.nome} ${pessoa2.nome.length} ${pessoa2.idade} ${pessoa2.profissao} ${pessoa2.profissao.length}`)
        console.log(`${pessoa3.nome} ${pessoa3.nome.length} ${pessoa3.idade} ${pessoa3.profissao} ${pessoa3.profissao.length}`)
            return[pessoa2,pessoa3]
    }

     respostaQuestao2(pessoa2,pessoa3)
    

//=================================================================================================================

/*3 - a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`*/

let carrinho = []

/*b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes 
propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)*/

const melao={
    nome: "Melao",
    disponibilidade: true,
}
const banana={
    nome: "Banana",
    disponibilidade: true,
}
const abacaxi={
    nome: "Abacaxi",
    disponibilidade: true,
}

/*c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro
do array de `carrinho`. Invoque essa função passando os três objetos criados.*/

function adicionarCarrinho(fruta){
    carrinho.push(fruta)
}
adicionarCarrinho(melao)
adicionarCarrinho(banana)
adicionarCarrinho(abacaxi)
/*d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.*/
console.log(carrinho)