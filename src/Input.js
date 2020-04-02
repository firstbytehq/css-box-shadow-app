import React from 'react';

import styled from 'styled-components';

const Input = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
const Label = styled.span`
  margin-bottom: 10px;
`;
const ColorInput = styled.div`
  border: 1px solid grey;
`

export default ({ label, value, onChange, type }) => {
  return(
    <Input>
      <Label>{label}</Label>
      {
        label === 'color'?
        <ColorInput>
          <span>{value}</span>
          <input
            value={value}
            type={type}
            onChange={(e) => onChange(e.target.value)}
          />
        </ColorInput>
        :
        <input
          value={value}
          type={type}
          onChange={(e) => onChange(e.target.value)}
        />
      }
    </Input>
  )
}
