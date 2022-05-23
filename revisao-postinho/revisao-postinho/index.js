
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
    
    return `No comparador de igualdade ${a} === ${b} é ${a === b}`// Comparação dos parametros (a) e (b) se são completamente iguais.
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
// const nomeDoUsuario = prompt("Digite aqui o seu nome!")
// const anoDeNascimento = Number(prompt("Digite aqui o ano de seu nascimento!"))
// const senhaDoUsuario = prompt("Digite aqui uma senha com no mínimo 6 caracteres!")
// const nacionalidade = prompt("Digite aqui qual a sua nacionalidade!").toLowerCase()

const cadastro = (nome, anoNascimento, senha, nacionalidade) => {//Aqui está o nome da função e os (parametros) pedidos
    const usuario = [] // Aqui está o array que vai conter os parâmetros a serem comparados na função.
    let maiorIdade = 2022 - anoDeNascimento // Aqui está verificando se o usuario é maior de idade comparando ano atual - o ano de nascimento inserido por ele.
    if (maiorIdade >= 18 && (senha.length >= 6) && nacionalidade === "brasileiro" ){
    // O if faz a comparação dos paramentros com o que a questão está pedindo e vendo se as tres informações correspondem ao que o sistema pede.
        usuario.push(nome,anoNascimento,senha,nacionalidade) // Aqui estamos colocando os parâmetros exigidos dentro do array usuario
    } 
    return usuario // esse é o retorno de todos os comparativos feitos pela função
}
// console.log(cadastro(nomeDoUsuario, anoDeNascimento, senhaDoUsuario,nacionalidade));

// // Exercício 4-----------------------------------------------------------------------------------------------

//const senhaUsuario = prompt("Digite aqui a senha que você cadastrou!").toLowerCase() // Estamos solicitando a senha criada pelo usuário.

const login = (confirmaSenha) => { // nome da função mais os parâmetros a serem comparados.
    const login = "labenu" // está é a senha já cadastrada pelo usuario antigamente que se encontra no banco de dados
    if (confirmaSenha === login){// if (SE) está fazendo a comparação se a senha digitada pelo usuário é a mesma que ele cadastrou no banco de dados.
        return 'Usuario Logado'// mensagem que irá aparecer ao usuário caso o comparativo feito seja positivo.
    } else {//o else (SE NÃO)é se o comparativo feito for negativo
        return 'Senha Inválida'// mensagem que aparecerá para o usuário caso os comparativos deêm negativo.
    }
}
//console.log(login(senhaUsuario));

// // Exercício 5----------------------------------------------------------------------------------------------------

//const usuarioName = prompt("Digite aqui seu nome!")//Solicitação ao usuário para informar o nome.
//const vacinaTomada = prompt("Digite aqui qual vacina você tomou na primeira dose!").toLowerCase()// solicitação ao usuário de qual vacina ele tomou na primeira dose.

const primeiraDose = (nomeUser, vacinaUser) => { // Nome da função e os parametrôs que serviram de base para a função!
    let tempo = []//fiz um array pra armazenar as informações de quanto tempo falta para o usuário tomar a segunda dose, que serão recebidas de acordo com a vacina tomada. 
    let data = []// fiz um array pra armazenar as informações da data para a segunda dose.
    if(vacinaUser === "coronavac"){//comparação se a primeira que o usuário tomou foi "coronavac".
        tempo.push("28")// aqui eu incluo no array tempo quantos dias faltão para a segunda dose.
        data.push("18/06/2022") // aqui eu incluo no array a data que o usuário deverá tomar a segunda dose.
        return `Olá ${nomeUser}! A próxima dose da ${vacinaUser} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`//mensagem com as informações pedidas do usuário que tomou "coronavac"
        } else if (vacinaUser === "astrazenica"){ //comparação se a primeira que o usuário tomou foi "astrazenica".
        tempo.push("90")// aqui eu incluo no array tempo quantos dias faltão para a segunda dose.
        data.push("21/08/2022") // aqui eu incluo no array a data que o usuário deverá tomar a segunda dose.
            return `Olá ${nomeUser}! A próxima dose da ${vacinaUser} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`//mensagem com as informações pedidas do usuário que tomou "astrazenica"
        } else if (vacinaUser === "pfizer"){//comparação se a primeira que o usuário tomou foi "pfizer".
        tempo.push("90")// aqui eu incluo no array tempo quantos dias faltão para a segunda dose.
        data.push("21/08/2022") // aqui eu incluo no array a data que o usuário deverá tomar a segunda dose.
            return `Olá ${nomeUser}! A próxima dose da ${vacinaUser} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`//mensagem com as informações pedidas do usuário que tomou "pfizer"
    }
 }
 //console.log(primeiraDose(usuarioName,vacinaTomada))


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

/*Escreva uma função para validar a segunda dose de um usuário, que receba o nomeDoUsuário e mude o valor 
da propriedade imunização para “completa” para isso vamos te fornecer uma lista de usuários.*/

const segundaDose = (nomeDoUsuario) => {// Nome da função e parametrô que será usado (nesse caso "Barbara")
    //console.log(nomeDoUsuario)
    const usuarios = [// Array com a lista fornecida
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    for(let pessoa of usuarios){//variavel criada para varrer a lista do usuários
    //console.log(pessoa)
        if (nomeDoUsuario === pessoa.nome) {// Aqui usa-se o paramentro de comparação (nomeDoUsuario) com a lista de varredura sendo acessada através do nome
            pessoa.imunizacao = "completa"// após ter encontrado dentro da lista fornecida aqui é feita a troca de ("incompleta") para ("completa")
            return pessoa // aqui retorna o parametro encontrado já com a alteração.
        }
    }
}
console.log(segundaDose("Barbara"));// chamada da função com o parâmetro a ser buscado.

// // Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {//Como a lista que vou comparar está em um array dentro da função não precisarei de parametro externo.
    const usuarios = [ // array fornecido pelo sistema a ser comparado
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    for(let user of usuarios){ // usando o for para buscar fazer a varredura no array usuarios
        if (user.imunizacao === "incompleta"){// verificando dentro do array quem está com a imunização "incompleta"
     console.log( `Olá ${user.nome}! Sua imunização está ${user.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)   
    // no console log após ter encontrado o parametro "incompleta" eu utilizo os dados do (NOME) para enviar a mensagem
    }
    }
}
avisoAosAtrasados();// chamada da função


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


/*No desafio, ao invés de cadastrar o usuário enviando para o array, você vai adicionar as informações recebidas pelo prompt a um objeto
 e então adicioná-lo ao array usuarios.*/

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