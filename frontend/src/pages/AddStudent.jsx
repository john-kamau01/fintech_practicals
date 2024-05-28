import { useState } from "react";
import axios from "axios"

const AddStudent = () => {
    const [name, setName] = useState("");
    const [className, setClassName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send a POST request to the server with the student data
            const response = await axios.post('http://localhost:8000/students', { name, className });

            // Log the server response
            console.log(response.data);

            // Reset form fields
            setName("");
            setClassName("");
        } catch (error) {
            // Handle any errors
            console.error('Error adding student:', error);
        }
    };

    return (
        <form>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter student name" />
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


            <button type="submit" onClick={handleSubmit}>Submit</button>
            
        </form>
    )

}

export default AddStudent;