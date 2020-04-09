import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import InputContainer from 'components/InputContainer';
import { addShadow, deleteShadow, selectActiveShadow } from 'reducer';

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
cursor: pointer;
`;
const ButtonContainer = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: flex-end;
`;
const BoxShadow = styled.div`
  width: 366px;
  height: 41px;
  background: ${ props => props.isActive ? '#C22256' : '#F5EFEF'};
  border-radius: 10px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  position:relative;
  z-index:50;
  :hover{
    border: 3px solid #C22256;
    box-sizing: border-box;
    ${'' /* z-index: auto; */}
    .delete {
      width: 31px;
      height: 31px;
      background: #C22256;
      border: 2px solid #FFFFFF;
      box-sizing: border-box;
      border-radius: 100%;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 1px;
      padding-bottom: 3px;
      font-size: 18px;
      position:absolute;
      top:-15px;
      right: -15px;
      z-index: 100;
      cursor: pointer;
    }
  }
  .delete {
    display: none;
  }
`;
const Text = styled.span`
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: ${props => props.isActive ? '#FFFFFF' : '#000000'};
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 366px;
`

const Controls = ({ shadowControls, addShadow, deleteShadow, selectActiveShadow }) => {

// WIP
const deleteShadowProperty = ({ e, id }) => {
    if (shadowControls.find(item => (item.id === id) && item.isActive === true)) {
      alert('This operation is not possible in active shadow')
    }else {
      e.stopPropagation();
      deleteShadow(id);
    }
}

  return(
    <Container>
      <InputContainer />
      <Line/>
      <ButtonContainer>
        <Button onClick={() => addShadow({
          id: Math.floor(Math.random() * 100) + 1,
          xOffset: 0,
          yOffset: 0,
          spread: 0,
          blurRadius: 0,
          opacity: 1,
          shadowColor: '#000000',
          isActive: true
        })}>
        Add new +
      </Button>
      </ButtonContainer>
      {
        shadowControls.map(item => {
          const { id, boxShadow, isActive } = item;
          return(
            <BoxShadow
              id='previewBox'
              key={id}
              isActive={isActive && shadowControls.length > 1 }
              onClick={() => selectActiveShadow(id)}
            >
              <Text isActive={isActive && shadowControls.length > 1 }>{boxShadow}</Text>
              {shadowControls.length > 1 ?
                <div
                  class="delete"
                  onClick={ e => deleteShadowProperty({ e, id }) }
                >
                  <span>x</span>
                </div>
                : null
              }
            </BoxShadow>
          )
        })
      }
    </Container>
  )
}

const mapStateToProps = (state) => ({
  shadowControls: state.shadowControls
 });

const mapDispatchToProps = { addShadow, deleteShadow, selectActiveShadow }

export default connect(mapStateToProps,mapDispatchToProps)(Controls)
