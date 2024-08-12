import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res =>{ 
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
           <Link to={`/createUser/`}>Create</Link>
            <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`}>Update</Link>  
                                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
    
}
