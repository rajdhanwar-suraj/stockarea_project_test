import api from '../../utils/api';
import { FETCH_WAREHOUSES, ADD_WAREHOUSE, UPDATE_WAREHOUSE, DELETE_WAREHOUSE } from './types';

export const fetchWarehouses = () => async dispatch => {
  const res = await api.get('/api/warehouses');
  dispatch({
    type: FETCH_WAREHOUSES,
    payload: res.data
  });
};

export const addWarehouse = (warehouse) => async dispatch => {
  const res = await api.post('/api/warehouses', warehouse);
  dispatch({
    type: ADD_WAREHOUSE,
    payload: res.data
  });
};

export const updateWarehouse = (warehouse) => async dispatch => {
  const res = await api.put(`/api/warehouses/${warehouse.id}`, warehouse);
  dispatch({
    type: UPDATE_WAREHOUSE,
    payload: res.data
  });
};

export const deleteWarehouse = (id) => async dispatch => {
  await api.delete(`/api/warehouses/${id}`);
  dispatch({
    type: DELETE_WAREHOUSE,
    payload: id
  });
};
