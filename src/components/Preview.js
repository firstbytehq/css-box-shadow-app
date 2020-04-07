import React from 'react';

import styled from 'styled-components';

import PreviewContainer from './PreviewContainer';
import SelectShape from './SelectShape';
import CssCode from './CssCode';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export default () => {
  return(
    <Column>
      <PreviewContainer />
      <SelectShape />
      <CssCode />
    </Column>
  )
}
