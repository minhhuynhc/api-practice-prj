import React, { Component, useEffect, useState } from 'react';
import axios from 'axios'

const UserList = () => {

    const [users, setUsers] = useState([])
    useEffect(()=>{
    axios
    .get(`http://localhost:8000/api/users`)
    .then(res => {setUsers(res.data);console.log(res)})
    .catch(err => console.log(err))
    },[])

    const handleCreate = () =>{
        window.location.href = "/user/add"
    }

    return (
        <div>
            <ul>
                {users.map(user => 
                <li className="li">
                <a href={`/user/${user.id}`}>{user.name}</a>
                </li>
                )}
            </ul>
            <button onClick={handleCreate}>Create</button>
        </div>
    );
};

export default UserList;