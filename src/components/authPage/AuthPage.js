import React, { useState } from 'react';
import './AuthPage.css';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { checkValidation } from '../../utils/data';
import { toast } from 'react-toastify';

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    };
    const result = checkValidation(data);
    console.log(result, 'zzzzz');
    if (result.status === true) {
      setUser(result.res);
    }
  };

  if (user.length !== 0) {
    toast.success('Login Successful');
    return <Redirect to={{ pathname: '/home', data: [user] }} />;
  }

  return (
    <div className="container">
      <div>
        <form className="form-1" onSubmit={e => handleSubmit(e)}>
          <h3>Login</h3>
          <p className="field">
            <input
              className="input-field"
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <i className="icon-user icon-large"></i>
          </p>
          <p className="field">
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <i className="icon-lock icon-large"></i>
          </p>
          <p className="submit">
            <Button variant="primary" type="submit" value="Save">
              Login
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
