import { useState } from 'react';

import Modal from 'react-modal';
import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard/index';
import { NewTransactionModal } from './components/NewTransactionModal/index';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
