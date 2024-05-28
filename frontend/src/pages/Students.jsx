import { Link } from "react-router-dom";

const Students = ({students}) => {
    // const {students} = props;
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
                        <Link to={`/edit/${student.id}`}>Edit</Link>
                    </td>
                    <td >
                        <Link to={`/view/${student.id}`}>View</Link>
                    </td>
                    <td >
                    <Link to={`/delete/${student.id}`}>Delete</Link>
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