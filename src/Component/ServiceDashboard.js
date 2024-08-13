import React from 'react';
import './ServiceDashboard.css';

const ServiceDashboard = () => {
    return (
        <div className="ser-dashboard">
            <div className="ser-header">
                <h1>Dashboard</h1>
            </div>
            <div className="account-overview">
                <h2>Account Overview</h2>
                <div className="overview-cards">
                    <div className="ser-card">
                        <p>Total Registered User</p>
                        <h3>9</h3>
                    </div>
                    <div className="ser-card">
                        <p>Total Enquiry</p>
                        <h3>7</h3>
                    </div>
                    <div className="ser-card">
                        <p>Total Mechanics</p>
                        <h3>7</h3>
                    </div>
                    <div className="ser-card">
                        <p>Total Service Requests</p>
                        <h3>6</h3>
                    </div>
                    <div className="ser-card">
                        <p>New Service Requests</p>
                        <h3>0</h3>
                    </div>
                    <div className="ser-card">
                        <p>Rejected Service Requests</p>
                        <h3>1</h3>
                    </div>
                    <div className="ser-card">
                        <p>Completed Services</p>
                        <h3>4</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDashboard;
