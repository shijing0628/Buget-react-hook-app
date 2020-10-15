import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeTransaction = ({ incomeTransaction }) => {
 const { deleteTransaction } = useContext(GlobalContext)
 return (
  <div>
   <li className="transaction">
    <span className="transaction-text">{incomeTransaction.incomeText}</span>
    <span className="transaction-amount">${incomeTransaction.incomeAmount}</span>
    <button className="delete-btn" onClick={() => deleteTransaction(incomeTransaction.id)}>
     <i className="fa fa-trash"></i>
    </button>
   </li>
  </div>
 )
}

export default IncomeTransaction
