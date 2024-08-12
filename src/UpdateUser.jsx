import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateUser = () => {
    const id = useParams()
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    useEffect(() => {
      axios.get('http://localhost:3001/getUser/' + id)
      .then(res => {
        console.log(res)
        setName(res.data.name)
        setEmail(res.data.email)
        setAge(res.data.age)
      })
    }, [])

    const update = (e) => {
      e.preventDefault();
      axios.put('http://localhost:3001/updateUser/'+id,{name, email, age})
      .then(result => {
        console.log(result)
        navigate('/')
      })
    }

  return (
    <div>
        <div>
            <form onSubmit={update}>
                <h2>Update User</h2>
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

                <button type='update'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser