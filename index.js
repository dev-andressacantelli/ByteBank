import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//Cadastrando uma senha (o método cadastrarSenha está na classe Funcionario)
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("1234");

//Cadastrando uma senha (o método cadastrarSenha está na classe Funcionario)
//                         (nome,    salario,        cpf)
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("4321");

//                         (nome,     cpf,      senha)
const cliente = new Cliente("Laís", 78945612379,"456");

/* Criando "const algumacoisaEstaLogado = classe SistemaAutenticacao".chamando o método login passando o parâmetro (funcionário,senha). 
Caso passasse uma senha dentro do parâmetro diferente da senha do cadastrarSenha, o resultado sairá FALSE. */
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "4321");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);

