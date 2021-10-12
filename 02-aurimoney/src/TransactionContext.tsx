import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

// Interfaces

interface TransactionData {
  id: number;
  title: string;
  type: string;
  value: number;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<TransactionData, 'id' | 'createdAt'>

interface TransactionContextProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: TransactionData[]
  createTransaction: (transactionInput: TransactionInput) => void
}

// Exports

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
)

export const TransactionProvider = ({ children }: TransactionContextProps) => {
  const [transactions, setTransactions] = useState<TransactionData[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', transactionInput)

    const newTransaction = response.data.transactions

    setTransactions([...transactions, newTransaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      { children}
    </TransactionContext.Provider>
  )
}
