import React, { useState } from 'react';

import { connect } from 'react-redux';

import styled from 'styled-components';

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
  color: ${ props => props.previewTextColor };
`

const Color = styled.input`
  opacity: 0;
  position: absolute;
  width: ${props=> props.selectedShape.id === 'circle' ? '200px' : '250px'};
  height: ${props=> props.selectedShape.id === 'circle' ? '200px' : '174px'};
  background: ${props => props.previewColor};
  border-radius: ${props=> props.selectedShape.id === 'circle' && '100%'};
  cursor: pointer;
`

const Preview = styled.div`
  width: ${props => props.selectedShapeId === 'circle' ? '200px' : '250px'};
  height: ${props => props.selectedShapeId === 'circle' ? '200px' : '174px'};
  border-radius: ${props => props.selectedShapeId === 'circle' ? '100%' : props.selectedShapeId === 'rounded-rectangle' && '10px'};
  background: ${props => props.previewColor};
  box-shadow: ${props => props.boxShadow&& props.boxShadow}; /*0px 4px 30px rgba(0, 0, 0, 0.25);*/
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: auto;
`

const PreviewContainer = ({ shapes, shadowControls }) => {

  const [previewColor, setPreviewColor] = useState('#C22256');
  const [previewTextColor, setPreviewTextColor] = useState('#FFFFFF');

  let boxShadow = '';
  shadowControls.forEach((item, index)=> {
    if (index === 0) {
      boxShadow = item.boxShadow
    }else {
      boxShadow = boxShadow + ',' + item.boxShadow
    }
  })

  const selectedShape = shapes.find(item=> item.isSelected === true);

  const changeTextColor = (color) => {
    let hexcolor = color.replace("#", "");
    let r = parseInt(hexcolor.substr(0,2),16);
    let g = parseInt(hexcolor.substr(2,2),16);
    let b = parseInt(hexcolor.substr(4,2),16);
    let brightness = ((r*299)+(g*587)+(b*114))/1000;
    const textColor = (brightness >= 128) ? 'black' : 'white';
    setPreviewTextColor(textColor)
  }

  return (
    <Container>
      <Preview
        boxShadow={boxShadow}
        previewColor={previewColor}
        selectedShapeId={selectedShape.id}
      >
        <Color
          type='color'
          onChange={(e) => {setPreviewColor(e.target.value); changeTextColor(e.target.value);}}
          value={previewColor}
          selectedShape={selectedShape}
        />
        <Text previewTextColor={previewTextColor}>Preview</Text>
      </Preview>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  shapes: state.shapes,
  shadowControls: state.shadowControls
})

export default connect(mapStateToProps)(PreviewContainer)
