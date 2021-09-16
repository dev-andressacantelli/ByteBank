import { Conta } from "./Conta.js";

// Tudo o que existe na classe CONTA, ser� extendido para a classe CONTA POUPAN�A atrav�s de HERAN�A;
export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia); // Esse super est� chamando o construtor da classe conta -> constructor(saldoInicial, cliente, agencia);
    }
}