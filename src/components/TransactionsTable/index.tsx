import { Container } from "./styles";

export function TransactionsTable() {
  return ( 
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="titleDescription">Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td className="titleDescription">Hamburguer</td>
            <td className="withdraw">- R$59.00</td>
            <td>Alimentação</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td className="titleDescription">Aluguel do apartamento</td>
            <td className="withdraw">R$2.000</td>
            <td>Casa</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td className="titleDescription">Computador</td>
            <td className="deposit">R$2.000</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}