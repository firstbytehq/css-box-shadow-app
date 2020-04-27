import React from 'react';

import { connect } from 'react-redux';

import styled from 'styled-components';

import { Rectangle, RoundedRectangle, Circle } from 'components/Shapes';

import { setPreviewColor } from 'reducer';

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
  @media(max-width: 414px){
    width: 300px !important;
    height: 272px !important;
  }
  @media(max-width: 768px) {
    width: 328px !important;
    height: 272px !important;
    margin-top: 50px;
  }
  @media(max-width: 780px) {
    width: 480px !important;
    height: 350px !important;
  }
  @media(max-width: 1024px){
    width: 450px;
    height: 350px;
  }
`;
const Text = styled.span`
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: ${ props => props.previewTextColor };
`

const PreviewContainer = ({ shapes, shadowControls, previewColor, setPreviewColor, previewTextColor }) => {

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
    @media(max-width: 768px) {
      width: ${selectedShape.id === 'circle' ? '150px' : '170px'};
      height: ${selectedShape.id === 'circle' ? '150px' : '131px'};
    }
  `;
  // const Color = styled.input`
  //   opacity: 0;
  //   position: absolute;
  //   width: ${selectedShape.id === 'circle' ? '200px' : '250px'};
  //   height: ${selectedShape.id === 'circle' ? '200px' : '174px'};
  //   background: ${props => props.previewColor};
  //   border-radius: ${selectedShape.id === 'circle' && '100%'};
  //   cursor: pointer;
  // `
//TODO: to change the preview color
// const onChange = (value) => {
//   setPreviewColor(value)
// }
  return (
    <Container>
      <Preview boxShadow={boxShadow} previewColor={previewColor}>
        {/* <Color
          type='color'
          onChange={(e) => onChange(e.target.value)}
          //value={previewColor}
          id="previewColor"
        /> */}
        <Text previewTextColor={previewTextColor}>Preview</Text>
      </Preview>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  shapes: state.shapes,
  shadowControls: state.shadowControls,
  previewColor: state.previewColor,
  previewTextColor: state.previewTextColor
})

export default connect(mapStateToProps,{setPreviewColor})(PreviewContainer)
