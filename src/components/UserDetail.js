import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {

    const baseURL = process.env.REACT_APP_BASEURL
    // console.log(baseURL)
    const {userId} = useParams()
    const [user, setUser] = useState({})
    useEffect(()=>{
        axios
        .get(`${baseURL}/api/users/${userId}`)
        .then(res => {setUser(res.data);console.log("aloooooooooooooo",res)})
        .catch(err => console.log(err))
    },[userId])
    const handleChange = (event) =>{
        setUser({
            ...user,
            [event.target.name]: event.target.value
          });
          console.log(event.target.name)
        }
    
    const handeSubmit = () =>{
        axios
        .post(`${baseURL}/api/users`,user)
        .then(res => {
            alert(
              `successfully!!!`
            );
          })
          .catch(err => {
            throw err;
          });
    }
    return (
        <div>
        <form action="">
        {console.log("helooo",user)}
            <label htmlFor="">Id</label><input name="id" type="text" value={user.id|| ""} onChange={handleChange}/>
            <br />
            <label htmlFor="">Name</label><input name="name" type="text" value={user.name||""} onChange = {handleChange}/>
            {/* <label htmlFor="">Birthday</label><input type="text" value={user} onChange/> */}
            <button type='submit' onClick={handeSubmit}>Submit</button>
        </form>
        </div>
    );
};

export default UserDetail;