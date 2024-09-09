import React, { useState } from 'react';
import { Link } from "react-router-dom";


function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Save user data to Firebase
      const res = await fetch(
        "https://gymnasium-aeb73-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
            password,
          }),
        }
      );

      if (res.ok) {
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        alert("Account created successfully!");
      } else {
        alert("Failed to create account");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-50">
      <div className="bg-white rounded shadow-md p-4 md:p-6 lg:p-12 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="full-name">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="full-name"
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="********"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="********"
              required
            />
          </div>
          <button
            className=" bg-green-900  hover:bg-green-950 text-white font-bold py-2 px-4 rounded w-full"
            type="submit"
          >
            Sign Up
          </button>
          <p className="text-gray-600 text-sm mt-4">
            Already have an account? <a href="#" className="text-green-950"> <Link  to="/login">Login</Link></a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
