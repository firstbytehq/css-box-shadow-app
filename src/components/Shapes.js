import styled from 'styled-components';

export const Rectangle = styled.div`
  width: 78px;
  height: 53px;
  background: #F5EFEF;
  border: ${props => `5px solid ${props.isSelected? '#C22256' : 'transparent'}`};
  box-sizing: border-box;
  cursor: pointer;
`;
export const RoundedRectangle = styled.div`
  width: 78px;
  height: 45px;
  background: #F5EFEF;
  border-radius: 10px;
  border: ${props => `5px solid ${props.isSelected? '#C22256' : 'transparent'}`};
  cursor: pointer;
`;
export const Circle = styled.div`
  width: 52px;
  height: 52px;
  background: #F5EFEF;
  border-radius: 35px;
  border: ${props => `5px solid ${props.isSelected? '#C22256' : 'transparent'}`};
  cursor: pointer;
`
