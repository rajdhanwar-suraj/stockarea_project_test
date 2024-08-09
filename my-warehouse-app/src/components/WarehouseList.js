import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWarehouses, addWarehouse, updateWarehouse, deleteWarehouse } from '../redux/actions/warehouseActions';
import WarehouseItem from './WarehouseItem';
import { TextField, Box, Grid, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, Switch, FormControlLabel  } from '@mui/material';

const WarehouseList = () => {
  const dispatch = useDispatch();
  const warehouses = useSelector(state => state.warehouses.warehouses);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [newWarehouse, setNewWarehouse] = useState({
    name: '',
    code: '',
    id: '',
    city: '',
    space_available: '',
    type: '',
    cluster: '',
    is_registered: false,
    is_live: false
  });

  useEffect(() => {
    dispatch(fetchWarehouses());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredWarehouses = warehouses.filter(warehouse =>
    Object.keys(warehouse).some(key =>
      warehouse[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleAddWarehouse = () => {
    setIsEditing(false);
    setIsDialogOpen(true);
    setSelectedWarehouse(null);
    setNewWarehouse({
      name: '',
      code: '',
      city: '',
      space_available: '',
      type: '',
      cluster: '',
      is_registered: false,
      is_live: false
    });
  };

  const handleEditWarehouse = (warehouse) => {
    console.log(warehouse);

    setIsEditing(true);
    setIsDialogOpen(true);
    setSelectedWarehouse(warehouse);
    setNewWarehouse(warehouse);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setNewWarehouse({
      name: '',
      code: '',
      id: '',
      city: '',
      space_available: '',
      type: '',
      cluster: '',
      is_registered: false,
      is_live: false
    });
  };

  // const handleNewWarehouseChange = (event) => {
  //   const { name, value } = event.target;
  //   setNewWarehouse(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };


  const handleNewWarehouseChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewWarehouse(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


  const handleSaveWarehouse = () => {
    if (isEditing) {
      dispatch(updateWarehouse(newWarehouse));
    } else {
      dispatch(addWarehouse(newWarehouse));
    }
    handleDialogClose();
  };

  const handleDeleteWarehouse = (id) => {
    dispatch(deleteWarehouse(id));
  };

  return (
    <Box>
      <TextField
        label="Search..."
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <Button variant="contained" color='success' onClick={handleAddWarehouse} style={{ marginBottom: '20px' }}>
        Add New Warehouse
      </Button>
      <Grid container spacing={2} marginBottom={4}>
        {filteredWarehouses?.map(warehouse => (
          <Grid item xs={12} sm={6} md={4} key={warehouse.id}>
            <Paper
              elevation={3}
              style={{ padding: '20px' }}
            >
              <WarehouseItem warehouse={warehouse} />
              <Button
                variant="contained"
                onClick={() => handleEditWarehouse(warehouse)}
                style={{ margin: '10px  10px  0px 0px' }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDeleteWarehouse(warehouse.id)}
                style={{ marginTop: '10px ' }}

              >
                Delete
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{isEditing ? 'Edit Warehouse' : 'Add New Warehouse'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={newWarehouse.name}
            onChange={handleNewWarehouseChange}
          />
          <TextField
            label="Code"
            variant="outlined"
            fullWidth
            margin="normal"
            name="code"
            value={newWarehouse.code}
            onChange={handleNewWarehouseChange}
          />
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
            name="city"
            value={newWarehouse.city}
            onChange={handleNewWarehouseChange}
          />
          <TextField
            label="Space Available"
            variant="outlined"
            fullWidth
            margin="normal"
            name="space_available"
            value={newWarehouse.space_available}
            onChange={handleNewWarehouseChange}
          />
          <TextField
            label="Type"
            variant="outlined"
            fullWidth
            margin="normal"
            name="type"
            value={newWarehouse.type}
            onChange={handleNewWarehouseChange}
          />
          <TextField
            label="Cluster"
            variant="outlined"
            fullWidth
            margin="normal"
            name="cluster"
            value={newWarehouse.cluster}
            onChange={handleNewWarehouseChange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={newWarehouse.is_registered}
                onChange={handleNewWarehouseChange}
                name="is_registered"
                color="primary"
              />
            }
            label="Is Registered"
          />
          <FormControlLabel
            control={
              <Switch
                checked={newWarehouse.is_live}
                onChange={handleNewWarehouseChange}
                name="is_live"
                color="primary"
              />
            }
            label="Is Live"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveWarehouse} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default WarehouseList;
