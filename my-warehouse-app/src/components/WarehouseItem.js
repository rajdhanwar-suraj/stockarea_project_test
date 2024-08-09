import React from 'react';
import { Typography, Box } from '@mui/material';

const WarehouseItem = ({ warehouse }) => {
  return (
    <Box>
      <Typography variant="h6">{warehouse.name}</Typography>
      <Typography variant="body1">City: {warehouse.city}</Typography>
      <Typography variant="body1">Warehouse code: {warehouse.code}</Typography>
      <Typography variant="body1">Space Available: {warehouse.space_available}</Typography>
      <Typography variant="body1">Warehouse cluster: {warehouse.cluster}</Typography>
      <Typography variant="body1">Warehouse type: {warehouse.type}</Typography>
      <Typography variant="body1">Live: {warehouse.is_live ? "Yes" : "No"}</Typography>
      <Typography variant="body1">Registered: {warehouse.is_registered ? "Yes" : "No"}</Typography>
    </Box>
  );
};

export default WarehouseItem;
