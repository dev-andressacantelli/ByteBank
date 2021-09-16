/*
Ser autenticavel significa ter o método "autenticar";

Aqui utilizamos o "Duck type" que consiste em uma definição que o JS utiliza pois é fracamente tipado,
sendo assim, o duck typing age deduzindo que se anda como um pato, fala como um pato, deve ser um pato.
O JS age dessa forma para que não seja necessário pré definir um tipo, mas sim, um método, como na linha:

'return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function' 

Onde estamos verificando uma instancia do MÉTODO FUNCTION,
para que não seja necessário instanciar cada outra classe utilizado a longo do projeto,
pois caso contrário precisaria criar diversos if's instanciando CADA CLASSE.

Então ao ver a linha de código:

'return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function'

Estou definindo que se ele tem a propriedade que eu quero usar (function), então eu vou usa-lo daquela maneira.

*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if (SistemaAutenticacao.ehAutenticavel (autenticavel)){//criando condição p/ verificar autenticação da senha;
            return autenticavel.autenticar(senha);
        }
        return false; //se não verificar, retornará false;
    }

    //Criando método ehAutenticavel e passando o paramentro autenticavel
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function 
        /* "in" verifica se uma chave existe dentro do objeto autenticável,
           "instanceof" verifica se um objeto é uma instancia de outro objeto, aqui no caso é FUNCTION,
           pois estou querendo executar direto uma função, mas poderia ser substituido por CLIENTE, 
           caso precisasse instanciar algum objeto dessa classe cliente;
        */
    }
}