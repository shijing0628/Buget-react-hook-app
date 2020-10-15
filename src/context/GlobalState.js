import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
 incomeTransactions: JSON.parse(sessionStorage.getItem('incomeTransaction')) || [],
 expenseTransactions: JSON.parse(sessionStorage.getItem('expenseTransaction')) || []
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
 const [state, dispatch] = useReducer(AppReducer, initialState);

 // add income item
 const addIncome = incomeTransaction => {
  dispatch({
   type: 'ADD_INCOME',
   payload: incomeTransaction
  }
  )
 }
 // add expense item
 const addExpense = expenseTransaction => {
  dispatch({
   type: 'ADD_EXPENSE',
   payload: expenseTransaction
  }
  )
 }

 //delete icon for both lines
 const deleteTransaction = (id) => {
  dispatch({
   type: 'DELETE_TRANSACTION',
   payload: id
  }
  )
 }


 useEffect(() => {
  sessionStorage.setItem('incomeTransactions', JSON.stringify(state.incomeTransactions));
  sessionStorage.setItem('expenseTransactions', JSON.stringify(state.expenseTransactions));
 })

 return (
  <GlobalContext.Provider value={{
   incomeTransactions: state.incomeTransactions,
   expenseTransactions: state.expenseTransactions,
   addIncome,
   addExpense,
   deleteTransaction
  }}>
   {children}
  </GlobalContext.Provider>
 )
}
