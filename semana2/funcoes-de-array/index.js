
//========== # Exercícios de interpretação de código ==================================================================

//1.  Leia o código abaixo

        // const usuarios = [
        //   { nome: "Amanda Rangel", apelido: "Mandi" },
        //   { nome: "Laís Petra", apelido: "Laura" },
        //   { nome: "Letícia Chijo", apelido: "Chijo" }
        // ]

        // const novoArrayA = usuarios.map((item, index, array) => {
        //    console.log(item, index, array)
        // })

        //a) O que vai ser impresso no console?
                //R: Será impresso todos os nomes, todos os apelidos e todos os três arrays.

//2. Leia o código abaixo

        // const usuarios = [
        //   { nome: "Amanda Rangel", apelido: "Mandi" },
        //   { nome: "Laís Petra", apelido: "Laura" },
        //   { nome: "Letícia Chijo", apelido: "Chijo" },
        // ]

        // const novoArrayB = usuarios.map((item, index, array) => {
        //    return item.nome
        // })

        // console.log(novoArrayB)

        //a) O que vai ser impresso no console?
                //R: Será impresso somente o "nome" dos três arrays. 

//3. Leia o código abaixo

        // const usuarios = [
        //   { nome: "Amanda Rangel", apelido: "Mandi" },
        //   { nome: "Laís Petra", apelido: "Laura" },
        //   { nome: "Letícia Chijo", apelido: "Chijo" },
        // ]

        // const novoArrayC = usuarios.filter((item, index, array) => {
        //    return item.apelido !== "Chijo"
        // })

        // console.log(novoArrayC)

        //a) O que vai ser impresso no console?
                //R: Será impresso os dois primeiros arrays.

//========== # Exercícios de escrita de código ========================================================================

        // 1°

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]
        //a)
// const nomesPets = pets.map((item, index) => {
//     return item.nome
// })
// console.log(nomesPets)

        //b)
// const racaPets = pets.filter((item) => {
//     return item.raca === "Salsicha"
// })
// console.log(racaPets)

        //c)

// const nomePets = pets.filter((pet, item) => {
//         return pet.raca === "Poodle"
// })
// const descontoDeRaca = nomePets.map((item, index) => {
//          return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}.`
// })
// console.log(descontoDeRaca)


        // 2°

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]       

        // a)
// const nomesProdutos = produtos.map((produto) => {
//          return produto.nome
// })
// console.log(nomesProdutos)                 

        // b)
// const descontoProdutos = produtos.map((produto, tipo, valor) => {
//     return 
// })
// console.log(descontoProdutos)

        //c)
// const produtosBebidas = produtos.filter((produto) => {
//     return produto.categoria === "Bebidas"
// }) 
// console.log(produtosBebidas)

        //d) x
//const marcaYpe = produtos.filter((item) => {
//     return item.nome === "Ypê"
// })
// console.log(marcaYpe)

        //e) x

