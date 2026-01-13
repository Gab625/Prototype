class Document {
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
}

const contrato1 = new Document(
  "Contrato A",
  "Conteudo ...",
  "Empresa BFD",
  "UEPA",
  "Todos os Direitos Reservados"
);

const contrato2 = new Document(
  "Contrato B",
  "Conteudo ...",
  "Empresa BFD",
  "IFPA",
  "Todos os Direitos Reservados"
);

const contrato3 = new Document(
  "Contrato C",
  "Conteudo ...",
  "Empresa BFD",
  "UFPA",
  "Todos os Direitos Reservados"
);

console.log(contrato1);
console.log(contrato2);
console.log(contrato3);
