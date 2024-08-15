//importar class que quer usar
import {Pessoa} from './pessoa';

//instanciar (criar objeto)
const pessoa1:Pessoa = new Pessoa('Felisberto', 25); 
const pessoa2:Pessoa = new Pessoa('Maria', 21); 

console.log(pessoa1.getNome());
console.log(pessoa2.getIdade());