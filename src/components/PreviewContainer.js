import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 480px;
  height: 350px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 61px;
`;
const Preview = styled.div`
  width: 250px;
  height: 174px;
  background: #C22256;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #FFFFFF;
`

export default () => {
  return (
    <Container>
      <Preview>
        <Text>Preview</Text>
      </Preview>
    </Container>
  )
}
