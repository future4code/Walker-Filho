
//---------- # Exercícios de interpretação de código ------------------------------------------------------------------

//1.  Leia o código abaixo

    // const filme = {
    //     nome: "Auto da Compadecida", 
    //     ano: 2000, 
    //     elenco: [
    //         "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    //         "Virginia Cavendish"
    //         ], 
    //     transmissoesHoje: [
    //         {canal: "Telecine", horario: "21h"}, 
    //         {canal: "Canal Brasil", horario: "19h"}, 
    //         {canal: "Globo", horario: "14h"}
    //         ]
    // }

    // console.log(filme.elenco[0])
    // console.log(filme.elenco[filme.elenco.length - 1])
    // console.log(filme.transmissoesHoje[2])


    //a) O que vai ser impresso no console?  

        //R: 1° Console.log motra primeiro iten do array - Matheus Nachtergaele
        //   2° Console.log mostra quarto inten do array - Virginia Cavendish
        //   3° Console.log mostra o canarray indaicado no objeto dois - canal: "Golbo", Horario: "14h"


//2. Leia o código abaixo

    // const cachorro = {
    //     nome: "Juca", 
    //     idade: 3, 
    //     raca: "SRD"
    // }
    
    // const gato = {...cachorro, nome: "Juba"}
    
    // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    // console.log(cachorro)
    // console.log(gato)
    // console.log(tartaruga)
    
    //a) O que vai ser impresso no console?

        //R: 1° console.log mostra os itens da "const cachorro" completa
        //   2° console.log mostra todos os itens da primeira "cost" e troca o nome para "Juba"
        //   3° consloe.log mostra todos os itens da segunda "const" e troca todas as letras "a" por "o"
    
    //b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

        //R: Chama para o console todos os itens que estão dentro do objeto chamadopela ação.


//3. Leia o código abaixo

    // function minhaFuncao(objeto, propriedade) {
    //     return objeto[propriedade]
    // }
    
    // const pessoa = {
    //   nome: "Caio", 
    //   idade: 23, 
    //   backender: false
    // }
    
    // console.log(minhaFuncao(pessoa, "backender"))
    // console.log(minhaFuncao(pessoa, "altura"))
    
        //a) O que vai ser impresso no console?

        //R:  1° console.log mostra o terceiro iten da "const" - false
            //2° console.log mostra erro, ão tem "altura" nos parametros do objeto 
    
        //b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

        //R:


//---------- # Exercícios de escrita de código ------------------------------------------------------------------------
/*
        // 1°- a
const dadosPessoais = {
    nome: "João" ,
    apelido: ["jão" ,"Jãozinho" ,"Zéjão"]
}
const apelido2 = [...apelido, "janjão"]

function meusApelidos(objeto) {
    console.log(`Eu sou ${dadosPessoais.nome}, mas pode me chamar de: 
    ${dadosPessoais.apelido}`)
}
meusApelidos()
*/

        //2° - a
const dados1 = {
    nome: "joão",
    idade: 50.,
    profissao: "medico"
}
const dados2 = {
    nome: "Camila",
    idade: 30,
    profissao: "advogada"
}
function analiseDados1(pessoa) {
    const arrayDados1 = [dados1.nome, dados1.nome.length, dados1.idade, dados1.profissao.length]
    return arrayDados1
}
analiseDados1()
