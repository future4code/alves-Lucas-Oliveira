/*                      EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

1. Leia o código abaixo:*/
    
    // const respostaDoUsuario = prompt("Digite o número que você quer testar")
    // const numero = Number(respostaDoUsuario)
    
    // if (numero % 2 === 0) {
    //   console.log("Passou no teste.")
    // } else {
    //   console.log("Não passou no teste.")
    // }
    
    /*a) Explique o que o código faz. Qual o teste que ele realiza? 
    RESPOSTA
    O if pega a const (respostaDoUsuario) transformada em Number (numero),e pergunta se essa resposta é === 0
    IDENTICA a 0 (O NUMERO DIGITADO PELO USUARIO RESTA (%)2 ) isso dará 1 ou 0
    se a resposta for 0 o console imprime "Passou no teste." ===> POIS O NUMERO INSERIDO É IMPAR.
    e se (else) não for igual a 0 o console imprime "Não passou no teste." POPIS O NUMERO INSERIDO É PAR.
    
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
    RESPOSTA
    Numeros PARES.

    c) Para que tipos de números a mensagem é "Não passou no teste"?
    RESPOSTA
    Numeros IMPARES. */
 
//----------------------------------------------------------------------------------------------------------------
    
/*2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas 
tarefas de um supermercado:*/
    
    // let fruta = prompt("Escolha uma fruta")
    // let preco
    // switch (fruta) {
    //   case "Laranja":
    //     preco = 3.5
    //     break;
    //   case "Maçã":
    //     preco = 2.25
    //     break;
    //   case "Uva":
    //     preco = 0.30
    //     break;
    //   case "Pêra":
    //     preco = 5.5
    //     break // BREAK PARA O ITEM c.
    //   default:
    //     preco = 5
    //     break;
    // }
    // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    
/*a) Para que serve o código acima?
RESPONTA
Serve para mostrar ao usuario o valor dá fruta que ele inserir no prompt
    
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
RESPOSTA
"O preço da fruta, "Maçã", é, R$2.25

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos
 o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
 RESPOSTA
 Mostraria a fruta "Pêra" mas com o valor de 5 (POIS USARIA O ULTIMO PRECO ANTES DO BREAK(no caso deo default seria impresso)). 
 
//-----------------------------------------------------------------------------------------------------------------

/*3. Leia o código abaixo:*/
    

    // const numero = Number(prompt("Digite o primeiro número."))
    
    // if(numero > 0) {
    //   console.log("Esse número passou no teste")
    // 	let mensagem = "Essa mensagem é secreta!!!"
    // }
    
    // console.log(mensagem)

/*a) O que a primeira linha está fazendo?
RESPOSTA
Está solicitando ao usuario para digitar um numero no prompt e transformando a "string" em Number
    
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
RESPOSTA
para a resposta 10 será impresso a mensagem impressa será "Esse número passou no teste".
para a resposta -10 não será impresso nada no console.

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
RESPOSTA
Sim --- Pois a let mensagem foi chamada, mas está dentro no if*/

// ==============================================================================================================

// /*1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode 
// dirigir (apenas maiores de idade).
 
// // a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.*/

let idadeUsuario = +prompt("Digite aqui sua idade!")
    
// /*b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.*/

//idadeUsuario = Number
    
// /*c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
// imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`*/

if (idadeUsuario>= 18){
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

// ==========================================================================================================

/*2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`*/

let perguntaAluno = prompt("Digite aqui M para (matutino), V para (vespertino) e N para (Noturno).").toUpperCase()

//console.log(perguntaAluno)
 if(perguntaAluno === "M"){
     console.log("Bom dia!")
    }
else if(perguntaAluno === "V") {
     console.log("Boa tarde!")
 }else if(perguntaAluno === "N") {
     console.log("Boa noite!")
 }

// ========================================================================================

/* 3 Repita o exercício anterior, mas utilizando a estrutura de switch case agora.*/

switch(perguntaAluno){
     case 'M':
    console.log("Bom dia!");
    break;
        case 'V':
        console.log("Boa tarde!");
        break; 
            case 'N':
            console.log("Boa noite!");
            break;
            }

//==========================================================================================

/* 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só
assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está 
abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que 
vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo 
ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem:
 `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`*/

 let generoFilme = prompt("Digite aqui qual o gênero do filme que vamos assistir!").toLowerCase()
 let valorDoIngresso = +prompt("Qual o valor do ingresso?")
//console.log(generoFilme)
//console.log(valorDoIngresso)
   if (generoFilme === "fantasia" && valorDoIngresso < 15){
        console.log("Bom filme!")
    
   } else {
       console.log("Escolha outro filme!")
   }

// ==========================================================================================



