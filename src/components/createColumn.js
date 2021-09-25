import React, {useState} from 'react'
import {Button} from './commons'

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
      <Button color="#00ce66" onClick={(e) => setValue(e)} > Add </Button>
      <Button color="#bd1c40" primary onClick={(e) => props.toggleAddColumn(!props.addColumn)} > Cancel </Button>
    </form>
  </div>
}