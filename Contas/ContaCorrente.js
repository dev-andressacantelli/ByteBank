import { Conta } from "./Conta.js";

// Tudo o que existe na classe CONTA, ser� extendido para a classe CONTA CORRENTE atrav�s de HERAN�A;
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia);//esse super est� chamando o construtor da classe conta -> constructor(saldoInicial, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    /* Criando um m�todo (p�blico) sacar incluindo uma TAXA, puxando o m�todo _sacar (privado) da clsse m�e(CONTA);
    M�todo sacar est� sobrescrevendo o comportamento de _sacar; */
    sacar(valor) {
        let taxa = 1.1; // Colocando uma taxa de 10% sobre valor sacado em conta-corrente;
        return this._sacar(valor, taxa); // Acessando por heran�a o que vem do m�todo _sacar dentro da classe CONTA;
        // Poderia utilizar -> super._sacar (); Daria o mesmo resultado;
    }
}

/*Quando derivamos uma classe por heran�a, � necess�rio chamar o super,
ele sempre estar� referenciado � classe EXTENDIDA, se alterar essa classe, 
altera-se automaticamente a referencia desse construtor.  */