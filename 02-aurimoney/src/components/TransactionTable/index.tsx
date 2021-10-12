import { useContext } from 'react'
import { TransactionContext } from '../../TransactionContext'
import { Container } from './styles'


export const TransactionTable = () => {

  const { transactions } = useContext(TransactionContext)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(
                  transaction.type === 'outcome'
                    ? transaction.value * -1
                    : transaction.value
                )}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR')
                  .format(new Date(transaction.createdAt))
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
