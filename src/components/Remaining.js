import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { formatPriceToWon } from './../utils/index';

const Remaining = () => {


  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = 
    expenses.reduce((total, item) => {
    return (total += item.cost)
  }, 0);

  const alertType = totalExpenses > budget ?'alert-danger':'alert-success'

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>
        남은 돈 : {formatPriceToWon(budget - totalExpenses)}
      </span>
    </div>

  )
}

export default Remaining