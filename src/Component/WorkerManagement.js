import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WorkerManagement.css';
import Navbar from './AdminNavbar';
const WorkerManagement = () => {
  const [workers, setWorkers] = useState([]);
  const [editWorker, setEditWorker] = useState(null);

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/workers');
      setWorkers(response.data);
    } catch (error) {
      console.error('Error fetching worker data:', error);
    }
  };

  const handleDelete = async (workerId) => {
    try {
      await axios.delete(`http://localhost:8080/api/workers/${workerId}`);
      setWorkers(workers.filter(worker => worker.id !== workerId));
    } catch (error) {
      console.error('Error deleting worker:', error);
    }
  };

  const handleEdit = (worker) => {
    setEditWorker(worker);
  };

  const handleSave = async () => {
    if (editWorker) {
      try {
        await axios.put(`http://localhost:8080/api/workers/${editWorker.id}`, editWorker);
        setEditWorker(null);
        fetchWorkers();
      } catch (error) {
        console.error('Error updating worker:', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditWorker((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar/>
    <div className="worker-management">
      <h1>Worker Management</h1>
      {editWorker && (
        <div className="edit-form">
          <h2>Edit Worker</h2>
          <input
            type="text"
            name="name"
            value={editWorker.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={editWorker.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="service"
            value={editWorker.service}
            onChange={handleChange}
            placeholder="Service"
          />
          <input
            type="text"
            name="location"
            value={editWorker.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <input
            type="text"
            name="mobile"
            value={editWorker.mobile}
            onChange={handleChange}
            placeholder="Mobile"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditWorker(null)}>Cancel</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Location</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workers.map(worker => (
            <tr key={worker.id}>
              <td>{worker.name}</td>
              <td>{worker.email}</td>
              <td>{worker.service}</td>
              <td>{worker.location}</td>
              <td>{worker.mobile}</td>
              <td>
                <button onClick={() => handleEdit(worker)}>Edit</button>
                <button onClick={() => handleDelete(worker.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default WorkerManagement;
