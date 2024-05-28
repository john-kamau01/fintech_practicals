import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import axios from 'axios';


import Home from "./pages/Home";
import Students from "./pages/Students";
import Classes from "./pages/Classes";
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import ViewStudent from './pages/ViewStudent';


function App(){

  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
  
    const fetchStudents = async () => {
      try {
          // Send a GET request to fetch all students
          const response = await axios.get('http://localhost:8000/students');
          // Update the state with the fetched students
          setStudents(response.data);
      } catch (error) {
          // Handle any errors
          console.error('Error fetching students:', error);
      }
   };
   fetchStudents();
  }, [])


  

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/students">Students</Link></li>
              <li><Link to="/students/add">Add Students</Link></li>
            </ul>
          </nav>
  
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/students" element={<Students students={students} setStudents={setStudents} />} />
            <Route path="/students/view/:id" element={<ViewStudent />} />
            <Route path="/students/add" element={<AddStudent />} />
            <Route path="/students/edit/:id" element={<EditStudent />} />
            <Route path="/classes" element={<Classes />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App;