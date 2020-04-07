import styled from 'styled-components';

export const Rectangle = styled.div`
  width: 79px;
  height: 53px;
  background: #F5EFEF;
  border: ${props => `5px solid ${props.isSelected? '#C22256' : 'transparent'}`};
  box-sizing: border-box;
`;
export const RoundedRectangle = styled.div`
  width: 78px;
  height: 53px;
  background: #F5EFEF;
  border-radius: 10px;
  border: ${props => `5px solid ${props.isSelected? '#C22256' : 'transparent'}`};
`;
export const Circle = styled.div`
  width: 55px;
  height: 55px;
  background: #F5EFEF;
  border-radius: 35px;
  border: ${props => `5px solid ${props.isSelected? '#C22256' : 'transparent'}`};
`
