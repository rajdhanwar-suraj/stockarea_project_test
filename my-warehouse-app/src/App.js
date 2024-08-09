import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import WarehouseListPage from './pages/WarehouseListPage';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage';

function App() {
  return (
    <Container>
      <Routes>
        <Route exact path="/" element={<WarehouseListPage />} />
        <Route path="/warehouse/:id" element={<WarehouseDetailsPage />} />
      </Routes>
    </Container>
  );
}

export default App;
