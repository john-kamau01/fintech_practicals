import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import axios from 'axios';

const ViewStudent = () => {
    const { id } = useParams(); // Access the route parameter 'id'
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/students/${id}`);
                console.log(response.data)
                setStudent(response.data);
            } catch (error) {
                console.error('Error fetching student:', error);
            }
        };

        fetchStudent();
    }, [id]); // Re-run effect whenever 'id' changes

    return (
        <div>
            <h2>Student Details</h2>
            {student ? (
                <div className="studentDetails">
                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Class:</strong> {student.className}</p>
                    
                    <hr />
                    <Link to="/students">Go Back</Link>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ViewStudent;
