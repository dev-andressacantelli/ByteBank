import { Conta } from "./Conta.js";

// Tudo o que existe na classe CONTA, será extendido para a classe CONTA CORRENTE através de HERANÇA;
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia);//esse super está chamando o construtor da classe conta -> constructor(saldoInicial, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    /* Criando um método (público) sacar incluindo uma TAXA, puxando o método _sacar (privado) da clsse mãe(CONTA);
    Método sacar está sobrescrevendo o comportamento de _sacar; */
    sacar(valor) {
        let taxa = 1.1; // Colocando uma taxa de 10% sobre valor sacado em conta-corrente;
        return this._sacar(valor, taxa); // Acessando por herança o que vem do método _sacar dentro da classe CONTA;
        // Poderia utilizar -> super._sacar (); Daria o mesmo resultado;
    }
}

/*Quando derivamos uma classe por herança, é necessário chamar o super,
ele sempre estará referenciado à classe EXTENDIDA, se alterar essa classe, 
altera-se automaticamente a referencia desse construtor.  */