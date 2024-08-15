"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importar class que quer usar
const pessoa_1 = require("./pessoa");
//instanciar (criar objeto)
const pessoa1 = new pessoa_1.Pessoa('Felisberto', 25);
const pessoa2 = new pessoa_1.Pessoa('Maria', 21);
console.log(pessoa1.getNome());
console.log(pessoa2.getIdade());
//# sourceMappingURL=testePessoa.js.map