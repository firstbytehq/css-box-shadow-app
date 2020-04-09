
const SELECT_SHAPE = 'SELECT_SHAPE';
const UPDATE_SHADOW_PROPERTY = 'UPDATE_SHADOW_PROPERTY';
const ADD_SHADOW = 'ADD_SHADOW';
const DELETE_SHADOW = 'DELETE_SHADOW';
const SELECT_ACTIVE_SHADOW = 'SELECT-SELECT_ACTIVE_SHADOW';

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
      isActive: true,
      boxShadow: '0px 4px 0px 2px rgba(0,0,0,0,0.25)'
    }
  ],
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
          return { ...item, [key] : value, boxShadow: cssCode }
        }else {
          return item
        }
      })

      return {
        ...state,
        shadowControls: updatedShadowControls
      }
    }

    case ADD_SHADOW:{
      const controls = state.shadowControls.map( item => {
        return { ...item, isActive: false}
      });
      const {
        xOffset,
        yOffset,
        spread,
        blurRadius,
        opacity,
        shadowColor
      } = payload;

      const col = shadowColor.replace('#', '');
      let bigint = parseInt(col, 16);
      let r = (bigint >> 16) & 255;
      let g = (bigint >> 8) & 255;
      let b = bigint & 255;

      const colorCode = `rgba(${r},${g},${b},${opacity})`
      const cssCode = `${xOffset}px ${yOffset}px ${blurRadius}px ${spread}px ${colorCode}`;

      const newShadow = {
        ...payload,
        boxShadow: cssCode
      }

      return {
        ...state,
        shadowControls: [...controls, newShadow],
      }
    }

    case DELETE_SHADOW:{
      console.log('delete shadow',payload,state.shadowControls.filter(item => item.id !== payload));
      //return { ...state, shadowControls: state.shadowControls.filter(item => item.id !== payload)}
    }

    case SELECT_ACTIVE_SHADOW:{
      // console.log('select active shadow',payload);
      const controls = state.shadowControls.map(item => {
        if (item.id === payload) {
          return { ...item, isActive: true }
        }else {
          return { ...item, isActive: false}
        }
      });

      return { ...state, shadowControls: controls }
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

export const addShadow = (shadow) => ({ type: ADD_SHADOW, payload: shadow });

export const deleteShadow = (id) => ({ type: DELETE_SHADOW, payload: id });

export const selectActiveShadow = (id) => ({ type: SELECT_ACTIVE_SHADOW, payload: id });
