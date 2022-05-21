
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}` // Nessa questão já temos a frase e o comando dentro da template string
}
console.log(checarDesigualdade(1, 3)); // Os parametros devem ser colocados na mensagem do console (variaveisA,variavelB)

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    
    return `No comparador de igualdade ${a} === ${b} é ${a === b}`
}
console.log(checarIgualdade(2, 2))

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a, b) {

    return `No comparador de se é maior ${a} > ${b} é ${a > b}`
}
 console.log(verificaSeEMaior(321, 2156));

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= (FALSE) Pois o comando === verifica o valor e tipo 1(Number) e '1'(String)
// b-) 1=='1'= (TRUE) Pois o comando == verifica somente o valor que ambos tem 1
// c-) 'a'==='b'= (FALSE) Pois apesar de ambas serem strings elas são diferentes ('a') ('b')
// d-) 'b'>'a'= (TRUE) Pois o elemento 'a' é menor que o elemento 'b' assim como 'b' é menor que 'c' 
// e-) 0!==null= (TRUE) Pois o comando !== é de negação Exemplos: (TRUE se torna FALSE) e (FALSE se torna TRUE)

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
const nomeDoUsuario = prompt("Digite aqui o seu nome!")
const anoDeNascimento = Number(prompt("Digite aqui o ano de seu nascimento!"))
const senhaDoUsuario = prompt("Digite aqui uma senha com no mínimo 6 caracteres!")
const nacionalidade = prompt("Digite aqui qual a sua nacionalidade!").toLowerCase()

const cadastro = (nome, anoNascimento, senha, nacionalidade) => {
    const usuario = []
    let maiorIdade = 2022 - anoDeNascimento
    if (maiorIdade >= 18 && (senha.length >= 6) && nacionalidade === "brasileiro" ){
        usuario.push(nome,anoNascimento,senha,nacionalidade)
    } 
    return usuario
}
console.log(cadastro(nomeDoUsuario, anoDeNascimento, senhaDoUsuario,nacionalidade));

// // Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui

// }

// console.log(login());

// // Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui


// }
// console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui


// }
// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui

// }
// console.log(avisoAosAtrasados());


// // DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastroDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastroDesafio());

// const loginDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(loginDesafio());

// const primeiraDoseDesafio = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDoseDesafio())
// const segundaDoseDesafio = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

// const avisoAosAtrasadosDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasadosDesafio());