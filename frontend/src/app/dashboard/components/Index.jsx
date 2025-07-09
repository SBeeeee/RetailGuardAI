import React from 'react'
import Header from './Header';
import TransactionTable from './TransactionTable';
import ChatBox from './ChatBox';
export default function Index() {
  return (
    <div className="p-4">
      <Header/>
      <TransactionTable/>
      <ChatBox/>
    </div>
  )
}
