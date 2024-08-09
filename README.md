# Warehouse Management System

This project is a Warehouse Management System built using React, Redux, and Node.js. The system allows users to manage warehouse data, including adding, updating, and deleting warehouse records. Each warehouse record contains details such as `name`, `code`, `city`, `space_available`, `type`, `cluster`, `is_registered`, and `is_live`.

## Features

- **Add Warehouse**: Users can add new warehouses by providing the necessary details.
- **Update Warehouse**: Users can edit existing warehouses, including toggling boolean fields like `is_registered` and `is_live`.
- **Delete Warehouse**: Users can delete warehouse records.
- **Search Warehouses**: Users can search through the list of warehouses based on various fields.

## Technologies Used

### Frontend:
- React
- Redux
- Material-UI

### Backend:
- Node.js
- Express.js
- File System (fs) for data storage (JSON file)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/rajdhanwar-suraj/stockarea_project_test.git
    cd warehouse-management-system
    ```

2. **Install dependencies**:

    ```bash
    cd my-warehouse-app
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm start
    ```

4. **Backend server**:

   The backend server runs on Node.js using Express. To start the backend server, navigate to the backend directory and run:

   ```bash
   cd warehouse-backend
   npm run start



# Running the App

After the server is running, open http://localhost:3000 to view it in the browser.

# API Endpoints

GET /api/warehouses: Fetch all warehouses.

POST /api/warehouses: Add a new warehouse.

PUT /api/warehouses/
: Update an existing warehouse.

DELETE /api/warehouses/
: Delete a warehouse.

# Project Structure

src/components: Contains React components like WarehouseList, WarehouseItem, etc.

src/redux: Redux setup including actions, reducers, and store configuration.

src/App.js: Main application component.

backend/server.js: Node.js Express server that handles API requests.

# Usage

Adding a Warehouse: Click on the "Add New Warehouse" button and fill in the required details in the dialog that appears.

Editing a Warehouse: Click the "Edit" button on a warehouse card to modify its details.

Deleting a Warehouse: Click the "Delete" button to remove a warehouse from the list.

Searching: Use the search bar at the top to filter through the warehouse list.

# Future Improvements

Authentication: Implement user authentication and authorization.

Database Integration: Move from JSON file storage to a database like MongoDB.

Enhanced UI/UX: Improve the user interface and experience with additional features.

# Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue.