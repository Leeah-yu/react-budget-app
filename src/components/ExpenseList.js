import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {

  const { expenses } = useContext(AppContext);
    console.log(expenses);

    useEffect(() => {
      setfilteredExpenses(expenses);
    }, [expenses])
    


    const [filteredExpenses, setfilteredExpenses] = 
    useState(expenses || []);
    




    const handleChange = (e) => {
      const searchResults = expenses.filter((expense) => 
          expense.name.toLowerCase().includes(e.target.value)
      )
      setfilteredExpenses(searchResults);
      console.log(e.target.value)
    }

  return (

    <>


      <input
        type='text'
        className='form-control'
        placeholder='검색하기...'
        onChange={handleChange}
      />

      <ul className='list-group mt-3 mb-3'>
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>

    </>


  )
}

export default ExpenseList