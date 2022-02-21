// Express.js Server and REST API
const express = require("express");
const cors = require("cors");
const app = express();

// Database connection
const pool = require("./db");

// Handle Server Error
const handleServerError = require('./helpers/handleServerError');

// Variables
const port = 8000;

// Middleware
app.use(cors()); // Cors to make server requests work on client
app.use(express.json()); // Parse JSON

// ROUTES
// ========================================
// CREATE Todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body; // Get description from request
    const createTodo = await pool.query( // Insert into Postgre
      "INSERT INTO todos (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(createTodo.rows[0]); // Return query result. rows[0] returns created todo
  } catch (err) {
    handleServerError(err);
  };
});

// READ
// Get all todos
app.get('/todos', async (req, res) => {
  try {
    const getTodos = await pool.query('SELECT*FROM todos'); // Select from Postgre
    res.json(getTodos.rows); // Return an array of todos
  } catch (err) {
    handleServerError(err);
  };
});

// Get single todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get id from Express params slug
    const getTodo = await pool.query( // Select from Postgre by id
      'SELECT*FROM todos WHERE id=$1',
      [id]
    );
    res.json(getTodo); // Return todo
  } catch (err) {
    handleServerError(err);
  };
});

// UPDATE
// Update todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { description } = req.body; // Get updated description from request
    const { id } = req.params; // Get it from params slug
    const updateTodo = await pool.query( // Update in Postgre and return updated todo
      'UPDATE todos SET description=$1 WHERE id=$2 RETURNING *',
      [description, id]
    );
    res.json(updateTodo.rows[0]); // Return updated todo
  } catch (err) {
    handleServerError(err);
  };
});

// DELETE
// Delete todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get id from Express request params
    console.log(id);

    const deleteTodo = await pool.query( // Delete in Postgre
      'DELETE FROM todos WHERE id=$1',
      [id]
    );
    res.sendStatus(200); // Return success
  } catch (err) {
    handleServerError(err);
  };
});

// Route Not Found. 404. All routes not defined ABOVE will be processed as 404
app.all('*', (req, res) => {
  res.sendStatus(404);
});

// START SERVER
// ========================================
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
