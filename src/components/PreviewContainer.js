import React, { useState } from 'react';

import { connect } from 'react-redux';

import styled from 'styled-components';

import { Rectangle, RoundedRectangle, Circle } from 'components/Shapes';


const Container = styled.div`
  width: 480px;
  height: 350px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 61px;
  overflow: hidden;
`;
const Text = styled.span`
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: ${ props => props.textColor };
  ${'' /* color: #FFFFFF; */}
`

const PreviewContainer = ({ shapes, shadowControls }) => {

  const [previewColor, setPreviewColor] = useState('#C22256');

  let boxShadow = '';
  shadowControls.forEach((item, index)=> {
    if (index === 0) {
      boxShadow = item.boxShadow
    }else {
      boxShadow = boxShadow + ',' + item.boxShadow
    }
  })

  const selectedShape = shapes.find(item=> item.isSelected === true);

  let ActiveShape;

  switch (selectedShape.id) {
    case 'rounded-rectangle':
      ActiveShape = RoundedRectangle;
      break;
    case 'circle':
      ActiveShape = Circle;
      break;
    default:
      ActiveShape = Rectangle;
  }

  const Preview = styled(ActiveShape)`
    width: ${selectedShape.id === 'circle' ? '200px' : '250px'};
    height: ${selectedShape.id === 'circle' ? '200px' : '174px'};
    border-radius: ${selectedShape.id === 'circle' && '100%'};
    background: ${props => props.previewColor};
    box-shadow: ${props => props.boxShadow&& props.boxShadow}; /*0px 4px 30px rgba(0, 0, 0, 0.25);*/
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: auto;
  `;
  const Color = styled.input`
    opacity: 0;
    position: absolute;
    width: ${selectedShape.id === 'circle' ? '200px' : '250px'};
    height: ${selectedShape.id === 'circle' ? '200px' : '174px'};
    cursor: pointer;
  `
  const colorChange = (hexcolor) => {
    hexcolor = hexcolor.replace("#", "");
    let r = parseInt(hexcolor.substr(0,2),16);
    let g = parseInt(hexcolor.substr(2,2),16);
    let b = parseInt(hexcolor.substr(4,2),16);
    let britness = ((r*299)+(g*587)+(b*114))/1000;
    const textColour = (britness >= 128) ? 'black' : 'white';
    setTextColor(textColour)
  }
  const [textColor, setTextColor] = useState('white');

  return (
    <Container>
      <Preview boxShadow={boxShadow} previewColor={previewColor}>
        <Color
          type="color"
          onChange={(e) => {setPreviewColor(e.target.value); colorChange(e.target.value)}}
        />
        <Text textColor={textColor}>Preview</Text>
      </Preview>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  shapes: state.shapes,
  shadowControls: state.shadowControls
})

export default connect(mapStateToProps)(PreviewContainer)
