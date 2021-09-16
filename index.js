import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//Cadastrando uma senha (o m�todo cadastrarSenha est� na classe Funcionario)
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("1234");

//Cadastrando uma senha (o m�todo cadastrarSenha est� na classe Funcionario)
//                         (nome,    salario,        cpf)
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("4321");

//                         (nome,     cpf,      senha)
const cliente = new Cliente("La�s", 78945612379,"456");

/* Criando "const algumacoisaEstaLogado = classe SistemaAutenticacao".chamando o m�todo login passando o par�metro (funcion�rio,senha). 
Caso passasse uma senha dentro do par�metro diferente da senha do cadastrarSenha, o resultado sair� FALSE. */
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "4321");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);

