/* 

Exercícios de interpretação de código
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
                                           RESPOSTA 
10
10 5  (Pois ele imprime a let, no caso b = 10 e na segunda solicitação ele imprime let a que + b(b=5)) 


let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

2 ------ Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis.
Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. 
Alem disso, os nomes não podem começar com números ou caracteres especiais.


let p = prompt("Quantas horas você trabalha por dia?")  horasTrabalhadasPorDia
let t = prompt("Quanto você recebe por dia?")  pagamentoRecebidoDoDia
alert(`Voce recebe ${t/p} por hora`) */

const nome = undefined
let idade = undefined

//Sempre que a variável não tiver nenhum valor acrescentar (UNDEFINED)  

console.log(nome, idade)  

/* ERRO Acredito que houve um erro por não ter valor atribuido */


const nomeUsuario = prompt("Digite seu nome")
let idadeUsuario = prompt("Digite sua idade")

console.log(typeof nomeUsuario, typeof idadeUsuario)

/* Sempre que for perguntar ao usuário deve ser feito da seguinte forma
# Tipo de váriavel - váriavel - = - (prompt) - ("A pergunta que você quer saber") */

console.log("Ola", nomeUsuario, "você tem", idadeUsuario, "anos")

const climaAtual = prompt("Está chovendo agora?")
const roupaAtual = prompt("Você está com roupa adequada se chover?")
const acessorioAtual = prompt("Está carregando um guarda-chuvas?")

console.log(climaAtual, roupaAtual, acessorioAtual) 

// Aqui faremos uma lógica para trocar os valores
let a = 10
let b = 25
let temp = a // 10


console.log(temp = a, a = b) // A variavel temp pode ser decarta no console, pois é ultilizada somente pra troca das váriaveis.









