import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
`;

export const CardWrapper = styled.div`
  height: 300px;
  width: 250px;
  background: ${props => props.color || 'blue'};
  font: 12px;
  margin: 20px;
  border-radius: 27px;
`
export const WrapCard = styled.div`
  display:flex;
  margin:25px;
  flex-direction: ${props => props.col ? 'column' : 'row'};
`

export const DeleteButton = styled.div`
  background: red;
`

export const EditButton = styled.div`
  background: gray;
`

export const MainWrapper = styled.div`
  background: blue;
  margin: 20px;
  display: flex;
  flex-direction: ${props => props.col ? 'row' : 'column'};
`

export const InsideWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.col ? 'row' : 'column'};
`