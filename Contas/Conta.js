/* Essa classe � uma classe ABSTRATA, que � uma classe que n�o pode ser instanciada,
ou seja, n�o pode-se criar objetos dessa classe, ela apenas existe para ser herdada por outras classes; */

export class Conta{
    constructor(saldoInicial, cliente, agencia){

        /* Se meu construtor for do tipo CONTA,
        n�o deve ser instanciado (n�o deve-se criar um objeto dessa classe CONTA, a mesma s� serve para ser herdada)
        portanto, cria-se o if e um ERRO (throw new Error) para o dev saber que se chamar na INDEX um "new conta", 
        receber� essa mensagem; */
        if(this.constructor == Conta){
            throw new Error("Voc� n�o deveria instanciar um objeto do tipo conta pois essa � uma classe abstrata")
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
 
    /* M�todo abstrato (vazio de especifica��o) serve p/ que seja subescrevido nas classe flhas, 
    sendo assim cada classe filha definir� seu m�todo sacar, 
    no nosso projeto cada classe tem seu m�todo sacar com uma taxa espec�fica de cada classe,
    aqui o m�todo � preenchido com erro para alertar caso n�o tenha subescrito o m�todo na classe filha. */
    sacar(valor) {
        throw new Error("O m�todo sacar da classe CONTA (classe m�e) � abstrato");
    }

    /* Criando um m�todo privado dentro da classe, o JS entende que n�o � o mesmo que o de cima (sacar)
    declarando que preciso de um VALOR e uma TAXA p/ realizar o valorSacado = taxa * valor; */
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
         // Caso n�o tenha saldo suficiente p/ sacar, n�o entra no if, ent�o retorna 0;
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

/* Entendendo os n�veis

P�blico - Usado por qualquer um
this.agencia = agencia;

Privado - Usado apenas dentro da classe m�e
this._agencia = agencia;

Protegido - Usado por quem herda a classe E a pr�pria classe
usando o m�todo privado _sacar dentro da classe CONTACORRENTE (herdando da classe m�e CONTA) 
dentro do m�todo p�blico sacar:

 sacar(valor) {
     let taxa = 1.1; 
     return this._sacar(valor, taxa); 
 }

*/