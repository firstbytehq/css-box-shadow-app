import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

const Rectangle = styled.div`
  width: ${props => props.isActive ? '300px' : '200px'};
  height: ${props => props.isActive ? '200px' : '100px'};
  border: 1px solid black;
  background-color: ${props => props.isActive || props.isSelected? 'black' : 'transparent'};
  border-width: thin;
  border-color: ${props => !props.isSelected && 'grey'};
`;
const RoundedRectangle = styled.div`
  width: ${props => props.isActive ? '300px' : '200px'};
  height: ${props => props.isActive ? '200px' : '100px'};
  border: 1px solid black;
  background-color: ${props => props.isActive || props.isSelected? 'black' : 'transparent'};
  border-width: thin;
  border-color: ${props => !props.isSelected && 'grey'};
  border-radius: 20px;
`;
const Circle = styled.div`
  width: ${props => props.isActive ? '250px' : '100px'};
  height: ${props => props.isActive ? '250px' : '100px'};
  border: 1px solid black;
  background-color: ${props => props.isActive || props.isSelected? 'black' : 'transparent'};
  border-width: thin;
  border-color: ${props => !props.isSelected && 'grey'};
  border-radius: 100%;
`

export default () => {

  const [shapes, setShapes] = useState([
    {
      id: 'rectangle',
      Shape: Rectangle,
      isSelected: true
    },
    {
      id: 'rounded-rectangle',
      Shape: RoundedRectangle,
      isSelected: false
    },
    {
      id: 'circle',
      Shape: Circle,
      isSelected: false
    }
  ]);

  const [ActiveShape, setActiveShape] = useState(Rectangle);

  const onClick = (id) => {
    const updatedShape = shapes.map(item => {
      if (item.id === id) {
        setActiveShape(item.Shape);
        return { ...item, isSelected: true }
      }else {
        return { ...item, isSelected: false }
      }
    })
    setShapes(updatedShape);
  }

  return(
    <Container>
      <ActiveShape isActive />
      {
        shapes.map(item => {
          const { Shape, isSelected, id } = item;
          return(
            <Shape isSelected={isSelected} onClick = {()=>onClick(id)} key={id} />
          )
        })
      }
    </Container>
  )
}
