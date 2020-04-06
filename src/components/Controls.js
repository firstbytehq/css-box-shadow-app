import React from 'react';
import styled from 'styled-components';

import Input from './Input';

const Line = styled.div`
  width: 366px; /* 379 */
  height: 0px;
  border: 1px solid rgba(245, 239, 239, 0.48);
  margin-top: 46px;
`;
const Button = styled.button`
width: 127px;
height: 40px;
background: #C22256;
border-radius: 10px;
border: none;

font-family: Merriweather Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 40px;
letter-spacing: 0.03em;
color: #FFFFFF;
`;
const ButtonContainer = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: flex-end;
`;
const BoxShadow = styled.div`
  width: 366px;
  height: 41px;
  background: #F5EFEF;
  border-radius: 10px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: #000000;
  text-align: center;
`

export default () => {
  return(
    <div style={styles.container}>
      <Input label='X-offset' />
      <Input label='Y-offset' />
      <Input label='Spread' />
      <Input label='Blur radius' />
      <Input label='Opacity' />
      <Input type='color' label='Shadow color' />
      <Line/>
      <ButtonContainer>
        <Button>Add new +</Button>
      </ButtonContainer>
      <BoxShadow>
        <Text>10px 20px 15px 20px rgba(0,0,0,0,0.7)</Text>
      </BoxShadow>
    </div>
  )
}


const styles = {
  container:{
    display: 'flex',
    flexDirection: 'column',
    width: 366
  }
}
