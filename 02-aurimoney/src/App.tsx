import React, { useState } from 'react';

import { Dashboard, Header, TransactionModal } from './components'

import { TransactionProvider } from './TransactionContext'

import { Global } from './styles/global'

export function App() {
  const [showTransactionModal, setShowTransactionModal] = useState(false);

  function handleShouldShowTransactionModal() {
    setShowTransactionModal(!showTransactionModal);
  }

  return (
    <TransactionProvider>

      <TransactionModal
        isOpen={showTransactionModal}
        shouldShowTransactionModal={handleShouldShowTransactionModal}
      />
      <Header openTransactionModal={handleShouldShowTransactionModal} />
      <Dashboard />
      <Global />

    </TransactionProvider>
  );
}
