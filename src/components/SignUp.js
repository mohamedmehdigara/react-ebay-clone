// SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Implement the sign-up logic here (e.g., using authentication service or API).
    console.log('Sign up with:', email, password);

    // Clear the form after successful sign-up.
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
