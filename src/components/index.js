import React, {useState} from 'react'
import {CardWrapper, Button, WrapCard, DeleteButton, EditButton, MainWrapper, InsideWrapper} from './commons'
import {cardColor, STATUS, sampleData, COLUMNS} from './commons/constants'
import CreateStory from './createStory'
import CreateColumn from "./createColumn";


export default function Main(){

  const [story, setStory] = useState(sampleData)
  const [showList, toggleList] = useState(true)
  const [addColumn, toggleAddColumn] = useState(false)
  const [editList, setEditList] = useState(null)
  const [columns, setColumns] = useState(COLUMNS)
  const [displayhor, setHor] = useState(false)


  function changeStatus(params, status) {
    const newState = story.map(obj =>
      obj.id === params.id  ? { ...obj, status: status } : obj
    );
    setStory(newState)
  }

  function deleteCard(params){
    const newStory = story.filter(item => item != params)
    setStory(newStory)
  }

  function editCard(params){
    setEditList(params)
    toggleList(!showList)
  }

  function toggleShowList(){
    setEditList(null)
    toggleList(!showList)
  }


  function displayCards(data){
  return <CardWrapper color={cardColor[data.status]}>
    <h1>{data.task}</h1>
    <h3>priority: {data.priority}</h3>
      {data.task} <div onClick> </div>
      {STATUS.filter(item => item != data.status).map(value => <Button onClick={() => changeStatus(data, value)}>{value}</Button>)}
      <DeleteButton onClick={() => deleteCard(data)}> 
        Delete 
      </DeleteButton>
      <EditButton onClick={() => editCard(data)}> Edit </EditButton>
    </CardWrapper>
  }

  function orderByColumn(){
    return columns.map(col => <MainWrapper col={displayhor}>
      <h3> {col} </h3>
      <InsideWrapper col={displayhor}>
      {story.sort(function(a,b){
        return a.priority - b.priority}).map(value => {
        if(value.column == col)
          return displayCards(value)
        })}
    </InsideWrapper>
      </MainWrapper>)
  }

  return <div><WrapCard col={displayhor}>
    {showList ? orderByColumn() : <CreateStory  
    toggleList={toggleShowList} 
    showList={showList} 
    story={story} 
    setStory={setStory}
    editList={editList}
    columns = {columns}
    setEditList={setEditList}
     />}

  </WrapCard>
  {addColumn ? <CreateColumn 
  addColumn={addColumn} 
  toggleAddColumn={toggleAddColumn} 
  setColumns={setColumns}
  columns={columns}
  /> : <button onClick={() => toggleAddColumn(!addColumn)} > Add Card </button>}
  <button onClick={() => toggleShowList()} > {showList ? 'Add new Story' : 'Cancel'}</button>

    <br/>
    <button onClick={() => setHor(!displayhor)} >Change Orientation</button>
  </div>
}