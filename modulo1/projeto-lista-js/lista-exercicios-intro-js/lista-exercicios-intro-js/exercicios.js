// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt("Digite aqui a aultura")
const largura = prompt("Digite aqui a largura")

console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite aqui o ano atual")
  const anoDeNascimento = prompt("digite aqui o ano de seu nascimento!")
  console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  // let peso = 92
  // let altura = 1.91
  IMC = peso / (altura*altura)
  return(IMC)
 }

//  console.log(calculaIMC)
// console.log(IMC)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt("Nome")
  let idade = prompt (Number("idade"))
  let email = prompt("email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cores = []
let cor1 = prompt("escrveva sua cor favorita")
let cor2 = prompt("Escreva a sua segunda cor favorita")
let cor3 = prompt("Escreva a sua terceira cor favorita")
coresFavoritas = cores.push(cor1, cor2, cor3) // Para colocar os prompts dentro do array preciso usar o comando push.
console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return(string.toLocaleUpperCase()) 
}

// EXERCÍCIO 07

function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return(custo / valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
//   // implemente sua lógica aqui
return((string1.length) == (string2.length))
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return(array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimoElemento = array[array.length - 1]
  return(ultimoElemento)
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
// let temp = array[0]
// array[0]= array[array.len -1]
// array[array.len] = temp
// return(temp)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let string1Maiuscula = string1.toUpperCase() 
  let string2Maiuscula = string2.toUpperCase()
  return(string1Maiuscula == string2Maiuscula)
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
// anoAtual = Number(prompt("Qual o ano atual?"))
// anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
// anoEmissaoIdentidade = Number(prompt("Qual ano de emissão da sua carteira de identidade?")) 
// let idade = anoAtual - anoDeNascimento
// (anoAtual <= 20 && )

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
// const maiorDeIdade = prompt("Você é maior de idade?")
// const temEnsinoMedio = prompt("Você tem o ensino médio?")
// const temDisponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso??")
// maiorDeIdade == "Sim"
// temEnsinoMedio == "Sim"
// temDisponibilidade == "Sim"
// //let inscricaoValida = maiorDeIdade && temEnsinoMedio && temDisponibilidade
// console.log(maiorDeIdade&&temDisponibilidade&&temEnsinoMedio)

}