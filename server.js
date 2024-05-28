const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT =  8000;

app.use(express.json());
app.use(cors());

// CONNECT TO DB
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs_fintech_project',
});

// ROUTES
app.get("/", (req, res) => {
    res.status(200).send({message:"Worked"})
})


// Get all users
app.get('/students', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Get a user by ID
  app.get('/students/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM students WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      res.json(results[0]);
    });
  });
  
  // Create a new user
  app.post('/students', (req, res) => {
    const { name, className } = req.body;
    db.query('INSERT INTO students (name, classname) VALUES (?, ?)', [name, className], (err, result) => {
      if (err) throw err;
      res.json({ message: 'Student added successfully', id: result.insertId });
    });
  });
  
  // Update a user
  app.put('/students/:id', (req, res) => {
    const { id } = req.params;
    const { name, className } = req.body;
    db.query('UPDATE students SET name = ?, className = ? WHERE id = ?', [name, className, id], (err) => {
      if (err) throw err;
      res.json({ message: 'User updated successfully' });
    });
  });
  
  // Delete a user
  app.delete('/students/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM students WHERE id = ?', [id], (err) => {
      if (err) throw err;
      res.json({ message: 'User deleted successfully' });
    });
  }); 

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  }); 
});

   