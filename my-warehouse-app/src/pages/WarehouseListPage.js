import React from 'react';
import { Typography, Box } from '@mui/material';
import WarehouseList from '../components/WarehouseList';

const WarehouseListPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Warehouse List
      </Typography>
      <WarehouseList />
    </Box>
  );
};

export default WarehouseListPage;
