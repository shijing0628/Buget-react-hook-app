import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = () => {
 const { addIncome, addExpense } = useContext(GlobalContext)
 const [income, setIncome] = useState({
  incomeText: '',
  incomeAmount: 0,
 })

 const [expense, setExpense] = useState({
  expenseText: '',
  expenseAmount: 0,
 })

 const onChangeIncome = (e) => {
  setIncome({ ...income, [e.target.name]: e.target.value })
 }


 const onSubmitIncome = (e) => {
  e.preventDefault();
  const { incomeText, incomeAmount } = income;

  if (incomeText !== '') {
   const newIncomeTransaction = {
    id: uuidv4(),
    incomeText,
    incomeAmount: Number(incomeAmount)
   }
   addIncome(newIncomeTransaction);
  }
 }


 //expense
 const onChangeExpense = (e) => {
  setExpense({ ...expense, [e.target.name]: e.target.value })
 }

 const onSubmitExpense = (e) => {
  const { expenseText, expenseAmount } = expense;
  e.preventDefault();

  if (expenseText !== '') {

   const newExpenseTransaction = {
    id: uuidv4(),
    expenseText,
    expenseAmount: Number(expenseAmount)
   }
   addExpense(newExpenseTransaction);

  }


 }
 return (
  <div className="form-wrapper">
   <form onSubmit={onSubmitIncome}>
    <div className="input-group income">
     <input type="text" name="incomeText" placeholder="add income..." autoComplete="off" onChange={onChangeIncome} />
     <input type="number" name="incomeAmount" placeholder="amount..." autoComplete="off" onChange={onChangeIncome} />
     <input type="submit" value="submit" ></input>
    </div>
   </form>
   <form onSubmit={onSubmitExpense}>
    <div className="input-group expense">
     <input type="text" name="expenseText" placeholder="add expense..." autoComplete="off" onChange={onChangeExpense} />
     <input type="number" name="expenseAmount" placeholder="amount..." autoComplete="off" onChange={onChangeExpense} />
     <input type="submit" value="submit"></input>
    </div>
   </form>
  </div>
 )
}
