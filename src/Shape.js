import React, { useState } from 'react';
import styled from 'styled-components';

import Input from './Input'

const Container = styled.div`
  padding: 30px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

const Rectangle = styled.div`
  width: ${props => props.isActive ? '300px' : '200px'};
  height: ${props => props.isActive ? '200px' : '100px'};
  border: 1px solid black;
  background-color: ${props => props.isActive || props.isSelected? 'black' : 'transparent'};
  border-width: thin;
  border-color: ${props => !props.isSelected && 'grey'};
  box-shadow: ${props => props.isActive&& props.boxShadow};
`;
const RoundedRectangle = styled.div`
  width: ${props => props.isActive ? '300px' : '200px'};
  height: ${props => props.isActive ? '200px' : '100px'};
  border: 1px solid black;
  background-color: ${props => props.isActive || props.isSelected? 'black' : 'transparent'};
  border-width: thin;
  border-color: ${props => !props.isSelected && 'grey'};
  border-radius: 20px;
  box-shadow: ${props => props.isActive&& props.boxShadow};
`;
const Circle = styled.div`
  width: ${props => props.isActive ? '250px' : '100px'};
  height: ${props => props.isActive ? '250px' : '100px'};
  border: 1px solid black;
  background-color: ${props => props.isActive || props.isSelected? 'black' : 'transparent'};
  border-width: thin;
  border-color: ${props => !props.isSelected && 'grey'};
  border-radius: 100%;
  box-shadow: ${props => props.isActive&& props.boxShadow};
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

  const [xOffset, setXoffset] = useState(0);
  const [yOffset, setYoffset] = useState(4);
  const [blurRadius, setBlurRadius] = useState(0);
  const [spread, setSpread] = useState(2);
  const [color, setColor] = useState('#898989');
  const [opacity, setOpacity] = useState(0.50);

  const col = color.replace('#', '');
  let bigint = parseInt(col, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  const colorCode = `rgba(${r},${g},${b},${opacity})`
  const cssCode = `${xOffset}px ${yOffset}px ${blurRadius}px ${spread}px ${colorCode}`;

  const copyCss = (copyText) => {
    let input = document.createElement('textarea');
    input.innerHTML = copyText;
    document.body.appendChild(input);
    input.select();
    let result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
  }

  return(
    <Container>
      <Row>
        <ActiveShape
          isActive
          boxShadow={cssCode}
        />
        {
          shapes.map(item => {
            const { Shape, isSelected, id } = item;
            return(
              <Shape isSelected={isSelected} onClick = {()=>onClick(id)} key={id} />
            )
          })
        }
      </Row>
      <Row>
        <Input
          label='x-offset'
          value={xOffset}
          onChange={(value) => {
            if (isNaN(value)) {
              if (value === '-') {
                setXoffset(value)
              }
            }else {
              setXoffset(value)
            }
          }}
        />
        <Input
          label='y-offset'
          value={yOffset}
          onChange={(value) => {
            if (isNaN(value)) {
              if (value === '-') {
                setYoffset(value)
              }
            }else {
              setYoffset(value)
            }
          }}
        />
        <Input
          label='blur radius'
          value={blurRadius}
          onChange={(value) => {
            if (!isNaN(value)) {
              setBlurRadius(value)
            }
          }}
        />
        <Input
          label='spread'
          value={spread}
          onChange={(value) => {
            if (!isNaN(value)) {
              setSpread(value)
            }
          }}
        />
        <Input label='color' value={color} onChange={(value) => setColor(value)} type="color" />
        <Input
          label='opacity'
          value={opacity}
          onChange={(value) => {
            if (!isNaN(value)) {
              setOpacity(value)
            }
          }}
        />
      </Row>
      <span>CSS Rule</span>
      <BorderBox>
        <span>{`box-shadow: ${cssCode};`}</span>
      </BorderBox>
      <CssButton onClick={() => copyCss(`box-shadow: ${cssCode};`)}>
        Copy CSS
      </CssButton>
    </Container>
  )
}

const BorderBox = styled.div`
  border: 1px solid grey;
  height: 30px;
  width: 40%;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  align-items: center;
  margin-top: 10px;
`;
const CssButton = styled.button`
  margin-top: 20px;
  width: 20%;
  background-color: grey;
  color: white;
`;
