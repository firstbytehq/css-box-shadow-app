import React from 'react';

import styled from 'styled-components';

import PreviewContainer from 'components/PreviewContainer';
import SelectShape from 'components/SelectShape';
import CssCode from 'components/CssCode';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 768px) {
    width: 318.26px;
  }
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
