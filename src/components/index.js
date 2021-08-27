import React, {useState} from 'react'
import {CardWrapper, Button, WrapCard, DeleteButton, EditButton} from './commons'
import {cardColor, STATUS, sampleData} from './commons/constants'
import CreateStory from './createStory'


export default function Main(){

  const [story, setStory] = useState(sampleData)
  const [showList, toggleList] = useState(true)
  const [editList, setEditList] = useState(null)


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
    console.log("value of dfsdf", params)
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
      {data.task} <div onClick> </div>
      {STATUS.filter(item => item != data.status).map(value => <Button onClick={() => changeStatus(data, value)}>{value}</Button>)}
      <DeleteButton onClick={() => deleteCard(data)}> Delete </DeleteButton>
      <EditButton onClick={() => editCard(data)}> Edit </EditButton>
    </CardWrapper>
  }

  return <WrapCard>
    {showList ? <div>
      <button onClick={() => toggleList(!showList)} > Add new</button>
      {story.map(value => displayCards(value))}
    </div> : <CreateStory  
    toggleList={toggleShowList} 
    showList={showList} 
    story={story} 
    setStory={setStory}
    editList={editList}
    setEditList={setEditList}
     />}
    {/* Main page here
    {story.map(value => displayCards(value))} */}
    

  </WrapCard>
}