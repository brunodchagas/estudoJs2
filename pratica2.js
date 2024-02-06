class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    apresentar(){
        console.log(`Olá, eu sou ${this.nome}, e tenho ${this.idade} anos.`);
    }

    trabalhar (){
        console.log(`Eu sou ${this.cargo}`);
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome,idade,cargo)
        this.departamento = departamento;
    }
    gerenciar (){
        console.log(`Eu gerencio o departamento da ${this.departamento}.`)
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome,idade,cargo)
        this.linguagem = linguagem;
    }

    programar(){
        console.log(`E programo com ${this.linguagem}.`)
    }
}

p2 = new Gerente ("Juliane", "30","Gerente","Contabilidade")
p2.apresentar();
p2.trabalhar();
p2.gerenciar();

p3 = new Desenvolvedor("Bruno","33","Desenvolvedor","JavaScript")
p3.apresentar();
p3.trabalhar();
p3.programar();
