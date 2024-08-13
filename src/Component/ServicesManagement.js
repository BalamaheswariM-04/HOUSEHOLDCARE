import React, { useState } from 'react';
import './ServicesManagement.css';
import Navbar from './AdminNavbar';
const initialServices = [
    { id: 1, name: 'Cleaning', assignedTo: 'John Doe', availability: 'Available' },
    { id: 2, name: 'Cooking', assignedTo: 'Jane Smith', availability: 'Not Available' },
];

const initialEmployees = [
    { id: 1, name: 'John Doe', services: ['Cleaning'], availability: 'Available' },
    { id: 2, name: 'Jane Smith', services: ['Cooking'], availability: 'Not Available' },
    { id: 3, name: 'Lakshmi', services: ['Petcare'], availability: 'Not Available' },
    { id: 4, name: 'Priya', services: ['All Rounder'], availability: 'Available' },
];

const ServicesManagement = () => {
    const [services, setServices] = useState(initialServices);
    const [employees, setEmployees] = useState(initialEmployees);
    const [newService, setNewService] = useState('');

    const addService = () => {
        if (newService) {
            setServices([...services, { id: services.length + 1, name: newService, assignedTo: '', availability: 'Available' }]);
            setNewService('');
        }
    };

    const updateService = (id, updatedService) => {
        setServices(services.map(service => (service.id === id ? updatedService : service)));
    };

    const handleAssign = (serviceId, employeeName) => {
        const updatedServices = services.map(service =>
            service.id === serviceId ? { ...service, assignedTo: employeeName } : service
        );
        setServices(updatedServices);
    };

    return (
        <div>
            <Navbar/>
        <div className="services-management">
            <h1>Services Management</h1>
            <div className="add-service">
                <input
                    type="text"
                    placeholder="Add New Service"
                    value={newService}
                    onChange={e => setNewService(e.target.value)}
                />
                <button onClick={addService}>Add Service</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Assigned To</th>
                        <th>Availability</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(service => (
                        <tr key={service.id}>
                            <td>{service.name}</td>
                            <td>{service.assignedTo}</td>
                            <td>{service.availability}</td>
                            <td>
                                <select
                                    value={service.assignedTo}
                                    onChange={e => handleAssign(service.id, e.target.value)}
                                >
                                    <option value="">Select Employee</option>
                                    {employees.map(employee => (
                                        <option key={employee.id} value={employee.name}>
                                            {employee.name}
                                        </option>
                                    ))}
                                </select>
                                <button onClick={() => updateService(service.id, { ...service, availability: service.availability === 'Available' ? 'Not Available' : 'Available' })}>
                                    Toggle Availability
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default ServicesManagement;
