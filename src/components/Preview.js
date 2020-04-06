import React from 'react';

import PreviewContainer from './PreviewContainer';
import SelectShape from './SelectShape';
import CssCode from './CssCode';

export default () => {
  return(
    <div style={styles.container}>
      <PreviewContainer />
      <SelectShape />
      <CssCode />
    </div>
  )
}

const styles = {
  display: 'flex',
  flexDirection: 'column'
}
