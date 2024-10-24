import React from 'react'
import { type } from '@testing-library/user-event/dist/type';
import { formatPriceToWon } from '../utils';

const ViewBudget = ({budget, setisEditing}) => {
  return (
    <>
      <span>예산: {formatPriceToWon(budget)}</span>
      <button 
        onClick={() => setisEditing(true)}
        type='button' className='btn btn-primary'>
        수정
      </button>
    </>
  )
}

export default ViewBudget