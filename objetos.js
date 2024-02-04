// forma de criar objetos
const pessoa = {
    nome:'Lucas',
    sobreNome:'Silva'
}

console.log(pessoa['sobreNome'])

// Segunda forma de criar objetos
const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sobreNome = "Joao"

console.log(funcionario.nome)

// Terceira forma de criar objetos

function criarPessoa (nome,sobreNome, i){
    return {
        nome,
        sobreNome,
        idade:i,
        nomeCompleto(){
            return `${this.nome} ${this.sobreNome}`
        }
    
    }
}

const p1 = criarPessoa("Arthur","Silva",20)

const p2 = criarPessoa("João","Silva",34)

console.log(p1.nomeCompleto())
console.log(p2)