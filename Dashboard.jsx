import React, { useState, useEffect } from 'react';
import { fetchData, submitData } from '../apiService';

const Dashboard = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await submitData(formData);
      setResponseMessage(result.message);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div>
      <h1>Submit Your Information</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Dashboard;