import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])

    return(
        <Container>
            <table>
                <tr>
                    <th>Título </th>
                    <th>Valor </th>
                    <th>Categoria </th>
                    <th>Data </th>
                </tr>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Sites</td>
                        <td className="deposit">R$ 12.000</td> {/* classname pra mudar a cor pra verde quando for entrada */}
                        <td>Desenvolvimento</td>
                        <td>20/02/20221</td>
                    </tr>
                    <tr>
                        <td>Desv de Site</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/20221</td>
                    </tr>
                    <tr>
                        <td>Pagamento servidor</td>
                        <td className="withdraw">- R$ 1000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/20221</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}