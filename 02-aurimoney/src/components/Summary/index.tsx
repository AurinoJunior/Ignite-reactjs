import { useContext } from 'react'

import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import totalImage from '../../assets/total.svg'

import { Container } from './styles'

import { Card } from './Card'
import { TransactionContext } from '../../TransactionContext'


export const Summary = () => {
  const { transactions } = useContext(TransactionContext)

  const summaryValues = transactions.reduce((acc, transactions) => {
    if(transactions.type === 'income') {
      acc.income += transactions.value;
      acc.total += transactions.value;
    } else {
      acc.outcome += transactions.value;
      acc.total -= transactions.value;
    }

    return acc
  }, {
    income: 0,
    outcome: 0,
    total: 0
  })

  return (
    <Container>
      <Card
        type="Entrada"
        image={incomeImage}
        alt="Entrada"
        value={summaryValues.income}
      />

      <Card
        type="Saída"
        image={outcomeImage}
        alt="Saída"
        value={summaryValues.outcome * -1}
      />

      <Card
        className="summary_highlight"
        type="Saldo"
        image={totalImage}
        alt="Saldo"
        value={summaryValues.total}
      />
    </Container>
  )
}
