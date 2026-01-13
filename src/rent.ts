import { Contract } from "./prototype";

class RentalContract extends Contract {
  constructor(
    titulo: string,
    conteudo: string,
    empresa: string,
    contratante: string,
    rodape: string,
    public valorAluguel: number
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
      this.valorAluguel
    );
  }
}

const modeloAluguel = new RentalContract(
  "Exemplo de contrato",
  "Conteúdo padrão",
  "BFD",
  "Exemplo Contratante",
  "Todos os Direitos Reservados",
  100
);

const contratoAluguel1 = modeloAluguel.clone();
contratoAluguel1.valorAluguel = 2500;

console.log(contratoAluguel1);
