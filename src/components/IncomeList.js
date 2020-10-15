import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import IncomeTransaction from './IncomeTransaction'

export const IncomeList = () => {

 const { incomeTransactions } = useContext(GlobalContext)
 return (

  <div className="transactions transactions-income">
   <h2>transaction History</h2>
   <ul className="transaction-list">
    {incomeTransactions.map(incomeTransaction => (
     <IncomeTransaction incomeTransaction={incomeTransaction} key={incomeTransaction.id} />
    ))
    }
   </ul>
  </div>
 )
}
