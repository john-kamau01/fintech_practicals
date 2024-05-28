import axios from "axios";
import { Link } from "react-router-dom";

const Students = ({students, setStudents}) => {

    const handleDelete = async (id) => {
        try {
            // Send a DELETE request to delete the student
            await axios.delete(`http://localhost:8000/students/${id}`);
            // Update the list of students after deletion
            setStudents(students.filter(student => student.id !== id));
            console.log("Student deleted successfully...")
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    return (
        <div>
            <h1>All Students</h1>
            <table cellPadding={5} border={1}>
    <thead>
        <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Edit</th>
            <th>View</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {students.map((student) => {
            return (
                <tr key={student.id}>
                    <td >
                        <p>{student.name}</p>
                    </td>
                    <td >
                        <p>{student.className}</p>
                    </td>
                    <td >
                        <Link to={`/students/edit/${student.id}`}>Edit</Link>
                    </td>
                    <td >
                        <Link to={`/students/view/${student.id}`}>View</Link>
                    </td>
                    <td >
                    <button onClick={() => handleDelete(student.id)}>Delete</button>
                    </td>
                </tr>
            );
        })}
    </tbody>
</table>

        </div>
        
        
    )
}

export default Students