import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditStudent = () => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [className, setClassName] = useState("");
    const [oldName, setOldName] = useState("");
    const [oldClassName, setOldClassName] = useState("");

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/students/${id}`);
                const studentData = response.data;
                setOldName(studentData.name); // Set old name from fetched student data
                setOldClassName(studentData.className); // Set old class name from fetched student data
                setName(studentData.name); // Set current name to be edited
                setClassName(studentData.className); // Set current class name to be edited
            } catch (error) {
                console.error('Error fetching student:', error);
            }
        };

        fetchStudent();
    }, [id]); // Re-run effect when ID changes

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send a PUT request to update the student data
            const response = await axios.put(`http://localhost:8000/students/${id}`, { name, className });

            // Log the server response
            console.log(response.data);

            // Reset form fields
            setName("");
            setClassName("");
        } catch (error) {
            // Handle any errors
            console.error('Error updating student:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    placeholder="Enter student name" 
                />
            </div>

            <div>
                <label>Classname</label>
                <select 
                    name="className" 
                    value={className} 
                    onChange={(e) => setClassName(e.target.value)} 
                    required
                >
                    <option value="">Select Class</option>
                    <option value="Form 1A">Form 1A</option>
                    <option value="Form 1B">Form 1B</option>
                    <option value="Form 1C">Form 1C</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default EditStudent;
