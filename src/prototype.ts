export interface Prototype<T> {
  clone(): T;
}

export class Contract implements Prototype<Contract> {
  public titulo: string;
  public conteudo: string;
  public empresa: string;
  public contratante: string;
  public rodape: string;

  constructor(
    titulo: string,
    conteudo: string,
    empresa: string,
    contratante: string,
    rodape: string
  ) {
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.empresa = empresa;
    this.contratante = contratante;
    this.rodape = rodape;
  }

  clone(): Contract {
    return new Contract(
      this.titulo,
      this.conteudo,
      this.empresa,
      this.contratante,
      this.rodape
    );
  }
}

const contratoBase = new Contract(
  "Exemplo de contrato",
  "Conteudo Padrão",
  "Grupo BFD",
  "Exemplo de empresa",
  "Todos os direitos reservados ©"
);

const contratoA = contratoBase.clone();
contratoA.titulo = "Contrato A";
contratoA.contratante = "IFPA";

const contratoB = contratoBase.clone();
contratoB.titulo = "Contrato B";
contratoB.contratante = "UEPA";

console.log(contratoA);
console.log(contratoB);
