/*
Ser autenticavel significa ter o m�todo "autenticar";

Aqui utilizamos o "Duck type" que consiste em uma defini��o que o JS utiliza pois � fracamente tipado,
sendo assim, o duck typing age deduzindo que se anda como um pato, fala como um pato, deve ser um pato.
O JS age dessa forma para que n�o seja necess�rio pr� definir um tipo, mas sim, um m�todo, como na linha:

'return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function' 

Onde estamos verificando uma instancia do M�TODO FUNCTION,
para que n�o seja necess�rio instanciar cada outra classe utilizado a longo do projeto,
pois caso contr�rio precisaria criar diversos if's instanciando CADA CLASSE.

Ent�o ao ver a linha de c�digo:

'return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function'

Estou definindo que se ele tem a propriedade que eu quero usar (function), ent�o eu vou usa-lo daquela maneira.

*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if (SistemaAutenticacao.ehAutenticavel (autenticavel)){//criando condi��o p/ verificar autentica��o da senha;
            return autenticavel.autenticar(senha);
        }
        return false; //se n�o verificar, retornar� false;
    }

    //Criando m�todo ehAutenticavel e passando o paramentro autenticavel
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function 
        /* "in" verifica se uma chave existe dentro do objeto autentic�vel,
           "instanceof" verifica se um objeto � uma instancia de outro objeto, aqui no caso � FUNCTION,
           pois estou querendo executar direto uma fun��o, mas poderia ser substituido por CLIENTE, 
           caso precisasse instanciar algum objeto dessa classe cliente;
        */
    }
}