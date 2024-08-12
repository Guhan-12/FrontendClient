import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const CreateUser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createUser',{name, email, age})
        .then(result => {
            console.log(result)
            navigate('/');
        })
        .catch(err => console.log(err));
    }
  return (
    <div>
        <div>
            <form onSubmit={submit}>
                <h2>Add User</h2>
                <div>
                    <label>Name :</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>

                <div>
                    <label>Email :</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div>
                    <label>Age :</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

