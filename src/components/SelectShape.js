import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { Label } from 'components/Input';

import { selectShape } from 'reducer';

const ShapeContainer = styled.div`
  width: 483px;
  height: 107px;
  border: 1px solid #211D26;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const SelectShape = ({ shapes, selectShape }) => (
  <>
    <Label>Select shape</Label>
    <ShapeContainer>
      {
        shapes.map(shape => {
          const { Shape, isSelected, id } = shape;
          return(
            <Shape isSelected={isSelected} onClick = { () => selectShape(id)} key={id} />
          )
        })
      }
    </ShapeContainer>
  </>
)

const mapStateToProps = (state) => ({ shapes: state.shapes });

export default connect(mapStateToProps,{selectShape}) (SelectShape)
