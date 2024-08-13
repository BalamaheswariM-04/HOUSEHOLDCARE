import React, { useState } from 'react';
import './UserManagement.css';
import Navbar from './AdminNavbar';
const initialUsers = [
    { name: 'Lakshmi', status: 'Not Logged in', roles: ['Worker', 'Customer'] },
    { name: 'priya', status: 'Not Logged in', roles: ['Worker'] },
    { name: 'Bala', status: 'Active', roles: ['Customer'] },
];

const UserManagement = () => {
    const [users, setUsers] = useState(initialUsers);
    const [newUser, setNewUser] = useState({ name: '', status: '', roles: [] });
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddUser = () => {
        if (editingIndex !== null) {
            const updatedUsers = users.map((user, index) => 
                index === editingIndex ? newUser : user
            );
            setUsers(updatedUsers);
            setEditingIndex(null);
        } else {
            setUsers([...users, newUser]);
        }
        setNewUser({ name: '', status: '', roles: [] });
    };

    const handleEditUser = (index) => {
        setEditingIndex(index);
        setNewUser(users[index]);
    };

    const handleRemoveUser = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleRoleChange = (e) => {
        const { value, checked } = e.target;
        setNewUser({
            ...newUser,
            roles: checked ? [...newUser.roles, value] : newUser.roles.filter((role) => role !== value)
        });
    };

    return (
        <div>
            <Navbar/>
        <div className="user-management">
            <div className="header">
                <h1>User Management</h1>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Status"
                    name="status"
                    value={newUser.status}
                    onChange={handleChange}
                />
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="Worker"
                            checked={newUser.roles.includes('Worker')}
                            onChange={handleRoleChange}
                        />
                        Worker
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Customer"
                            checked={newUser.roles.includes('Customer')}
                            onChange={handleRoleChange}
                        />
                        Customer
                    </label>
                </div>
                <button onClick={handleAddUser}>
                    {editingIndex !== null ? 'Save User' : 'Add User'}
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>User Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name} <span>{user.status}</span></td>
                            <td>
                                {user.roles.map((role, idx) => (
                                    <span key={idx} className={`role ${role.toLowerCase()}`}>{role}</span>
                                ))}
                            </td>
                            <td>
                                <button onClick={() => handleEditUser(index)}>Modify Roles</button>
                                <button onClick={() => handleRemoveUser(index)}>Remove User</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <span>Displaying page: </span>
                <button>First</button>
                <button>10</button>
                <button>11</button>
                <button>12</button>
                <button>25</button>
                <button>26</button>
                <button>Last</button>
            </div>
        </div>
        </div>
    );
};

export default UserManagement;
