import React from 'react'
import Header from './Header';
import TransactionTable from './TransactionTable';
import ChatBox from './ChatBox';
import Heading from './Heading';
export default function Index() {
  return (
    <div className="p-4">
        <Heading/>
      <Header/>
      <TransactionTable/>
      <ChatBox/>
    </div>
  )
}
