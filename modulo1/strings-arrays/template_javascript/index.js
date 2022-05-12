// //               EXERCÍCIO DE INTERPRETAÇÃO DE CODIGO

// // Indique todas as mensagens impressas no console.
// let array
// console.log('a. ', array) // a. undefild (Pois não existe valor atribuido a variavel.)

// array = null
// console.log('b. ', array)// b. null (Representa nulo (inexistente).)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// //      [0][1][2][3][4][5][6] [7] [8] [9][10] 

// console.log('c. ', array.length)// c. 11 (Tamanho array)

// let i = 0 // i está na posição 0
// console.log('d. ', array[i])// d. 3 (Mostra no console.log o elemento [0] do array.)

// array[i+1] = 19 // i está na posição 0 + 1 posição a contar de 0 = 19 assume a posição [1] 
// console.log('e. ', array)// e. 11 (Tamanho array) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6] // i posição 0 + 6 posições a contar de 0 
// console.log('f. ', valor)// f. 9 (esta na posição [6])

// ============================================================================================================
//2

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)/*"DIGITE UMI FRISE" 16

// O comando (frase.toUpperCase()) DEIXOU TUDO EM MAIUSCULO
// O comando (.replaceAll("A", "I")) TROCOU AS LETRAS "A" DA FRASE POR LETRAS "I"
// O COMANDO (frase.length) MOSTRA A QUANTIDADE DE ARGUMENTOS EXISTE EM "Digite uma frase".

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?*/

// console.log(frase.length) // 27 

// ===========================================================================================================

//                              EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nomeDoUsuario = prompt("Digite aqui seu nome!")
const emailDoUsuario = prompt ("Digite aqui o seu e-mail!")

console.log("O e-mail "+emailDoUsuario+ " foi criado com sucesso. Seja bem-vinda(o) "+nomeDoUsuario+" ! ")
//Esse exemplo é utilizado com + lembrando de colocar espaço entre " o inicio e o final das aspas "

console.log(`O e-mail ${emailDoUsuario} foi criado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}`)
//Esse exemplo é utilizado com as ``(sempre no inicio e no final) e com ${VARIAVEL}

// ==========================================================================================================

/*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
    seguida por cada uma das comidas, **uma embaixo da outra**.
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
    Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista*/


 const arrayComidasFavoritas = ["Comida Japonesa", "Churrasco", "Feijoada",  "Arroz", "Pizza"]
 //  Posição dos arrays           [0]                 [1]          [2]         [3]      [4]
 
 /*a)*/console.log(arrayComidasFavoritas)

 /*b)*/console.log(`Essas são minhas comidas preferidas \n ${arrayComidasFavoritas}`)


 /*c)*/const comidaFavoritaUsuario = (prompt("Das opções dadas qual a sua comida preferida")) 

 arrayComidasFavoritas[1] = comidaFavoritaUsuario

  console.log(arrayComidasFavoritas)


// ============================================================================================================================

/*3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    c) Imprima o array no console
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    e) Remova da lista o item de índice que o usuário escolheu.
    f) Imprima o array no console*/


/*a)*/ let listaDeTarefas = [] //Criei um array [] vazio e guardei na const listaDeTarefas 

/*b)*/ let tarefa1Usuario = prompt("Cite uma tarefa que você precisa realizar hoje")
        let tarefa2Usuario = prompt("Cite a segunda tarefa que você precisa realizar hoje")
        let tarefa3Usuario = prompt("Cite a terceira e ultima tarefa que você precisa realizar hoje")
        // Acima perguntei ao usuario pelo (PROMPT) três três tarefas que ele precisa realizar.

    listaDeTarefas = [tarefa1Usuario, tarefa2Usuario, tarefa3Usuario]
        // Acima acrescentei as (PROMPT) solicitadas ao usuario sobre as tarefas que ele deve fazer
        
        
/*c)*/ console.log(listaDeTarefas)

/*d)*/ let escolhaUsuario = prompt(`De acordo com as opções dadas anteriormente, 1, 2 ou 3 digite o numero de uma das tarefas que você já realizou`)
     // (Escolha usuario) [Posição array]
//Suponhamos que o usuario respondeu Lavar-roupa (1) [0], Fazer compras (2) [1]), Abastecer (3)[2]

/*e)*/ listaDeTarefas.splice(escolhaUsuario -1, 1)// comando Splice 
/* quando coloco -1 quero dizer que as posições ficariam  
 (Lavar-roupa(posição 1)[array 1]) (Fazer compras(posição 1[array 1])) (Abastecer(posição2)[array 2])*/

/*f)*/console.log(listaDeTarefas) 

// OUTRO MODO DE FAZER

// /*A)*/ let listaTarefa = []

// listaTarefa[0] = prompt("Cite uma tarefa que você precisa realizar hoje")
// listaTarefa[1] = prompt("Cite uma tarefa que você precisa realizar hoje")
// listaTarefa[2] = prompt("Cite uma tarefa que você precisa realizar hoje")

//     console.log(listaTarefa)
// let ok = prompt("qual das tarefas você já realizou hoje? [0], [1] ou [2]")

// listaTarefa = listaTarefa.splice(ok) // Usando splice a partir do indice altomaticamente exclui 1 item = splice(ok,1)

// console.log(listaTarefa)