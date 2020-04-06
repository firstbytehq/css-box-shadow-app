import React from 'react';

import styled from 'styled-components';

import Controls from './Controls';
import Preview from './Preview';

const Content = styled.div`
  ${'' /* width: 1440px; */}
  height: 1200px;
  background: #2E2637;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 146px;
  ${'' /* padding: 146px; */}
`

export default () => (
  <Content className='second'>
    <Controls />
    <Preview />
  </Content>
)
