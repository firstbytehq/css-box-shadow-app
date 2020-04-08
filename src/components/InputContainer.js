import React from 'react';
import { connect } from 'react-redux';

import Input from 'components/Input';

import { updateShadowProperty } from 'reducer';

const InputContainer = ({ shadowControls, updateShadowProperty }) => {
  const activeShadow = shadowControls.find(item=> item.isActive === true);
  const {
    id,
    xOffset,
    yOffset,
    spread,
    blurRadius,
    opacity,
    shadowColor
} = activeShadow
  return(
    <>
    <Input
      label='X-offset'
      value={xOffset}
      onChange={(value) => {
        if (isNaN(value)) {
          if (value === '-') {
            updateShadowProperty({ key: 'xOffset', value, id })
          }
        }else {
          updateShadowProperty({ key: 'xOffset', value, id })
        }
      }}
    />
    <Input
      label='Y-offset'
      value={yOffset}
      onChange={(value) => {
        if (isNaN(value)) {
          if (value === '-') {
            updateShadowProperty({ key: 'yOffset', value, id })
          }
        }else {
          updateShadowProperty({ key: 'yOffset', value, id })
        }
      }}
    />
    <Input
      label='Blur radius'
      value={blurRadius}
      onChange={(value) => {
        if (!isNaN(value) && value.search('-') === -1) {
          updateShadowProperty({ key: 'blurRadius', value, id })
        }
      }}
    />
    <Input
      label='Spread'
      value={spread}
      onChange={(value) => {
        if (!isNaN(value) && value.search('-') === -1) {
          updateShadowProperty({ key: 'spread', value, id })
        }
      }}
    />
    <Input
      label='Opacity'
      value={opacity}
      onChange={(value) => {
        if (!isNaN(value) && value.search('-') === -1) {
          updateShadowProperty({ key: 'opacity', value, id})
        }
      }}
    />
    <Input
      type='color'
      label='Shadow color'
      value={shadowColor}
      onChange={(value) => updateShadowProperty({ key: 'shadowColor', value, id })}
    />
    </>
  )
}

const mapStateToProps = state => ({ shadowControls: state.shadowControls })

export default connect(mapStateToProps, {updateShadowProperty})(InputContainer)
