const pessoa = {
    nome: 'Joao',
    idade: 25,
    profissão:"Desenvolvedor"
}

const pessoaJason = JSON.stringify(pessoa)
console.log(pessoa)
console.log(pessoaJason)

const pessoaObj = JSON.parse(pessoaJason)
console.log(pessoaObj)