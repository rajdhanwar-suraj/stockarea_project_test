import { FETCH_WAREHOUSES, ADD_WAREHOUSE, UPDATE_WAREHOUSE, DELETE_WAREHOUSE } from '../actions/types';

const initialState = {
  warehouses: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_WAREHOUSES:
      return {
        ...state,
        warehouses: action.payload
      };
    case ADD_WAREHOUSE:
      return {
        ...state,
        warehouses: [...state.warehouses, action.payload]
      };
    case UPDATE_WAREHOUSE:
      return {
        ...state,
        warehouses: state.warehouses.map(warehouse =>
          warehouse.id === action.payload.id ? action.payload : warehouse
        )
      };
    case DELETE_WAREHOUSE:
      return {
        ...state,
        warehouses: state.warehouses.filter(warehouse => warehouse.id !== action.payload)
      };
    default:
      return state;
  }
}
