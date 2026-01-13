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
  "Contrato X",
  "Conteudo Padrão",
  "Grupo BFD",
  "IFPA",
  "Todos os direitos reservados ©"
);

const contractA = contratoBase.clone();
contractA.titulo = "Contract A";

console.log(contractA);
