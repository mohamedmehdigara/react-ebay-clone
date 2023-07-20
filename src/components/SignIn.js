// SignIn.js
import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    // Implement the sign-in logic here (e.g., using authentication service or API).
    console.log('Sign in with:', email, password);

    // Clear the form after successful sign-in.
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSignIn}>
      <h2>Sign In</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
