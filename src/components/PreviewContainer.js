import React from 'react';

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
`;
const Text = styled.span`
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #FFFFFF;
`

const PreviewContainer = ({ shapes, boxShadow }) => {

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
    background: #C22256;
    box-shadow: ${props => props.boxShadow&& props.boxShadow}; /*0px 4px 30px rgba(0, 0, 0, 0.25);*/
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: auto;
  `;

  return (
    <Container>
      <Preview boxShadow={boxShadow}>
        <Text>Preview</Text>
      </Preview>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  shapes: state.shapes,
  boxShadow: state.boxShadow
})

export default connect(mapStateToProps)(PreviewContainer)
