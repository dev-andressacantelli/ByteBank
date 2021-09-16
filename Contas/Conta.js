/* Essa classe é uma classe ABSTRATA, que é uma classe que não pode ser instanciada,
ou seja, não pode-se criar objetos dessa classe, ela apenas existe para ser herdada por outras classes; */

export class Conta{
    constructor(saldoInicial, cliente, agencia){

        /* Se meu construtor for do tipo CONTA,
        não deve ser instanciado (não deve-se criar um objeto dessa classe CONTA, a mesma só serve para ser herdada)
        portanto, cria-se o if e um ERRO (throw new Error) para o dev saber que se chamar na INDEX um "new conta", 
        receberá essa mensagem; */
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta pois essa é uma classe abstrata")
        }      

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if(novovalor instanceof Cliente) { 
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    } 
 
    /* Método abstrato (vazio de especificação) serve p/ que seja subescrevido nas classe flhas, 
    sendo assim cada classe filha definirá seu método sacar, 
    no nosso projeto cada classe tem seu método sacar com uma taxa específica de cada classe,
    aqui o método é preenchido com erro para alertar caso não tenha subescrito o método na classe filha. */
    sacar(valor) {
        throw new Error("O método sacar da classe CONTA (classe mãe) é abstrato");
    }

    /* Criando um método privado dentro da classe, o JS entende que não é o mesmo que o de cima (sacar)
    declarando que preciso de um VALOR e uma TAXA p/ realizar o valorSacado = taxa * valor; */
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
         // Caso não tenha saldo suficiente p/ sacar, não entra no if, então retorna 0;
        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    } 
}

/* Entendendo os níveis

Público - Usado por qualquer um
this.agencia = agencia;

Privado - Usado apenas dentro da classe mãe
this._agencia = agencia;

Protegido - Usado por quem herda a classe E a própria classe
usando o método privado _sacar dentro da classe CONTACORRENTE (herdando da classe mãe CONTA) 
dentro do método público sacar:

 sacar(valor) {
     let taxa = 1.1; 
     return this._sacar(valor, taxa); 
 }

*/