import React, {useState, useEffect} from 'react'
import {cardColor, STATUS, sampleData} from './commons/constants'
import {Button} from './commons'

export default function CreateStory(props){

  // const [story, setStory] = useState(sampleData)
  const [currentTime, setDateTime] = useState(new Date().toLocaleString())
  const [newStory, setNewStory] = useState(props.editList || {
    task: null,
    created_at: currentTime,
    status: STATUS[0],
    column: props.columns[0],
  })

  useEffect(() => {
    displayClock()
  },[])

  function displayClock(){
    var display = new Date().toLocaleString();
    setDateTime(display)
    setTimeout(displayClock, 1000); 
  }

  function setValue(e){
    e.preventDefault()
    const tempstory = [...props.story]
    if(props.editList){
      let objIndex = tempstory.findIndex(obj => obj == props.editList)
      tempstory[objIndex].task = newStory.task
      tempstory[objIndex].created_at = newStory.created_at
      tempstory[objIndex].status = newStory.status
      tempstory[objIndex].column = newStory.column
      tempstory[objIndex].priority = newStory.priority
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

  function changePriority(prev, now){
    const tempstory = [...props.story]
    tempstory.sort(function(a,b){
      return a.priority - b.priority}).map((value,index) => {
        if (parseInt(value.priority) == prev){
          tempstory[index].priority =  now
        }
        else if(parseInt(value.priority) >= now){
          tempstory[index].priority = parseInt(tempstory[index].priority) + 1
        }
      })
        props.setStory(tempstory)
        props.toggleList();

  }

  let isEnabled = newStory.task && newStory.created_at && newStory.status && newStory.column
  return<div>
    <form>
      Task Name
      <input onChange={(e) => setNewStory({...newStory, task: e.target.value})} type="text" name="task" value={newStory.task} />
      Status
      <select onChange={(e) => setNewStory({...newStory, status: e.target.value})} defaultValue={newStory.status}>
        {STATUS.map(value=> <option value={value}>{value}</option>)}
      </select>
      Column
      <select onChange={(e) => setNewStory({...newStory, column: e.target.value})} defaultValue={newStory.column}>
        {props.columns.map(value=> <option value={value}>{value}</option>)}
      </select>
      Priority
      <select onChange={(e) => changePriority(newStory.priority, e.target.value)} defaultValue={newStory.priority}>
        {Array.from({length: props.story.length}).map((value,index)=> <option value={index + 1}>{index + 1}</option>)}
      </select>
      {props.editList && <div>Created at:  {props.editList.created_at}</div> }
      <br/>
      <div>{currentTime}</div>
      <br/>
      <Button color="#00ce66" onClick={(e) => setValue(e)} disabled={!isEnabled} > Submit </Button>
    </form>
  </div>
}