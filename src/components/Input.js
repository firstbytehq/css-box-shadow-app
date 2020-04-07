import React from 'react';

import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ValueContainer = styled.input`
  width: 40px;
  height: 25px;
  background: #F5EFEF;
  border-radius: 3px;
  border: none;
  text-align: center;
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  padding-top: 2px;
  color: #8D8D8D;
`;

export const Label = styled.span`
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 40px;
  letter-spacing: 0.03em;
  color: #FFFFFF;
`;
const Px = styled.span`
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 40px;
  letter-spacing: 0.03em;
  color: #FFFFFF;
  margin-left: 8px;
`

const SliderContainer = styled.div`

width: 366px;
margin-bottom: 50px;
.slider {
  -webkit-appearance: none;
  width: 366px;
  height: 4px;
  background: #C22256;
  border-radius: 100px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: #FFFFFF;
  border: 1.5px solid #C22256;
  box-sizing: border-box;
  border-radius: 100px;
}

.slider::-moz-range-thumb {
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: #FFFFFF;
  border: 1.5px solid #C22256;
  box-sizing: border-box;
  border-radius: 100px;
}
`;
const Color = styled.span`
  width: 87px;
  height: 24px;
  background: #F5EFEF;
  border-radius: 3px;
  text-align: center;
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  letter-spacing: 0.03em;
  color: #8D8D8D;
  padding-top: 2px;
`

export default ({ type, label, value, onChange }) => {
  if (type === 'color') {
    return(
      <Row>
        <Label>{label}</Label>
        <ColorRow>
        <input
          value={value}
          type={type}
          style={{height: 22}}
          onChange={(e) => onChange(e.target.value)}
        />
        <Color>{value}</Color>
      </ColorRow>
      </Row>
    )
  }else {
    return(
      <SliderContainer>
        <Row>
          <Label>{label}</Label>
          <Row>
            <ValueContainer
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
            <Px>px</Px>
          </Row>
        </Row>
        <input
          type="range"
          min="1" max="100"
          value={value}
          class="slider"
          id="myRange"
          onChange={(e) => onChange(e.target.value)}
        />
      </SliderContainer>
    )
  }
}

const ColorRow = styled.div`
 display: flex;
 flex-direction: row;
`
