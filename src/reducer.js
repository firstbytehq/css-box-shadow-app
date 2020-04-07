
import { Rectangle, RoundedRectangle, Circle } from 'components/Shapes';

const SELECT_SHAPE = 'SELECT_SHAPE';
const LOAD_SHADOW_PROPERTY = 'LOAD_SHADOW_PROPERTY';
const UPDATE_SHADOW_PROPERTY = 'UPDATE_SHADOW_PROPERTY';

const initialState = {
  ActiveShape: Rectangle,
  shapes: [
    {
      id: 'rectangle',
      Shape: Rectangle,
      isSelected: true
    },
    {
      id: 'rounded-rectangle',
      Shape: RoundedRectangle,
      isSelected: false
    },
    {
      id: 'circle',
      Shape: Circle,
      isSelected: false
    }
  ],
  shadowControls: [
    {
      id: Math.floor(Math.random() * 100) + 1,
      xOffset: 0,
      yOffset: 4,
      spread: 0,
      blurRadius: 2,
      opacity: 0.25,
      shadowColor: '#000000',
      isActive: true
    }
  ],
  activeShadow: {},
  boxShadow: '0px 4px 0px 2px rgba(0,0,0,0,0.25)'
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_SHADOW_PROPERTY:
      return { ...state, activeShadow: initialState.shadowControls[0] }

    case SELECT_SHAPE:
      const updatedShapes = state.shapes.map(item => {
        if (item.id === payload) {
          return { ...item, isSelected: true }
        }else {
          return { ...item, isSelected: false }
        }
      });
      const selectedShape = updatedShapes.find(item=> item.isSelected === true);
      return { ...state, shapes: updatedShapes,  ActiveShape: selectedShape.Shape }

    case UPDATE_SHADOW_PROPERTY:{
      const { key, value } = payload;
      const { activeShadow } = state;
      const {
        xOffset,
        yOffset,
        spread,
        blurRadius,
        opacity,
        shadowColor
      } = activeShadow;
      const color = key === 'shadowColor'? value : shadowColor;
      const offsetX = key === 'xOffset' ? value : xOffset;
      const offsetY = key === 'yOffset' ? value : yOffset;
      const blur = key === 'blurRadius' ? value : blurRadius;
      const spr = key === 'spread' ? value : spread;
      const opa = key === 'opacity'? value : opacity;

      const col = color.replace('#', '');
      let bigint = parseInt(col, 16);
      let r = (bigint >> 16) & 255;
      let g = (bigint >> 8) & 255;
      let b = bigint & 255;

      const colorCode = `rgba(${r},${g},${b},${opa})`
      const cssCode = `${offsetX}px ${offsetY}px ${blur}px ${spr}px ${colorCode}`;

      return {
        ...state,
        activeShadow: {
          ...state.activeShadow,
          [key] : value
        },
        boxShadow: cssCode
      }
    }

    default:
      return state
  }
}

export const loadShadowproperty = () => ({ type: LOAD_SHADOW_PROPERTY });

export const selectShape = (shapeId) => ({ type: SELECT_SHAPE, payload: shapeId });

export const updateShadowProperty = ({ key, value }) => ({
  type: UPDATE_SHADOW_PROPERTY,
  payload: { key, value }
})
