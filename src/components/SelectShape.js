import React from 'react';

import styled from 'styled-components';
import { Label } from 'components/Input';

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
const Rectangle = styled.div`
  width: 79px;
  height: 53px;
  background: #F5EFEF;
  border: 5px solid #C22256;
  box-sizing: border-box;
`;
const RoundedRectangle = styled.div`
  width: 78px;
  height: 53px;
  background: #F5EFEF;
  border-radius: 10px;
`;
const Circle = styled.div`
  width: 55px;
  height: 55px;
  background: #F5EFEF;
  border-radius: 27.5px;
`

export default () => (
  <>
    <Label>Select shape</Label>
    <ShapeContainer>
      <Rectangle />
      <RoundedRectangle />
      <Circle />
    </ShapeContainer>
  </>
)
