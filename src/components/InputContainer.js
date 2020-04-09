import React, { useState } from 'react';
import { connect } from 'react-redux';

import Input from 'components/Input';

import { updateShadowProperty } from 'reducer';

const InputContainer = ({ shadowControls, updateShadowProperty }) => {

  // const [xoffsetFocused, setXoffsetFocused] = useState(true);
  // const [yoffsetFocused, setYoffsetFocused] = useState(false);
  // const [blurRadiusFocused, setBlurradiusFocused] = useState(false);
  // const [spreadFocused, setSpreadFocused] = useState(false);
  // const [opacityFocused, setOpacityFocused] = useState(false);
  const [focused, setFocused] = useState({
    xoffsetFocused: true,
    yoffsetFocused: false,
    blurRadiusFocused: false,
    spreadFocused: false,
    opacityFocused: false
  })

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
      focused={focused.xoffsetFocused}
      onChange={(value) => {
        if (isNaN(value)) {
          if (value === '-') {
            updateShadowProperty({ key: 'xOffset', value, id })
          }
        }else {
          updateShadowProperty({ key: 'xOffset', value, id })
        }
        setFocused({
          xoffsetFocused: true,
          yoffsetFocused: false,
          blurRadiusFocused: false,
          spreadFocused: false,
          opacityFocused: false
        })
      }}
    />
    <Input
      label='Y-offset'
      value={yOffset}
      focused={focused.yoffsetFocused}
      onChange={(value) => {
        if (isNaN(value)) {
          if (value === '-') {
            updateShadowProperty({ key: 'yOffset', value, id })
          }
        }else {
          updateShadowProperty({ key: 'yOffset', value, id })
        }
        setFocused({
          xoffsetFocused: false,
          yoffsetFocused: true,
          blurRadiusFocused: false,
          spreadFocused: false,
          opacityFocused: false
        })
      }}
    />
    <Input
      label='Blur radius'
      value={blurRadius}
      focused={focused.blurRadiusFocused}
      onChange={(value) => {
        if (!isNaN(value) && value.search('-') === -1) {
          updateShadowProperty({ key: 'blurRadius', value, id })
        }
        setFocused({
          xoffsetFocused: false,
          yoffsetFocused: false,
          blurRadiusFocused: true,
          spreadFocused: false,
          opacityFocused: false
        })
      }}
    />
    <Input
      label='Spread'
      value={spread}
      focused={focused.spreadFocused}
      onChange={(value) => {
        if (!isNaN(value) && value.search('-') === -1) {
          updateShadowProperty({ key: 'spread', value, id })
        }
        setFocused({
          xoffsetFocused: false,
          yoffsetFocused: false,
          blurRadiusFocused: false,
          spreadFocused: true,
          opacityFocused: false
        })
      }}
    />
    <Input
      label='Opacity'
      value={opacity}
      focused={focused.opacityFocused}
      onChange={(value) => {
        if (!isNaN(value) && value.search('-') === -1) {
          updateShadowProperty({ key: 'opacity', value, id})
        }
        setFocused({
          xoffsetFocused: false,
          yoffsetFocused: false,
          blurRadiusFocused: false,
          spreadFocused: false,
          opacityFocused: true
        })
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
