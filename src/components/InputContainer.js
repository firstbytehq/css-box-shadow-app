import React from 'react';
import { connect } from 'react-redux';

import Input from './Input';

import { updateShadowProperty } from 'reducer';

const InputContainer = ({ activeShadow, updateShadowProperty }) => {
  const {
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
            updateShadowProperty({ key: 'xOffset', value })
          }
        }else {
          updateShadowProperty({ key: 'xOffset', value })
        }
      }}
    />
    <Input
      label='Y-offset'
      value={yOffset}
      onChange={(value) => {
        if (isNaN(value)) {
          if (value === '-') {
            updateShadowProperty({ key: 'yOffset', value })
          }
        }else {
          updateShadowProperty({ key: 'yOffset', value })
        }
      }}
    />
    <Input
      label='Spread'
      value={spread}
      onChange={(value) => {
        if (!isNaN(value) && value.search('-') === -1) {
          updateShadowProperty({ key: 'spread', value })
        }
      }}
    />
    <Input
      label='Blur radius'
      value={blurRadius}
      onChange={(value) => {
        if (!isNaN(value) && value.search('-') === -1) {
          updateShadowProperty({ key: 'blurRadius', value })
        }
      }}
    />
    <Input
      label='Opacity'
      value={opacity}
      onChange={(value) => {
        if (!isNaN(value) && value.search('-') === -1) {
          updateShadowProperty({ key: 'opacity', value})
        }
      }}
    />
    <Input
      type='color'
      label='Shadow color'
      value={shadowColor}
      onChange={(value) => updateShadowProperty({ key: 'shadowColor', value })}
    />
    </>
  )
}

const mapStateToProps = state => ({ activeShadow: state.activeShadow })

export default connect(mapStateToProps, {updateShadowProperty})(InputContainer)
