// //1. Leia o código abaixo
    
//     function minhaFuncao(variavel) {
//     	return variavel * 5
//     }
    
//     console.log(minhaFuncao(2)) // Resultado = 10
//     console.log(minhaFuncao(10))// Resultado = 50

    
// /* a) O que vai ser impresso no console?  
// 10
// 50
// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` 
// e `minhaFuncao(10)`? O que apareceria no console?
// TERIAMOS A MESMA RESPOSTA 10 50*/

// ==========================================================================================================

// // 2. Leia o código abaixo
    
    
//     let textoDoUsuario = prompt("Insira um texto");
    
//     const outraFuncao = function(texto) {
//     	return texto.toLowerCase().includes("cenoura")
//     }
    
//     const resposta = outraFuncao(textoDoUsuario)
//     console.log(resposta)
    
//     /*a. Explique o que essa função faz e qual é sua utilidade

//     ESSA FUNÇÃO SERVE PARA DEIXA O TEXTO DIGITADO PELO USUARIO EM CAIXA BAIXA E VERIFICA SE POSSUI
//     O OBJETO "cenoura" NO TEXTO DIGITADO. SE SIM RETORNARÁ true SE NÃO RETONARA false.

//     b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

//         i.   `Eu gosto de cenoura` ------------ RESPOSTA (TRUE) 
//         ii.  `CENOURA é bom pra vista` -------- RESPOSTA (TRUE)
//         iii. `Cenouras crescem na terra` ------ RESPOSTA (TRUE)

//=============================================================================================================
//                         EXERCÍCIOS DE ESCRITA DE CÓDIGO

 /*1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem 
    falando algumas informações sobre você, como: 
    
    "Eu sou CAIO, tenho 23 anos, moro em SÃO PAULO e sou ESTUDANTE."
    
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
    Lembrando que a função não possui entradas, apenas imprime essa mensagem.*/

    function vazio () {
       
        console.log("Eu sou Lucas, tenho 34 anos, moro em Uberlândia e sou estudante.")  
    }
    vazio()

    // ESTAVA DANDO ERRADO POIS EU NÃO HAVIA CHAMADO A FUNÇÃO FORA DELA.


/*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string),
 a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as 
 informações da pessoa em uma só mensagem com o template:*/

 /*- EXEMPLO
    Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:
    `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`*/

    function impressao (nome, idade,endereco,profissao){
        nome = "Eu sou Lucas, tenho "
        idade = 34
        endereco = " anos, moro em rua Agnelo Fagundes de sousa 338 "
        profissao = " e sou estudante."
        
        const tudoJunto = nome + idade + endereco + profissao
        console.log(tudoJunto)    
        return tudoJunto    
    }
    impressao()

    // =======================================================================================================

    /*2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
    faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/

    
    function somar(num1, num2) {
        
        return(num1+num2)  
    }
    
    resultado = somar(23,25)
    console.log(resultado)


    /*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é 
    **maior ou igual** ao segundo.*/

    function maiorQue(numero1, numero2){

        return(numero1 >= numero2)
    }
    result = maiorQue(50,47)
    console.log(result)

    //c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não


    function parImpar(parOuImpar){
        return(parImpar)
    }



    //d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.


    //num1 = Number(prompt("Escreva um numero qualquer!"))
    //num2 = Number(prompt("escreva outro numero!"))

//================================================================================================================

/*3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
    
    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10*/
    
    // - 💡  Dica
        
    //     <aside>
    //     ⭐ Lembre-se de converter a entrada do usuário para número antes de fazer os cálculos :)
        
    //     </aside>
    



