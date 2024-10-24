import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';

const Budget = () => {

  const { budget, dispatch } = useContext(AppContext);

  const [isEditing, setisEditing] = useState(false);


  return (
    <div className='
    alert alert-primary p-3 d-flex align-items-center justify-content-between
    '>
      {isEditing ? 
      <EditBudget dispatch={dispatch} setisEditing={setisEditing} budget={budget} />
      :
      <ViewBudget setisEditing={setisEditing} budget={budget}/>  
    }
    </div>
  )
}

export default Budget