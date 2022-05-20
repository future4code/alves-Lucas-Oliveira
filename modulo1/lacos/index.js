//                          EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS
/*1. O que o código abaixo está fazendo? Qual o resultado impresso no console?*/
/*RESPOSTA
    O código está pegando o indice(0); vendo se ele é menor(<) do que 5; somando o numeros que no caso foram
    comparados como 0 + 1 + 2 + 3 + 4
    */

    // let valor = 0
    // for(let i = 0; i < 5; i++) {
    //   valor += i
    // }
    // console.log(valor)
    
/*2. Leia o código abaixo:*/
    
    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // for (let numero of lista) {
    //   if (numero > 18) {
    // 		console.log(numero)
    // 	}
    // }
    
    /*a) O que vai ser impresso no console?
RESPOSTA
    Será impresso no console todos os numeros >(maiores que 18) 19, 20, 21, 23, 25, 27, 30

    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
    Se sim, o que poderia ser usado para fazer isso?
RESPOSTA
    Sim (MAS NÃO SEI COMO FAZER, POIS A ULA HOJE FOI EXTREMAMENTE CONFUSA)*/
    
/*3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
RESPOSTA
    Foi impresso 
    *
    **
    ***
    ****
    Pois a cada rodada acrescentou além do console.log um (*) a cada rodada.     */
    
    // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    // let quantidadeAtual = 0
    // while(quantidadeAtual < quantidadeTotal){
    //   let linha = ""
    //   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    //     linha += "*"
    //   }
    //   console.log(linha)
    //   quantidadeAtual++
    // }
        

// ============================================================================================================

//                                  EXERCÍCIOS DE ESCRITA DE CÓDIGOS

/*1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.*/

// const quantidadeBichos = +prompt("Digite aqui quantos bichinhos de estimação você tem!")

// /*a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"*/
   
// if (quantidadeBichos === 0){
//     console.log("Que pena! Você pode adotar um pet!")
//     }

// /*b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
// um por um, e guarde esses nomes em um array.*/

//         else if (quantidadeBichos > 0){
//             let bichos = []
            
//             while (bichos.length < quantidadeBichos){ 
//                 let nomesBichos = prompt("Digite aqui o nome dos seus bichinchos!")
//                 bichos.push(nomesBichos)
            
// //c) Por fim, imprima o array com os nomes dos bichinhos no console*/

//         } console.log(bichos)}
// ------------------------------------------------------------------------------------------------------------
/*2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. 
Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:*/
  
let arrayOriginal = [1,2,3,4,5]

/*a) Escreva um programa que **imprime** cada um dos valores do array original.*/

function Impressao (array){
    let maior = [0]
        for (let i = 0; i < array.length; i++){}
            //if (array[i] > maior){
                //maior = array[i]}}
                return array}

console.log(Impressao(arrayOriginal))
                
/*b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10*/
        const valorDividir = 10
        for(i=0; i<arrayOriginal.length; i++) {   
           let resultado = arrayOriginal[i] / valorDividir
            console.log(resultado)
        }

        for(const numero of arrayOriginal){
            console.log(numero/valorDividir)
        }

/*c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array
original e **imprima** esse novo array
        
d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
"O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
        
e) Escreva um programa que imprima no console o maior e o menor números contidos no array original*/