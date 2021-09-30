import React, { Component, useState } from 'react'
import Card from '../Login/Card';
// import classes from '../Login/Login.module.css';
import Button from '../Login/Button';

const Profile = () => {
    const [username, setUsername] = useState("abcd");
    const [password, setPassword] = useState("12345678");
    const [name, setName] = useState("defg");
    const [postal, setPostal] = useState("123456");
    const [gender, setGender] = useState("M");

    const editHandler = (event) => {
        event.preventDefault();
        console.log(
            username,
            password,
            name,
            postal,
            gender
        );
      };

    return (
        
        <section className="profile">
            <h1 id='Portfolio'>{name}'s Profile</h1>
                <img src="https://www.seekpng.com/png/detail/365-3651600_default-portrait-image-generic-profile.png" 
                    alt="Avatar"
                    height="100"
                    width="100"/>
            
            <div className="container-details">
                
            <form onSubmit={editHandler}>
          <div>
            <label>
              <p>Username</p>
              <input
                type="text"
                onChange={setUsername}
                value={username}
                placeholder={username}
              />
            </label>
          </div>
          <div>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={setPassword}
                value={password}
                placeholder={password}
              />
            </label>
          </div>
          <div>
            <label>
              <p>First Name</p>
              <input 
                type="text" 
                onChange={setName} 
                value={name} 
                placeholder={name}/>
            </label>
          </div>
          <div>
            <label>
              <p>Postal Code</p>
              <input type="text" onChange={setPostal} value={postal} />
            </label>
          </div>

          <div>
            <label>
              <p>Gender</p>
              <input type="text" onChange={setGender} value={gender} />
            </label>
          </div>
          <div>
            <Button type="submit"> Submit Edit </Button>
          </div>
        </form>
            </div>

                    
        </section>
    )
}

export default Profile;
