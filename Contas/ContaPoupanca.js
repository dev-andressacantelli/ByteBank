import { Conta } from "./Conta.js";

// Tudo o que existe na classe CONTA, será extendido para a classe CONTA POUPANÇA através de HERANÇA;
export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia); // Esse super está chamando o construtor da classe conta -> constructor(saldoInicial, cliente, agencia);
    }
}