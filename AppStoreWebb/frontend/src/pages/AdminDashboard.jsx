import React, { useState } from 'react';
import API from '../api';

function AdminDashboard() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    version: '',
    size: '',
    apk: null,
    icon: '',
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) data.append(key, formData[key]);
    await API.post('/apps', data);
    alert('App uploaded!');
  };

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="App Name" onChange={handleChange} required />
        <input name="description" placeholder="Description" onChange={handleChange} required />
        <input name="category" placeholder="Category" onChange={handleChange} required />
        <input name="version" placeholder="Version" onChange={handleChange} required />
        <input name="size" placeholder="Size" onChange={handleChange} required />
        <input type="file" name="apk" onChange={handleChange} required />
        <input name="icon" placeholder="Icon URL" onChange={handleChange} required />
        <button type="submit">Upload App</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
