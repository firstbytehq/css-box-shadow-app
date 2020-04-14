import React from 'react';

import styled from 'styled-components';

import Controls from 'components/Controls';
import Preview from 'components/Preview';

const Content = styled.div`
  min-height: 1200px;
  background: #2E2637;
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 146px;
  padding-bottom: 50px;
  @media(max-width: 768px) {
    width: 768px;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
  }
`

export default () => (
  <Content>
    <Controls />
    <Preview />
  </Content>
)
