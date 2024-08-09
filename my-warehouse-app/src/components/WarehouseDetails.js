import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWarehouse, deleteWarehouse } from '../redux/actions/warehouseActions';
import { TextField, Button, Box } from '@mui/material';

const WarehouseDetail = ({ warehouse }) => {
  const dispatch = useDispatch();
  const [editedWarehouse, setEditedWarehouse] = useState({ ...warehouse });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedWarehouse(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    dispatch(updateWarehouse(editedWarehouse));
  };

  const handleDelete = () => {
    dispatch(deleteWarehouse(warehouse.id));
  };

  return (
    <Box>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="name"
        value={editedWarehouse.name}
        onChange={handleChange}
      />
      <TextField
        label="City"
        variant="outlined"
        fullWidth
        margin="normal"
        name="city"
        value={editedWarehouse.city}
        onChange={handleChange}
      />
      <TextField
        label="Space Available"
        variant="outlined"
        fullWidth
        margin="normal"
        name="space_available"
        value={editedWarehouse.space_available}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSave} style={{ marginRight: '10px' }}>
        Save
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
};

export default WarehouseDetail;
