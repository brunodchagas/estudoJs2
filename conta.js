class ContaCliente{

    constructor(nomeroConta,saldo,debito,credito){
        this.nomeConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }

    calcularSaldoAtual(){
        return this.saldo - this.debito + this.credito
    }

    verificarSaldo(){
        const saldoAtual = this.calcularSaldoAtual()
        if(saldoAtual >= 0){
            alert("Saldo positivo R$ " + saldoAtual)
        }else{
            alert("Saldo negativo R$ " + saldoAtual)
        }
    }
}

let numeroConta = prompt("Digite o numero da conta do cliente")
let saldo = parseFloat(prompt("Digite o saldo do cliente"))
let debito = parseFloat(prompt("Digite o debito do cliente"))
let credito = parseFloat(prompt("Digite o credito do cliente"))

let conta = new ContaCliente(numeroConta,saldo,debito,credito)
conta.verificarSaldo();