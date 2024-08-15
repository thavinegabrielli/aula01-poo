export class Pessoa {

    //ATRIBUTOS
    private nome: string;
    private idade: number;

    //CONSTRUTOR
    public constructor(_nome: string, _idade: number){
        this.nome =_nome;
        this.idade =_idade;
    }

    // METODOS GET E SET NOME
    public getNome(): string{
          return this.nome;
}
    public setNome (_nome: string):void{
        this.nome = _nome;
    }
   
    //METODOS GET SET IDADE
    public getIdade(): number{
        return this.idade;
}
  public setIdade (_idade: number):void{
      this.idade= _idade;
  }

  //METODOS DIAGRAMA
  public idadePessoa(): number{
      return this.idade;
  }

  public aniversario(): number{
    this.idade++;
    return this.idade;
  }

  public correr(): void{
    console.log(`${this.nome} estácorrendo...RUN ${this.nome}RUN`);
  }
}

