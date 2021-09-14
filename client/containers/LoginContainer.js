import React, { Component } from 'react';
import { useState } from 'react';

const LoginContainer = ({ setUserId }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  //function to handle changing username
  const handleUsernameInputChange = (event) => {
    event.persist();
    setLoginData((loginData) => ({
      ...loginData,
      username: event.target.value,
    }));
  };

  //function to handle changing password
  const handlePasswordInputChange = (event) => {
    event.persist();
    setLoginData((loginData) => ({
      ...loginData,
      password: event.target.value,
    }));
    // console.log(event.target.value)
  };
  
  return (
    <div className='login_container'>

      <form className='login-form' onSubmit={ event => { event.preventDefault(); login() }}>

        <div className='login-inputs'>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            className="login-form"
            type="text"
            name="username"
            placeholder="username"
            value={loginData.username}
            onChange={handleUsernameInputChange}
          />
        </div>

        <div className='login-inputs'>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="login-form"
            type="password"
            name="username"
            placeholder="password"
            value={loginData.password}
            onChange={handlePasswordInputChange}
          />
        </div>

        <div className='login-inputs'>
          <input className="login-button" type="submit" value="Log in" />
        </div>
      
      </form>

    </div>
  );
};

export default LoginContainer;