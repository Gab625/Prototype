import { Contract } from "./prototype";

class RentalContract extends Contract {
  constructor(
    titulo: string,
    conteudo: string,
    empresa: string,
    contratante: string,
    rodape: string,
    public valorRenda: number
  ) {
    super(titulo, conteudo, empresa, contratante, rodape);
  }

  clone(): RentalContract {
    return new RentalContract(
      this.titulo,
      this.conteudo,
      this.empresa,
      this.contratante,
      this.rodape,
      this.valorRenda
    );
  }
}

const modeloAluguel = new RentalContract(
  "Aluguel Base",
  "Conteúdo padrão",
  "BFD",
  "Ninguém",
  "Rodapé",
  1000
);

const contratoAluguel1 = modeloAluguel.clone();
contratoAluguel1.valorRenda = 2500;

console.log(contratoAluguel1);
