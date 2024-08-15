"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    //CONSTRUTOR
    constructor(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }
    // METODOS GET E SET NOME
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    //METODOS GET SET IDADE
    getIdade() {
        return this.idade;
    }
    setIdade(_idade) {
        this.idade = _idade;
    }
    //METODOS DIAGRAMA
    idadePessoa() {
        return this.idade;
    }
    aniversario() {
        this.idade++;
        return this.idade;
    }
    correr() {
        console.log(`${this.nome} estácorrendo...RUN ${this.nome}RUN`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.js.map