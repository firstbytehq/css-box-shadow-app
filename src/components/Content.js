import React from 'react';

import styled from 'styled-components';

import Controls from 'components/Controls';
import Preview from 'components/Preview';

const Content = styled.div`
  ${'' /* width: 1440px; */}
  min-height: 1200px;
  background: #2E2637;
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 146px;
  padding-bottom: 50px;
  ${'' /* padding: 146px; */}
`

export default () => (
  <Content>
    <Controls />
    <Preview />
  </Content>
)
