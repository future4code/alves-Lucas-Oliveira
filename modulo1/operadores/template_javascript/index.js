// //          EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO

// // // 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 // true (pois recebe o boo12 que VARIALVEL bool3 = !bool2 se torna verdadeiro)

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // RESULTADO false (pois o bool12 é false)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) // RESULTADO false (pois o bool2 é false)

// resultado = !resultado && (bool1 || bool2) // true && (true)
// console.log("c. ", resultado) /* RESULTADO true 
// (o resultado hávia sido false, porém =!resultado se torna true)
// (bool1 || bool2 fica o resultado sendo true) pois || precisa apenas de um true pra se manter*/

// console.log("d. ", typeof resultado) // RESULTADO boolean

// // 2 

// let primeiroNumero = Number(prompt("Digite um numero!")) 
// let segundoNumero = Number(prompt("Digite outro numero!"))
// /* para transformar um string por number na prompt tive que colocar entre parenteses
// assim consigo receber a prompt como Number*/

// const soma = (primeiroNumero + segundoNumero)

// console.log(soma)

// // 3

// /* Sugiro que para transformar um string por number na prompt tive que colocar entre parenteses
// assim consigo receber a prompt como Number


// EXERCÍCIO DE ESCRITE DE CÓDIGO

//  1. Faça um programa que:
    
//     a) Pergunte a idade do usuário
    
//     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
//     c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
//     d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

 let idadeUsuario = Number(prompt("Digite aqui sua idade."))
 let idadeAmigo = Number(prompt("Digite aqui a idaade do seu melhor amigo."))
     console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo)

    /* (ESSA É OUTRO JEITO QUE TAMBEM PODE SER FEITO)
    let resultado = idadeUsuario > idadeAmigo 
    console. log(idadeUsuario > idadeAmigo)*/

// =======================================================================================================

/*2. Faça um programa que:
    
    a) Peça ao usuário que insira um número **par**
    b) Imprima na console **o resto da divisão** desse número por 2.
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código  */

 let numeroPar = Number(prompt("Insira aqui um numero par!"))
     console.log(numeroPar % 2)

    /* c) Quando se testa numeros pares o console apresenta sempre o numero 0
        d) Quando se coloca numero impar sempre aparecerá 1*/


// ========================================================================================================

/*3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    b) A idade do usuário em dias
    c) A idade do usuário em horas */

 let idadeAnos = Number (prompt("Digite aqui a sua idade!"))
     let idadeMeses = idadeAnos * 12
     let idadeDias = idadeAnos * 365
     let idadeHoras = idadeDias * 24

     console.log("a. Sua idade em meses é", idadeMeses) 
     console.log("b. Sua idade em dias é", idadeDias)
     console.log("c. Sua idade em horas é", idadeHoras)

//     // ======================================================================================================

// // 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
    
// //     O primeiro numero é maior que segundo? true
// //     O primeiro numero é igual ao segundo? false
// //     O primeiro numero é divisível pelo segundo? true
// //     O segundo numero é divisível pelo primeiro? true
    
// //     obs: O true ou false vai depender dos números inseridos e do resultado das operações.

 let numero1 = Number(prompt ("Digite aqui um numero qualquer!"))
 let numero2 = Number(prompt ("digite aqui outro numero qualquer!"))
     let maior = numero1 > numero2
     let igual = numero1 == numero2
     let divisao1 = numero1 % numero2
     let divisao2 = numero2 % numero1



/ console.log("O primeiro numero é maior que segundo?", maior)
 console.log("O primeiro numero é igual ao segundo?", igual)
 console.log("O primeiro numero é divisível pelo segundo?", divisao1 === 0)
 console.log("O segundo numero é divisível pelo primeiro?", divisao2 === 0)

// Outra maneira de fazer seria fazer as operações no próprio cosole.log 
// exemplo ---> console.log("O primeiro numero é divisível pelo segundo?"








