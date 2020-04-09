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
  margin-right: ${props => props.label === 'Opacity'&& '20px'};
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
  background: ${props => props.focused ? '#FFFFFF' : '#C22256'};
  border: 1.5px solid #C22256;
  box-sizing: border-box;
  border-radius: 100px;
}

.slider::-moz-range-thumb {
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: ${props => props.focused ? '#FFFFFF' : '#C22256'};
  border: 1.5px solid #C22256;
  box-sizing: border-box;
  border-radius: 100px;
}
`;
const Color = styled.span`
  width: 90px;
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

export default ({ type, label, value, onChange, focused }) => {
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
      <SliderContainer focused={focused}>
        <Row>
          <Label>{label}</Label>
          <Row>
            <ValueContainer
              value={value}
              onChange={(e) => onChange(e.target.value)}
              label={label}
            />
            <Px>{label !== 'Opacity'&& 'px'}</Px>
          </Row>
        </Row>
        <input
          type="range"
          step={label === 'Opacity' && "0.01"}
          min={
            label === 'X-offset' || label === 'Y-offset'
            ? "-100"
            : "0"
          }
          max={
            label === 'X-offset' || label === 'Y-offset'
            ? "100"
            : label === 'Opacity'? "1"
            // : label === 'Blur radius' ? "100"
            : "100"
          }
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
