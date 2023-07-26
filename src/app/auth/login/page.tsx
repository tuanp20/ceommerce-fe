'use client';

import { useState } from 'react';
import { login } from '../../../Services/auth';
const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: any) => {
    console.log('process.env.URI_API', process.env.URI_API);

    e.preventDefault();
    const credentials = { username, password };
    console.log('credentials', credentials);
    const res = await login(credentials);
    console.log('res', res);
  };

  return (
    <>
      <h1>Login</h1>
      <form action='POST' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
