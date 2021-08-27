import React, {useState} from 'react'
import {cardColor, STATUS, sampleData} from './commons/constants'

export default function CreateStory(props){

  // const [story, setStory] = useState(sampleData)
  console.log("Valeuf o editldsdf", props, props.editList)
  const [newStory, setNewStory] = useState(props.editList || {
    task: null,
    created_at: null,
    status: null,
  })
  // const [task_name, setTaskName] = useState(null)
  // const [created_date, setCreatedDate] = useState(null)
  // const [status, setStatus] = useState(null)

  // function onChange(e) {
  //   const val = {}
  //   val[e.target.name] = e.target.value
  //   // const tempstory = [...story]
  //   // // tempstory.push(...val)
  //   // console.log("value of push here... ", story, tempstory.push(val),)
  // }


  function setValue(e){
    e.preventDefault()
    const tempstory = [...props.story]
    if(props.editList){
      let objIndex = tempstory.findIndex(obj => obj == props.editList)
      tempstory[objIndex].task = newStory.task
      tempstory[objIndex].created_at = newStory.created_at
      tempstory[objIndex].status = newStory.status
      props.setEditList(null)
      props.setStory(tempstory)
      props.toggleList()
    }
    else{
      newStory['user_id'] = 2
      tempstory.push(newStory)
      props.setStory(tempstory)
      props.toggleList()
    } 
    
  }

  let isEnabled = newStory.task && newStory.created_at && newStory.status

  return<div>
    <form>
      <input onChange={(e) => setNewStory({...newStory, task: e.target.value})} type="text" name="task" value={newStory.task} />
      <select onChange={(e) => setNewStory({...newStory, status: e.target.value})} defaultValue={newStory.status}>
        {STATUS.map(value=> <option value={value}>{value}</option>)}
      </select>
      <input onChange={(e) => setNewStory({...newStory, created_at: e.target.value})} type="datetime-local" value={newStory.created_at} name="created_at"/>
      {}
      <button onClick={(e) => setValue(e)} disabled={!isEnabled} > Submit </button>
      <button onClick={(e) => props.toggleList()} > Cancel </button>
    </form>
  </div>
}