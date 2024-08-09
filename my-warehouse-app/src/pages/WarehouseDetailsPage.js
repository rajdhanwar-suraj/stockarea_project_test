import React from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WarehouseDetail from '../components/WarehouseDetails';

const WarehouseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const warehouse = useSelector(state => state.warehouses.warehouses.find(w => w.id === parseInt(id)));

  return (
    <Box>
      <Button variant="contained" onClick={() => navigate('/')}>
        Back to List
      </Button>
      <Typography variant="h4" gutterBottom>
        Warehouse Details
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <WarehouseDetail warehouse={warehouse} />
      </Paper>
    </Box>
  );
};

export default WarehouseDetailsPage;
