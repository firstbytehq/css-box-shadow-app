import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import InputContainer from './InputContainer';

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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 366px;
`

const Controls = ({ shadowControls, boxShadow }) => {
  return(
    <Container>
      <InputContainer />
      <Line/>
      <ButtonContainer>
        <Button>Add new +</Button>
      </ButtonContainer>
      <BoxShadow>
        <Text>{boxShadow}</Text>
      </BoxShadow>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  shadowControls: state.shadowControls,
  boxShadow: state.boxShadow
 });

export default connect(mapStateToProps)(Controls)
