
import { Rectangle, RoundedRectangle, Circle } from 'components/Shapes';

const SELECT_SHAPE = 'SELECT_SHAPE';

const initialState = {
  //selectedShape: 'Rectangle',
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
  ]
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
      const selectedShape = updatedShapes.find(item=> item.isSelected === true);
      return { ...state, shapes: updatedShapes,  ActiveShape: selectedShape.Shape }
    default:
      return state
  }
}


export const selectShape = (shapeId) => ({ type: SELECT_SHAPE, payload: shapeId })
