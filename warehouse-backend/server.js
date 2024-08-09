const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const warehouseFilePath = path.join(__dirname, '../warehouse.json');

// Fetch all warehouses
app.get('/api/warehouses', (req, res) => {
  fs.readFile(warehouseFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read file' });
    }
    const warehouses = JSON.parse(data);
    res.json(warehouses);
  });
});

// Add a new warehouse
app.post('/api/warehouses', (req, res) => {
  fs.readFile(warehouseFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read file' });
    }

    const warehouses = JSON.parse(data);


    // Generate a new ID based on the last warehouse's ID
    const newId = warehouses.length ? Math.max(...warehouses.map(w => w.id)) + 1 : 1;

    const newWarehouse = { id: newId, ...req.body };

    warehouses.push(newWarehouse);

    fs.writeFile(warehouseFilePath, JSON.stringify(warehouses, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to write file' });
      }
      res.json(newWarehouse);
    });
  });
});


// Update a warehouse
app.put('/api/warehouses/:id', (req, res) => {
  fs.readFile(warehouseFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read file' });
    }
    let warehouses = JSON.parse(data);
    const warehouseId = parseInt(req.params.id, 10);
    const warehouseIndex = warehouses.findIndex(w => w.id === warehouseId);
    if (warehouseIndex === -1) {
      return res.status(404).json({ error: 'Warehouse not found' });
    }

    warehouses[warehouseIndex] = { ...warehouses[warehouseIndex], ...req.body };

    fs.writeFile(warehouseFilePath, JSON.stringify(warehouses, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to write file' });
      }
      res.json(warehouses[warehouseIndex]);
    });
  });
});

// Delete a warehouse
app.delete('/api/warehouses/:id', (req, res) => {
  fs.readFile(warehouseFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read file' });
    }
    let warehouses = JSON.parse(data);
    const warehouseId = parseInt(req.params.id, 10);
    warehouses = warehouses.filter(w => w.id !== warehouseId);

    fs.writeFile(warehouseFilePath, JSON.stringify(warehouses, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to write file' });
      }
      res.json({ message: 'Warehouse deleted' });
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
