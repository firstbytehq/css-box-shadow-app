
const SELECT_SHAPE = 'SELECT_SHAPE';
const UPDATE_SHADOW_PROPERTY = 'UPDATE_SHADOW_PROPERTY';

const initialState = {
  shapes: [
    {
      id: 'rectangle',
      isSelected: true
    },
    {
      id: 'rounded-rectangle',
      isSelected: false
    },
    {
      id: 'circle',
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
  boxShadow: '0px 4px 0px 2px rgba(0,0,0,0,0.25)'
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case SELECT_SHAPE:
      const updatedShapes = state.shapes.map(item => {
        if (item.id === payload) {
          return { ...item, isSelected: true }
        }else {
          return { ...item, isSelected: false }
        }
      });
      return { ...state, shapes: updatedShapes }

    case UPDATE_SHADOW_PROPERTY:{
      const { key, value, id } = payload;
      const activeShadow = state.shadowControls.find(item=> item.isActive === true);
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

      const updatedShadowControls = state.shadowControls.map(item => {
        if (item.id === id) {
          return { ...item, [key] : value }
        }else {
          return item
        }
      })

      return {
        ...state,
        shadowControls: updatedShadowControls,
        boxShadow: cssCode
      }
    }

    default:
      return state
  }
}

export const selectShape = (shapeId) => ({ type: SELECT_SHAPE, payload: shapeId });

export const updateShadowProperty = ({ key, value, id }) => ({
  type: UPDATE_SHADOW_PROPERTY,
  payload: { key, value, id }
})
