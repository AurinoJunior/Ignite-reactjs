import { useState, FormEvent, useContext } from 'react'
import Modal from 'react-modal'
import { TransactionContext } from '../../TransactionContext'

import { Container, TransactionsTypeButtons } from './styles'

import close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'

Modal.setAppElement('#root')
interface TransactionModalProps {
  isOpen: boolean;
  shouldShowTransactionModal: () => void;
}

export const TransactionModal = ({ isOpen, shouldShowTransactionModal }: TransactionModalProps) => {

  const { createTransaction } = useContext(TransactionContext)

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState('income');

  async function handleSubmitTransactionForm(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      category,
      title,
      type,
      value
    })

    setTitle('')
    setCategory('')
    setType('income')
    shouldShowTransactionModal()
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={shouldShowTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={shouldShowTransactionModal}
      >
        <img src={close} alt="Fechar" />
      </button>

      <Container onSubmit={handleSubmitTransactionForm}>
        <h2>Cadastrar uma transação</h2>
        <input
          name="title"
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          name="value"
          type="number"
          placeholder="Valor"
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionsTypeButtons>
          <button
            type="button"
            onClick={() => { setType('income') }}
            className={type === 'income' ? 'income-active__green' : ''}
          >
            <img src={income} alt="Entrada" />
            Entrada
          </button>

          <button
            type="button"
            onClick={() => { setType('outcome') }}
            className={type === 'outcome' ? 'outcome-active__red' : ''}
          >
            <img src={outcome} alt="Saída" />
            Saída
          </button>
        </TransactionsTypeButtons>

        <input
          name="category"
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>
  )
}
