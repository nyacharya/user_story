import React, {useState} from 'react'

export default function CreateColumn(props){

  const [newColumn, setNewColumn] = useState('')

  function setValue(e){
    e.preventDefault()
    props.columns.push(newColumn)
    props.setColumns(props.columns)
    props.toggleAddColumn(!props.addColumn)
    
  }

  return<div>
    <form>
      <input onChange={(e) => setNewColumn(e.target.value)} type="text" name="task" value={newColumn} />
      <button onClick={(e) => setValue(e)} > Add </button>
      <button onClick={(e) => props.toggleAddColumn(!props.addColumn)} > Cancel </button>
    </form>
  </div>
}